import { resources } from "@/lib/config/resources";
import { notFound } from "next/navigation";
import ResourceViewerClient from "../components/ResourceViewerClient";

export function generateMetadata() {
  const resource = resources.find((r) => r.id === "business-model");
  
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

export default function ResourcePage() {
  const resource = resources.find((r) => r.id === "business-model");

  if (!resource) {
    notFound();
  }

  return <ResourceViewerClient resource={resource} />;
}
