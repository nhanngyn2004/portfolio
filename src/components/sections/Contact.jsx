import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    return (
        <footer id="contact" className="py-20 bg-[#f7f7fa] border-t border-[#e4e4ec] scroll-mt-16">
            <RevealOnScroll>
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-14">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-[#5b50f0] mb-3">Get In Touch</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f18] mb-3">Let's Work Together</h2>
                    <p className="text-[#60607a] text-base max-w-md">
                        Open to internships, new grad roles, and interesting projects. My inbox is always open.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <a href="mailto:nhanngyn2004@gmail.com"
                        className="bg-white border border-[#e4e4ec] rounded-xl p-6 flex items-center gap-4 hover:border-[#5b50f0] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(91,80,240,0.1)] transition-all">
                        <div className="w-10 h-10 rounded-lg bg-[#eeedfd] border border-[#dddafa] flex items-center justify-center text-[#5b50f0] flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                        </div>
                        <div>
                            <p className="text-xs text-[#b0b0c8] uppercase tracking-wide font-semibold mb-0.5">Email</p>
                            <p className="text-sm font-medium text-[#0f0f18]">nhanngyn2004@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/nhanngyn2004/" target="_blank" rel="noopener noreferrer"
                        className="bg-white border border-[#e4e4ec] rounded-xl p-6 flex items-center gap-4 hover:border-[#5b50f0] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(91,80,240,0.1)] transition-all">
                        <div className="w-10 h-10 rounded-lg bg-[#eeedfd] border border-[#dddafa] flex items-center justify-center text-[#5b50f0] flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                        <div>
                            <p className="text-xs text-[#b0b0c8] uppercase tracking-wide font-semibold mb-0.5">LinkedIn</p>
                            <p className="text-sm font-medium text-[#0f0f18]">linkedin.com/in/nhanngyn2004</p>
                        </div>
                    </a>

                    <a href="https://github.com/nhanngyn2004" target="_blank" rel="noopener noreferrer"
                        className="bg-white border border-[#e4e4ec] rounded-xl p-6 flex items-center gap-4 hover:border-[#5b50f0] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(91,80,240,0.1)] transition-all">
                        <div className="w-10 h-10 rounded-lg bg-[#eeedfd] border border-[#dddafa] flex items-center justify-center text-[#5b50f0] flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                        <div>
                            <p className="text-xs text-[#b0b0c8] uppercase tracking-wide font-semibold mb-0.5">GitHub</p>
                            <p className="text-sm font-medium text-[#0f0f18]">github.com/nhanngyn2004</p>
                        </div>
                    </a>
                </div>

                <div className="flex items-center justify-between border-t border-[#e4e4ec] pt-8">
                    <p className="text-sm text-[#b0b0c8]">© 2026 Nhan Nguyen. Built with React & Tailwind CSS.</p>
                    <a
                        href="https://drive.google.com/file/d/14pW0ACFUgaReTcaeikHaPixJCXR6_201/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#5b50f0] hover:text-[#4c42d4] transition-colors"
                    >
                        View Resume →
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </footer>
    );
};
