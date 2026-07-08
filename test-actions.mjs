import { submitContact } from "./src/app/contact/actions.js";
import { submitDemoRequest } from "./src/app/pilot/actions.js";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function run() {
  console.log("Testing Contact Form Server Action...");
  const contactData = new FormData();
  contactData.append("name", "Verification Test");
  contactData.append("email", "verify@percepta.test");
  contactData.append("subject", "Production Verification");
  contactData.append("message", "This is an automated verification test.");
  
  try {
    const res = await submitContact(contactData);
    console.log("Contact Form Result:", res);
  } catch(e) {
    console.error("Contact Form Failed:", e);
  }
}
run();
