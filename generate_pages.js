const fs = require('fs');
const path = require('path');

const resources = [
  'company-introduction',
  'company-presentation',
  'mvp-demo',
  'business-model'
];

resources.forEach(id => {
  const dir = path.join('src', 'app', 'resources', id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const code = `import { resources } from "@/lib/config/resources";
import { notFound } from "next/navigation";
import ResourceViewerClient from "../components/ResourceViewerClient";

export function generateMetadata() {
  const resource = resources.find((r) => r.id === "${id}");
  
  if (!resource) {
    return {
      title: "Resource Not Found | Percepta",
    };
  }

  return {
    title: \`\${resource.title} | Percepta Resources\`,
    description: resource.description,
  };
}

export default function ResourcePage() {
  const resource = resources.find((r) => r.id === "${id}");

  if (!resource) {
    notFound();
  }

  return <ResourceViewerClient resource={resource} />;
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), code);
});
