import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin Login | Percepta CMS",
};

export default async function LoginPage() {
  let user = null;
  let authError = null;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch (error: any) {
    console.error("Login Page Auth Error:", error.message || error);
    authError = error.message || "Failed to initialize Supabase client";
  }

  if (user) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Percepta CMS
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Sign in to the editorial dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {authError && (
          <div className="mb-4 bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-sm">
            <strong>System Error:</strong> {authError}
          </div>
        )}
        <div className="bg-[#121214] border border-border/20 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
