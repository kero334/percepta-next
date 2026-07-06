export type ResourceType =
  | "video"
  | "presentation"
  | "pdf"
  | "document";

export type ResourceSource = 
  | "google-drive"
  | "youtube"
  | "loom";

export interface StaticResource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  source?: ResourceSource; // Defaults to "google-drive" if not provided
  thumbnail?: string;
  url: string;
  featured?: boolean;
}

export const resources: StaticResource[] = [
  {
    id: "company-overview",
    title: "Percepta Company Overview",
    type: "presentation",
    description: "An in-depth look at Percepta's mission, edge computing architecture, and the future of industrial safety.",
    url: "https://drive.google.com/file/d/placeholder_overview/preview", // Replace with real link later
    featured: true,
  },
  {
    id: "mvp-demo",
    title: "Percepta MVP Demo",
    type: "video",
    description: "Watch a live demonstration of our computer vision system identifying safety hazards in real-time.",
    url: "https://drive.google.com/file/d/placeholder_mvp/preview",
    featured: true,
  },
  {
    id: "product-vision",
    title: "Product Vision",
    type: "document",
    description: "Our strategic roadmap for scaling AI-driven forensic safety across global manufacturing centers.",
    url: "https://drive.google.com/file/d/placeholder_vision/preview",
    featured: true,
  },
  {
    id: "edge-architecture-spec",
    title: "Edge Architecture Specification",
    type: "pdf",
    description: "Technical specifications detailing our low-latency edge deployment model and data privacy guarantees.",
    url: "https://drive.google.com/file/d/placeholder_edge/preview",
  },
  {
    id: "deployment-guide",
    title: "Deployment Guide",
    type: "document",
    description: "Step-by-step instructions for integrating Percepta sensor nodes into existing factory infrastructure.",
    url: "https://drive.google.com/file/d/placeholder_guide/preview",
  }
];
