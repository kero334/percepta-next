import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const env = process.env;
  
  // Edge runtime checking (Next.js specific global)
  // @ts-ignore
  const isEdge = typeof EdgeRuntime !== 'undefined';
  
  return NextResponse.json({
    NEXT_PUBLIC_SUPABASE_URL_EXISTS: !!env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY_EXISTS: !!env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_URL_EXISTS: !!env.SUPABASE_URL,
    SUPABASE_ANON_KEY_EXISTS: !!env.SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY_EXISTS: !!env.SUPABASE_SERVICE_ROLE_KEY,
    
    // Runtime detection
    runtime: isEdge ? "edge" : "node",
    has_process_env: typeof process !== "undefined" && typeof process.env !== "undefined",
    
    // Cloudflare specific variables often injected
    CF_PAGES_BRANCH_EXISTS: !!env.CF_PAGES_BRANCH,
    CF_PAGES_URL_EXISTS: !!env.CF_PAGES_URL,
    NODE_ENV: env.NODE_ENV,
    
    total_env_keys: Object.keys(env).length
  });
}
