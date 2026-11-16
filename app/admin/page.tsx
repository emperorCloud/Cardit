import { isAdmin, adminConfigured } from "@/lib/auth";
import { dbConfigured } from "@/lib/db";
import { blobConfigured } from "@/lib/blob";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) return <AdminLogin configured={adminConfigured()} />;
  return (
    <AdminDashboard
      dbReady={dbConfigured()}
      blobReady={blobConfigured()}
    />
  );
}
