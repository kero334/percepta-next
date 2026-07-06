"use server";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";

const demoSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company_name: z.string().min(2, "Company name is required"),
  job_title: z.string().min(2, "Job title is required"),
  message: z.string().optional(),
});

export async function submitDemoRequest(formData: FormData) {
  // Use service role key if available to bypass RLS for public form submissions
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl) {
    return { error: "Database configuration missing." };
  }
  
  // Create a regular JS client with the service key to bypass RLS
  // If service key is missing, fallback to anon key, but inserts may fail due to RLS
  const keyToUse = serviceKey || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createSupabaseClient(supabaseUrl, keyToUse as string);

  const industry = formData.get("industry") as string;
  const cameras = formData.get("cameras") as string;
  const interest = formData.get("interest") as string;
  const challenge = formData.get("message") as string;
  
  const combinedMessage = `Industry: ${industry}\nCameras: ${cameras}\nInterest: ${interest}\nChallenge: ${challenge}`;

  const rawData = {
    full_name: formData.get("full_name") as string,
    email: formData.get("email") as string,
    company_name: formData.get("company_name") as string,
    job_title: formData.get("job_title") as string,
    message: combinedMessage,
  };

  const validation = demoSchema.safeParse(rawData);

  if (!validation.success) {
    return { error: validation.error.issues[0].message };
  }

  const { error } = await supabase.from("demo_requests").insert([validation.data]);

  if (error) {
    console.error("Demo request error:", error);
    return { error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}
