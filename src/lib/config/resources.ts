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
    id: "company-introduction",
    title: "Percepta Company Introduction",
    type: "video",
    description: "Learn about Percepta's vision, mission, technology, and how our AI-powered safety platform transforms existing CCTV infrastructure into proactive workplace safety intelligence.",
    url: "https://drive.google.com/file/d/12wKwtYw0AOMXE9LmM31z8_CSGbDpz3nK/view?usp=drive_link",
    featured: true,
  },
  {
    id: "company-presentation",
    title: "Percepta Company Presentation",
    type: "presentation",
    description: "Explore our company overview, market opportunity, problem statement, technology approach, business model, and future growth strategy.",
    url: "https://drive.google.com/file/d/1JfQFIhc1tyZFDKYueCtrjHyE2bPGqGYE/view?usp=drive_link",
    featured: true,
  },
  {
    id: "business-model",
    title: "Percepta Business Model",
    type: "document",
    description: "Review Percepta's business model, customer segments, revenue strategy, value proposition, and scalability roadmap.",
    url: "https://drive.google.com/file/d/1kRAt8Ez6O6lE0jH60BOZ9DJCEBtkdDrd/view?usp=drive_link",
    featured: true,
  }
];
