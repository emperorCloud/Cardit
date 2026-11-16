import { isAdmin, adminConfigured } from "@/lib/auth";
import { dbConfigured } from "@/lib/db";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  if (!isAdmin()) return <AdminLogin configured={adminConfigured()} />;
  return (
    <AdminDashboard
      dbReady={dbConfigured()}
      blobReady={Boolean(process.env.BLOB_READ_WRITE_TOKEN)}
    />
  );
}
