import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Knowledge Hub | Percepta",
  description: "Explore industrial safety insights, computer vision research, and operational guides from Percepta.",
};

// Ensure page is statically generated and never accesses dynamic features
export const dynamic = "error";

export default function ResourcesPage() {
  return <ResourcesClient />;
}
