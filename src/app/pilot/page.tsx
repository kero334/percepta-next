import Link from "next/link";
import * as Icons from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScySPUwTm_c03DuriOamu-2NRXgERqR6dvEjGnfcSfoV14SrQ/viewform?usp=dialog";

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
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <Icons.Shield className="w-8 h-8 text-primary" />
              Percepta
            </div>
          </div>
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            WELCOME TO OUR WAITLIST
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Join the Percepta <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Early Access & Pilot Program</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Be among the first organizations helping shape the future of AI-powered workplace safety.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-md px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Apply Now
              <Icons.ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="text-sm text-muted-foreground">
              Application takes less than 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY JOIN */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <Icons.Zap className="w-10 h-10 text-primary mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Early Access</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get access to upcoming Percepta features before public release.
            </p>
          </div>
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <Icons.Compass className="w-10 h-10 text-emerald-400 mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Pilot Program</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Participate in real-world testing and validation of AI-powered workplace safety monitoring.
            </p>
          </div>
          <div className="bg-[#121214] border border-border/40 p-8 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <Icons.MessageSquare className="w-10 h-10 text-blue-400 mx-auto mb-5" />
            <h3 className="font-bold text-white text-lg mb-3">Direct Feedback</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Work directly with the founding team and help shape the future roadmap of Percepta.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: RESOURCES */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Learn More About Percepta</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Review our company presentation, business model, and product demonstrations before applying.
          </p>
          <Link href="/resources" className="inline-flex h-11 items-center justify-center rounded-md px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
            Explore Resources
          </Link>
        </div>
      </section>

      {/* SECTION 4: APPLICATION CTA */}
      <section className="py-20 relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[300px] bg-primary rounded-[100%] blur-[100px]" />
        </div>
        
        <div className="relative z-10 bg-[#121214]/80 backdrop-blur-md border border-border/40 rounded-3xl p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-400 to-blue-500" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Percepta?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Apply for early access and pilot opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-md px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Apply Now
            </a>
            <Link 
              href="/resources" 
              className="inline-flex h-14 items-center justify-center rounded-md px-8 text-lg font-bold bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto transition-colors border border-white/5"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT INFORMATION */}
      <section className="py-16 mb-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center border-t border-border/40">
        <h2 className="text-xl font-semibold text-white mb-8">Questions?</h2>
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
