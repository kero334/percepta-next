"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/ui/animations";
import * as Icons from "lucide-react";
import Image from "next/image";
import { resources } from "@/lib/config/resources";

const getIconForType = (type: string) => {
  switch (type) {
    case "video": return Icons.PlayCircle;
    case "presentation": return Icons.MonitorPlay;
    case "pdf": return Icons.FileText;
    case "document": return Icons.File;
    default: return Icons.FileText;
  }
};

const getBadgeColorForType = (type: string) => {
  switch (type) {
    case "video": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
    case "presentation": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
    case "pdf": return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    case "document": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    default: return "text-gray-400 bg-gray-500/10 border-gray-500/20";
  }
};

const getButtonTextForType = (type: string) => {
  switch (type) {
    case "video": return "Watch Video";
    case "presentation": return "View Presentation";
    case "document":
    case "pdf": return "View Document";
    default: return "View Resource";
  }
};

export default function ResourcesClient() {
  const featuredResources = resources.filter(r => r.featured);
  const regularResources = resources.filter(r => !r.featured);

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] overflow-hidden pb-24 font-sans text-gray-200">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 relative overflow-hidden flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <FadeInView className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Media Center.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore our foundational architecture documents, platform demos, and strategic roadmaps.
          </p>
        </FadeInView>
      </section>

      {/* 2. FEATURED RESOURCES */}
      {featuredResources.length > 0 && (
        <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <FadeInView>
             <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Featured Highlights</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredResources.map((resource, idx) => (
                   <a 
                     href={resource.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     key={resource.id}
                     className={`group relative bg-[#121214] border border-border/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 flex flex-col ${idx === 0 ? 'lg:col-span-2 lg:flex-row' : ''}`}
                   >
                      {/* Optional Thumbnail */}
                      {resource.thumbnail && (
                         <div className={`relative bg-black ${idx === 0 ? 'lg:w-1/2 min-h-[300px]' : 'h-48'}`}>
                            <Image src={resource.thumbnail} alt={resource.title} fill className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            {resource.type === "video" && (
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                     <Icons.Play className="w-6 h-6 text-white ml-1" />
                                  </div>
                               </div>
                            )}
                         </div>
                      )}
                      
                      <div className={`p-8 flex flex-col flex-1 justify-center ${!resource.thumbnail && idx === 0 ? 'py-16' : ''}`}>
                         <div className="flex items-center gap-3 mb-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getBadgeColorForType(resource.type)}`}>
                               {(() => {
                                  const IconComponent = getIconForType(resource.type);
                                  return <IconComponent className="w-3 h-3" />;
                               })()}
                               {resource.type}
                            </span>
                            <span className="text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                               <Icons.Star className="w-3 h-3 fill-primary" /> Featured
                            </span>
                         </div>
                         <h3 className={`${idx === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-bold text-white mb-4 group-hover:text-primary transition-colors`}>{resource.title}</h3>
                         <p className={`${idx === 0 ? 'text-base' : 'text-sm'} text-muted-foreground leading-relaxed mb-6`}>{resource.description}</p>
                         
                         <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                            <span>{getButtonTextForType(resource.type)}</span>
                            <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                         </div>
                      </div>
                   </a>
                ))}
             </div>
           </FadeInView>
        </section>
      )}

      {/* 3. ALL RESOURCES GRID */}
      {regularResources.length > 0 && (
        <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <FadeInView>
             <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-border/50 pl-4">Library</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularResources.map((resource) => (
                   <a 
                     href={resource.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     key={resource.id}
                     className="bg-[#121214] border border-border/20 p-6 md:p-8 rounded-2xl hover:border-primary/40 hover:bg-[#151518] transition-all cursor-pointer group flex flex-col h-full"
                   >
                      <div className="flex items-start justify-between mb-6">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getBadgeColorForType(resource.type)} bg-opacity-10 border-opacity-20`}>
                            {(() => {
                               const IconComponent = getIconForType(resource.type);
                               return <IconComponent className="w-6 h-6" />;
                            })()}
                         </div>
                         <Icons.ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border ${getBadgeColorForType(resource.type)}`}>
                           {resource.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1 leading-relaxed mb-6">{resource.description}</p>
                      
                      <div className="mt-auto pt-4 border-t border-border/10 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-white transition-colors">
                         <span>{getButtonTextForType(resource.type)}</span>
                      </div>
                   </a>
                ))}
             </div>
           </FadeInView>
        </section>
      )}
      
    </div>
  );
}
