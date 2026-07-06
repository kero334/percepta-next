import { createClient } from "@/lib/supabase/server";

export async function verifyAdminAccess() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { authorized: false, user: null, role: null };
    }

    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .single();

    if (roleError || !roleData || (roleData.role !== "Admin" && roleData.role !== "Editor")) {
      return { authorized: false, user, role: roleData?.role || null };
    }

    return { authorized: true, user, role: roleData.role };
  } catch (error: any) {
    console.error("verifyAdminAccess Error:", error.message || error);
    return { authorized: false, user: null, role: null };
  }
}
