import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    return (
        <footer 
            id="contact" 
            className="flex items-center justify-center py-8 min-h-screen"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to bg-purple-600 bg-clip-text text-transparent text-center">
                        Let's Connect
                    </h2>
                    
                    <div className="glass rounded-xl p-12 border border-black hover:-translate-y-1 transition-all text-center mb-8">
                        <div className="mb-12">
                            <p className="text-black text-xl md:text-2xl mb-6">
                                I'm always excited to work on new projects and connect with fellow developers!
                            </p>
                            <p className="text-black text-lg mb-8">
                                Feel free to reach out if you'd like to collaborate or just chat about technology.
                            </p>
                            <p className="text-black text-lg">
                                Here is my{" "}
                                <a 
                                    href="https://docs.google.com/document/d/1vlkZTVDlMFk1o4ms-7wIMCsh67jVbFCzZMUZoZP_pKA/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-300 transition-colors underline font-semibold"
                                >
                                    resume
                                </a>
                                !
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="p-8 rounded-xl border border-black hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_4px_16px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <div className="flex flex-col items-center space-y-4 text-blue-500">
                                    <img 
                                        src="/images/gmail.png" 
                                        alt="Email" 
                                        className="w-12 h-12"
                                    />
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                                        <span className="text-sm md:text-base break-all">nhanngyn2004@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 rounded-xl border border-black hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_4px_16px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <a 
                                    href="https://www.linkedin.com/in/nhanngyn2004/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-4 text-blue-500 hover:text-blue-300 transition-colors"
                                >
                                    <img 
                                        src="/images/linkedin.png" 
                                        alt="LinkedIn" 
                                        className="w-12 h-12"
                                    />
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                                        <span className="text-sm md:text-base break-all">linkedin.com/in/nhanngyn2004/</span>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="p-8 rounded-xl border border-black hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_4px_16px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <a 
                                    href="https://github.com/nhanngyn2004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-4 text-blue-500 hover:text-blue-300 transition-colors"
                                >
                                    <img 
                                        src="/images/github.png" 
                                        alt="GitHub" 
                                        className="w-12 h-12"
                                    />
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                                        <span className="text-sm md:text-base break-all">github.com/nhanngyn2004</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Additional section for more space */}
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-4 text-black text-lg">
                            <div className="w-16 h-px bg-gray-400"></div>
                            <span>Thanks for visiting!</span>
                            <div className="w-16 h-px bg-gray-400"></div>
                        </div>
                        <p className="text-gray-600 mt-4">© 2025 Nhan Nguyen. Built with React & Tailwind CSS.</p>
                    </div>
                </div>
            </RevealOnScroll>
        </footer>
    );
};