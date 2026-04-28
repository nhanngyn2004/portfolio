import { RevealOnScroll } from "../RevealOnScroll"
import profileImage from '/images/profile.png'

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center border-b border-[#e4e4ec] pt-16">
            <div className="w-full">
            <RevealOnScroll>
            <div className="max-w-[1100px] mx-auto px-6 w-full py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-lg font-semibold tracking-[2.5px] uppercase text-[#5b50f0] mb-4">Hello, I'm</p>
                        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-[#0f0f18] mb-4">
                            Nhan Nguyen
                        </h1>
                        <p className="text-xl text-[#60607a] font-medium mb-6">
                            Software Engineer · CS @ UC Irvine
                        </p>
                        <p className="text-[#60607a] text-lg leading-relaxed mb-8 max-w-md">
                            CS student specializing in Intelligent Systems, graduating June 2026. I build full-stack applications and AI-powered tools — from scalable backends to polished frontends.
                        </p>
                        <div className="flex gap-3 flex-wrap mb-8">
                            <a href="#projects" className="bg-[#5b50f0] text-white px-6 py-[11px] rounded-lg text-sm font-semibold hover:bg-[#4c42d4] hover:-translate-y-0.5 transition-all shadow-sm">
                                View My Work
                            </a>
                            <a href="#contact" className="border border-[#e4e4ec] bg-white text-[#0f0f18] px-6 py-[11px] rounded-lg text-sm font-semibold hover:border-[#5b50f0] hover:text-[#5b50f0] hover:-translate-y-0.5 transition-all">
                                Get In Touch
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a href="https://github.com/nhanngyn2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                className="w-10 h-10 rounded-lg border border-[#e4e4ec] bg-white flex items-center justify-center text-[#60607a] hover:bg-[#5b50f0] hover:border-[#5b50f0] hover:text-white hover:-translate-y-0.5 transition-all">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                            <a href="https://linkedin.com/in/nhanngyn2004" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className="w-10 h-10 rounded-lg border border-[#e4e4ec] bg-white flex items-center justify-center text-[#60607a] hover:bg-[#5b50f0] hover:border-[#5b50f0] hover:text-white hover:-translate-y-0.5 transition-all">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="mailto:nhanngyn2004@gmail.com" aria-label="Email"
                                className="w-10 h-10 rounded-lg border border-[#e4e4ec] bg-white flex items-center justify-center text-[#60607a] hover:bg-[#5b50f0] hover:border-[#5b50f0] hover:text-white hover:-translate-y-0.5 transition-all">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.9.732-1.636 1.636-1.636h.482L12 10.548l9.882-6.727h.482A1.636 1.636 0 0124 5.457z"/></svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img
                            src={profileImage}
                            alt="Nhan Nguyen"
                            className="w-full max-w-sm h-[420px] md:h-[500px] rounded-2xl object-cover object-top border border-[#e4e4ec] shadow-lg"
                        />
                    </div>
                </div>
            </div>
            </RevealOnScroll>
            </div>
        </section>
    );
};
