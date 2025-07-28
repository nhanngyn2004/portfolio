import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-black">
                    {" "} 
                    nhan<span className="text-blue-500">.nguyen</span> 
                </a>

                {/* Improved hamburger menu button */}
                <button 
                    className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-50 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle Menu"
                >
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 my-1 ${menuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="#home" 
                        className="text-black hover:text-blue-400 transition-colors"                   
                    >
                        {" "}
                        Home{" "}
                    </a>

                    <a 
                        href="#about" 
                        className="text-black hover:text-blue-400 transition-colors"                    
                    >
                        {" "}
                        About{" "}
                    </a>

                    <a 
                        href="#projects" 
                        className="text-black hover:text-blue-400 transition-colors"                    
                    >
                        {" "}
                        Projects{" "}
                    </a>

                    <a 
                        href="#contact" 
                        className="text-black hover:text-blue-400 transition-colors"
                    >
                        {" "}
                        Contact{" "}
                    </a>

                </div>

            </div>
        </div>
    </nav>
    );
};