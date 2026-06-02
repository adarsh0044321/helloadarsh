import React from "react";
import { FadeIn } from "./FadeIn";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import { Magnet } from "./Magnet";

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-dark-bg text-light-text px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center border-t border-[#D7E2EA]/10 relative z-10 select-none overflow-hidden"
    >
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mesh-glow-purple scale-125 z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-10 mesh-glow-blue scale-110 z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center z-10">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-10 sm:mb-14 md:mb-16 flex items-center justify-center flex-wrap gap-x-[1.5vw] gap-y-[0.5vw]"
            style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
          >
            <span>Get</span>
            <span 
              className="inline-block w-[12vw] h-[5vw] rounded-full align-middle bg-cover bg-center border border-light-text/20 shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:scale-105 hover:border-light-text/40 transition-all duration-500 cursor-pointer" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop")',
              }}
            ></span>
            <span>In Touch</span>
          </h2>
        </FadeIn>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 text-left mt-8 items-start w-full">
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-light-text opacity-70 mb-2">Contact Details</h3>
            
            <FadeIn delay={0.1} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <Mail className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">Email</span>
                <a
                  href="mailto:adarshkumarsingh004@gmail.com"
                  className="font-medium text-light-text hover:text-white transition-colors"
                >
                  adarshkumarsingh004@gmail.com
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <Phone className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">Phone</span>
                <a
                  href="tel:+916204240233"
                  className="font-medium text-light-text hover:text-white transition-colors"
                >
                  +91 6204240233
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <MapPin className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">Location</span>
                <span className="font-medium text-light-text group-hover:text-white transition-colors">
                  Palamu, Jharkhand, India
                </span>
              </div>
            </FadeIn>

            <div className="border-t border-[#D7E2EA]/10 my-4 w-full" />

            <h3 className="text-sm font-semibold uppercase tracking-wider text-light-text opacity-70 mb-2">Profiles</h3>

            <FadeIn delay={0.15} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <LinkedinIcon className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/adarsh-kumar-singh-166b76317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-light-text hover:text-white transition-colors flex items-center gap-1"
                >
                  adarsh-kumar-singh-166b76317 <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <GithubIcon className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">GitHub</span>
                <a
                  href="https://github.com/adarsh0044321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-light-text hover:text-white transition-colors flex items-center gap-1"
                >
                  adarsh0044321 <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.35} y={20} className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-[#D7E2EA]/5 rounded-full border border-[#D7E2EA]/10 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-light-text group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5">Current Portfolio</span>
                <a
                  href="https://juvdeveloperss.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-light-text hover:text-white transition-colors flex items-center gap-1"
                >
                  juvdeveloperss.netlify.app <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Netlify Contact Form (7 cols) */}
          <div className="lg:col-span-7 w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
            <FadeIn delay={0.2} y={30} className="w-full">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="flex flex-col gap-5 w-full text-left"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-60">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 rounded-xl px-4 py-3 text-light-text placeholder-white/20 outline-none transition-all duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-60">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 rounded-xl px-4 py-3 text-light-text placeholder-white/20 outline-none transition-all duration-300 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-60">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    placeholder="How can I help you?" 
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 rounded-xl px-4 py-3 text-light-text placeholder-white/20 outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>
                <div className="mt-2 flex justify-end">
                  <Magnet padding={25} strength={1.8}>
                    <button 
                      type="submit" 
                      className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl uppercase tracking-widest text-xs transition-colors duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer"
                    >
                      Send Message
                    </button>
                  </Magnet>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Footer Text */}
        <FadeIn delay={0.5} y={20} className="mt-20 md:mt-28 opacity-30 text-xs sm:text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Adarsh Kumar Singh. All Rights Reserved.
        </FadeIn>
      </div>
    </section>
  );
};
