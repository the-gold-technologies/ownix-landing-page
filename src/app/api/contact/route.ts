import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getWeb3FormsKey() {
  if (process.env.WEB3FORMS_ACCESS_KEY) {
    console.log("Found key in process.env:", process.env.WEB3FORMS_ACCESS_KEY);
    return process.env.WEB3FORMS_ACCESS_KEY;
  }
  
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    console.log("Checking for key in file:", envPath);
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(/WEB3FORMS_ACCESS_KEY\s*=\s*([^\s#\r\n]+)/);
      if (match && match[1]) {
        console.log("Found key in .env.local file:", match[1].trim());
        return match[1].trim();
      }
    }
  } catch (err) {
    console.error("Failed to read .env.local on the fly:", err);
  }
  console.log("No Web3Forms key found anywhere.");
  return null;
}

function getContactEmail() {
  if (process.env.CONTACT_EMAIL) {
    return process.env.CONTACT_EMAIL;
  }
  
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(/CONTACT_EMAIL\s*=\s*([^\s#\r\n]+)/);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  } catch (err) {
    console.error("Failed to read CONTACT_EMAIL from .env.local:", err);
  }
  return "ownixrealty@gmail.com";
}

export async function GET() {
  try {
    const key = getWeb3FormsKey();
    return NextResponse.json({ key });
  } catch (error: any) {
    return NextResponse.json({ key: null }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Check if Web3Forms Access Key is provided in environment variables or env.local file
    const web3formsKey = getWeb3FormsKey();

    if (web3formsKey) {
      console.log("Routing request to Web3Forms API...");
      // Map body fields to Web3Forms expected payload structure
      const payload = {
        access_key: web3formsKey,
        subject: `New Lead from Ownix - ${body["Form Source"] || "Co-Ownership Portal"}`,
        name: body["Full Name"] || "Anonymous User",
        email: body["Email Address"] || "",
        phone: body["Phone Number"] || "",
        budget: body["Investment Budget"] || "",
        message: body["User Message"] || "Interested in co-ownership.",
        ...(body["Target Property"] ? { "target_property": body["Target Property"] } : {})
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Web3Forms returned non-JSON response:", text);
        throw new Error(`Web3Forms API returned non-JSON response: ${text.substring(0, 100)}`);
      }
      
      return NextResponse.json(data, { status: response.status });
    } else {
      console.log("Routing request to fallback FormSubmit API...");
      const contactEmail = getContactEmail();
      // Fallback to FormSubmit (which may have Cloudflare 522 timeouts depending on their server status)
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("FormSubmit returned non-JSON response:", text);
        throw new Error(`FormSubmit API returned non-JSON: ${text.substring(0, 100)}`);
      }

      return NextResponse.json(data, { status: response.status });
    }
  } catch (error: any) {
    console.error("Server-side contact form forward error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email." },
      { status: 500 },
    );
  }
}
