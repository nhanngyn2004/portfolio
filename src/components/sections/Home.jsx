import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <section 
            id="home" 
            className="flex items-center justify-center py-8 pt-32 min-h-screen"
        >
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                {/* Profile Picture */}
                <div className="mb-10 flex justify-center">
                    <img 
                        src="/images/profile.jpg" 
                        alt="Nhan Nguyen" 
                        className="w-50 h-50 md:w-70 md:h-70 rounded-full border-4 border-blue-500 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to bg-purple-600 bg-clip-text text-transparent leading-normal">
                    Hi, I'm Nhan Nguyen
                </h1>

                <p className="text-black text-lg mb-8 max-w-lg mx-auto">
                I am a Computer Science student with a specialization in Intelligent Systems at the University of California, Irvine!
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View projects
                    </a>

                    <a href="#contact" className="bg-blue-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        Contact Me!
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};