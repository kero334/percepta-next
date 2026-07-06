import { verifyAdminAccess } from "@/lib/cms/auth";
import { redirect } from "next/navigation";
import * as Icons from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard | Percepta Admin",
};

export default async function AdminDashboard() {
  const { authorized, role } = await verifyAdminAccess();
  if (!authorized) redirect("/admin/login");

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, {role}.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#121214] border border-border/20 p-8 rounded-xl flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
            <Icons.Image className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Media Library</h3>
          <p className="text-muted-foreground mb-6">Manage images and assets used across the Percepta website.</p>
          <Link href="/admin/media">
            <Button className="bg-primary text-black hover:bg-primary/90">
              Go to Media Library
            </Button>
          </Link>
        </div>

        <div className="bg-[#121214] border border-border/20 p-8 rounded-xl flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
            <Icons.History className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Audit Logs</h3>
          <p className="text-muted-foreground mb-6">Review system access and modification history for compliance.</p>
          <Link href="/admin/audit">
            <Button className="bg-primary text-black hover:bg-primary/90">
              View Audit Logs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
