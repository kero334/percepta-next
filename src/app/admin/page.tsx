import { verifyAdminAccess } from "@/lib/cms/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminRootPage() {
  let authorized = false;
  
  try {
    const result = await verifyAdminAccess();
    authorized = result.authorized;
  } catch (error: any) {
    // If this is a Next.js internal error (like DynamicServerError), rethrow it
    if (error.digest?.includes("DYNAMIC_SERVER_USAGE")) {
      throw error;
    }
    console.error("AdminRootPage Verification Error:", error.message || error);
    // If it fails (e.g. missing env vars or auth failure), we default to unauthorized
    authorized = false;
  }
  
  if (!authorized) {
    redirect("/admin/login");
  } else {
    redirect("/admin/dashboard");
  }
}
