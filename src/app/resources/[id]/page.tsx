import { resources } from "@/lib/config/resources";
import { notFound } from "next/navigation";
import ResourceViewerClient from "./ResourceViewerClient";

export const dynamicParams = false; // Serve only statically generated routes

export async function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === id);
  
  if (!resource) {
    return {
      title: "Resource Not Found | Percepta",
    };
  }

  return {
    title: `${resource.title} | Percepta Resources`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    notFound();
  }

  return <ResourceViewerClient resource={resource} />;
}
