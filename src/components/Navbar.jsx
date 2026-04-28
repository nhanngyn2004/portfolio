import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_#e4e4ec]' : ''}`}>
            <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center">
                <a href="#home" className="font-bold text-[1.1rem] tracking-tight text-[#5b50f0]">NN</a>

                <ul className="hidden md:flex gap-1 list-none ml-auto">
                    {['home', 'about', 'experience', 'projects', 'contact'].map(s => (
                        <li key={s}>
                            <a
                                href={`#${s}`}
                                className="px-[14px] py-[6px] rounded-lg text-sm font-medium text-[#60607a] hover:text-[#0f0f18] hover:bg-[#f0f0f5] transition-all capitalize"
                            >
                                {s}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg ml-auto"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Menu"
                >
                    <span className={`block w-[22px] h-[2px] bg-[#60607a] rounded transition-all duration-200 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                    <span className={`block w-[22px] h-[2px] bg-[#60607a] rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-[22px] h-[2px] bg-[#60607a] rounded transition-all duration-200 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>
            </div>

            <div className={`md:hidden flex-col bg-white border-t border-[#e4e4ec] px-6 pb-5 pt-3 ${menuOpen ? 'flex' : 'hidden'}`}>
                {['home', 'about', 'experience', 'projects', 'contact'].map(s => (
                    <a
                        key={s}
                        href={`#${s}`}
                        onClick={close}
                        className="py-3 font-medium text-[#60607a] border-b border-[#e4e4ec] last:border-b-0 hover:text-[#0f0f18] transition-colors capitalize"
                    >
                        {s}
                    </a>
                ))}
            </div>
        </nav>
    );
};
