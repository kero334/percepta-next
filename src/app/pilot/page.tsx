import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";

export default function PilotPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] overflow-hidden font-sans text-gray-200">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-16 relative flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="flex justify-center mb-8">
            {/* Using an SVG or simple stylized element if the logo image isn't available, but we'll try to load logo.svg or use text fallback */}
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <Icons.Shield className="w-8 h-8 text-primary" />
              Percepta
            </div>
          </div>
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            WELCOME TO OUR WAITLIST
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Join Percepta&apos;s Early Access & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Pilot Program</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Be among the first organizations helping shape the future of AI-powered workplace safety.
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg">
            <Icons.Zap className="w-10 h-10 text-primary mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Early Access</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get access to upcoming Percepta features before public release and integrate proactive safety intelligence into your operations.
            </p>
          </div>
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg">
            <Icons.Compass className="w-10 h-10 text-emerald-400 mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Pilot Program</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Participate in real-world testing and validation tailored to the specific operational challenges of your facility.
            </p>
          </div>
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg">
            <Icons.MessageSquare className="w-10 h-10 text-blue-400 mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Direct Feedback</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Help shape the future roadmap of Percepta. Work directly with the founder to prioritize the models that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: RESOURCES */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Learn More About Percepta</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore presentations, MVP demonstrations, and additional resources before applying to the program.
          </p>
          <Link href="/resources" className="inline-flex h-11 items-center justify-center rounded-md px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
            View Resources
          </Link>
        </div>
      </section>

      {/* SECTION 4: GOOGLE FORM IFRAME */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-[#111113] border border-border/30 rounded-3xl overflow-hidden shadow-2xl relative min-h-[800px]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-400 to-blue-500 z-10" />
          
          {/* Loading State Fallback */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <Icons.Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
              <p className="text-sm text-muted-foreground">Loading Application Form...</p>
            </div>
          </div>
          
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScySPUwTm_c03DuriOamu-2NRXgERqR6dvEjGnfcSfoV14SrQ/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="relative z-10 w-full bg-transparent"
            title="Percepta Waitlist Application Form"
            style={{ minHeight: "1200px", border: "none", overflow: "hidden" }}
            scrolling="no"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* SECTION 5: CONTACT INFORMATION */}
      <section className="py-16 mb-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center border-t border-border/40">
        <h2 className="text-xl font-semibold text-white mb-8">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Icons.User className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Founder</p>
              <p className="text-white font-medium">Kerollos Karam</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Icons.Mail className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
              <a href="mailto:kerokaram2022@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                kerokaram2022@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Icons.Globe className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Website</p>
              <a href="https://percepta.sbs" className="text-white font-medium hover:text-primary transition-colors">
                https://percepta.sbs
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
