import { resources } from "@/lib/config/resources";
import { notFound } from "next/navigation";
import ResourceViewerClient from "./ResourceViewerClient";

export const dynamic = "error"; // Force static generation

export async function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resource = resources.find((r) => r.id === params.id);
  
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

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = resources.find((r) => r.id === params.id);

  if (!resource) {
    notFound();
  }

  return <ResourceViewerClient resource={resource} />;
}
