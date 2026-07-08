"use server";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(formData: FormData) {
  // Use service role key if available to bypass RLS for public form submissions
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    return { error: "Database configuration missing." };
  }

  // Create a regular JS client with the service key to bypass RLS
  const keyToUse = serviceKey || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createSupabaseClient(supabaseUrl, keyToUse as string);

  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    return { error: validation.error.issues[0].message };
  }

  const { error } = await supabase.from("contacts").insert([validation.data]);

  if (error) {
    console.error("Contact error:", error);
    return { error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}
