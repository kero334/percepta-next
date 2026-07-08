"use client";

import { useRef, useState, useEffect } from "react";
import { StaticResource, resources } from "@/lib/config/resources";
import Link from "next/link";
import { FadeInView } from "@/components/ui/animations";
import * as Icons from "lucide-react";
import Image from "next/image";

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

export default function ResourceViewerClient({ resource }: { resource: StaticResource }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Generate Google Drive embed URL
  const embedUrl = resource.url.replace(/\/view(\?.*)?$/, '/preview');

  // Find related resources
  const relatedResources = resources
    .filter(r => r.id !== resource.id)
    .slice(0, 3); // Take up to 3 related

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  const IconComponent = getIconForType(resource.type);

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] overflow-hidden font-sans text-gray-200">
      
      {/* 1. Header & Breadcrumbs */}
      <div className="pt-24 pb-8 border-b border-border/10 bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-6">
            <Link href="/resources" className="hover:text-white transition-colors flex items-center gap-1">
              <Icons.ArrowLeft className="w-4 h-4" />
              Resources
            </Link>
            <Icons.ChevronRight className="w-4 h-4 text-border" />
            <span className="text-white truncate max-w-[200px] sm:max-w-none">{resource.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getBadgeColorForType(resource.type)}`}>
                  <IconComponent className="w-3 h-3" />
                  {resource.type}
                </span>
                {resource.featured && (
                  <span className="text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    <Icons.Star className="w-3 h-3 fill-primary" /> Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{resource.title}</h1>
              <p className="text-base text-muted-foreground leading-relaxed">{resource.description}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button 
                onClick={toggleFullscreen}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-border/50 bg-[#121214] hover:bg-white/5 hover:text-white h-10 px-4 py-2"
              >
                {isFullscreen ? <Icons.Minimize className="w-4 h-4" /> : <Icons.Maximize className="w-4 h-4" />}
                {isFullscreen ? "Exit Fullscreen" : "Open Fullscreen"}
              </button>
              
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <Icons.ExternalLink className="w-4 h-4" />
                Open Original File
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Embedded Viewer */}
      <section className="py-8 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-1 flex flex-col">
        <FadeInView className="flex-1 flex flex-col">
          <div 
            ref={containerRef}
            className={`w-full bg-[#121214] border border-border/20 rounded-xl overflow-hidden shadow-2xl relative ${
              isFullscreen ? "h-screen w-screen rounded-none border-none fixed inset-0 z-50 flex items-center justify-center" : "aspect-video min-h-[500px]"
            }`}
          >
            {/* When full screen, allow returning via escape, but also render a close button just in case */}
            {isFullscreen && (
               <button 
                 onClick={toggleFullscreen}
                 className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
               >
                 <Icons.X className="w-5 h-5" />
               </button>
            )}
            
            <iframe
              src={embedUrl}
              className={`w-full h-full border-none ${isFullscreen ? "max-h-screen" : ""}`}
              allow="autoplay; fullscreen; picture-in-picture"
              title={resource.title}
            ></iframe>
          </div>
        </FadeInView>
      </section>

      {/* 3. CTA Section */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
         <FadeInView>
            <div className="bg-gradient-to-br from-[#121214] to-[#09090b] border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
               
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Percepta?</h2>
                 <p className="text-muted-foreground text-lg mb-8">
                   Learn how Percepta transforms existing CCTV infrastructure into proactive workplace safety intelligence.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                      href="/pilot" 
                      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full sm:w-auto"
                    >
                      Join Waitlist
                    </Link>
                    <Link 
                      href="/product" 
                      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-border/50 bg-[#121214] hover:bg-white/5 hover:text-white h-11 px-8 w-full sm:w-auto"
                    >
                      View Platform
                    </Link>
                 </div>
               </div>
            </div>
         </FadeInView>
      </section>

      {/* 4. Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-16 bg-[#0c0c0e] border-t border-border/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeInView>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">Related Content</h2>
                <Link href="/resources" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  View All <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedResources.map((rel) => (
                  <Link 
                    href={`/resources/${rel.id}`}
                    key={rel.id}
                    className="bg-[#121214] border border-border/20 p-6 rounded-2xl hover:border-primary/40 hover:bg-[#151518] transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getBadgeColorForType(rel.type)} bg-opacity-10 border-opacity-20`}>
                        {(() => {
                          const RelIcon = getIconForType(rel.type);
                          return <RelIcon className="w-5 h-5" />;
                        })()}
                      </div>
                      <Icons.ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border ${getBadgeColorForType(rel.type)}`}>
                        {rel.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">{rel.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed line-clamp-3 mb-4">{rel.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-border/10 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-white transition-colors">
                      <span>{getButtonTextForType(rel.type)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>
      )}
      
    </div>
  );
}
