import { verifyAdminAccess } from "@/lib/cms/auth";
import { redirect } from "next/navigation";

export default async function AdminRootPage() {
  const { authorized } = await verifyAdminAccess();
  
  if (!authorized) {
    redirect("/admin/login");
  } else {
    redirect("/admin/dashboard");
  }
}
