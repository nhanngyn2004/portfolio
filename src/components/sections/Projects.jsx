import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = () => {

    return (
        <section 
            id="projects" 
            className="flex items-center justify-center py-8"

        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"
                >
                    Featured Projects
                </h2>
                
                {/* Single grid container for all projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Project 1 */}
                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-3">AWSpeak AI</h3>
                        <p className="text-black mb-4">
                            Developed a full-stack AI-powered interview preparation platform leveraging AWS services that generates customized interview questions based on job title and description.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Flask", "AWS", "TailwindCSS", "Typescript", "React", "Next.js"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/nhanngyn2004/AWSpeak-AI" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-300 transition-colors"
                            >
                                View on Github
                            </a>
                        </div>
                    </div>


                    {/* Project 2 */}
                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-3">Fabflix</h3>
                        <p className="text-black mb-4">
                        Developed a full-stack e-commerce movie database web application with user authentication, search functionality, and shopping cart features. Deployed scalable microservices architecture using Kubernetes with multi-service deployments, load balancing, and session affinity configuration.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "JavaScript", "HTML/CSS", "MySQL", "Kubernetes", "AWS", "Tomcat"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        
                    </div>


                    {/* Project 3 */}
                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-3">Minesweeper AI</h3>
                        <p className="text-black mb-4">
                            Programmed an AI to play minesweeper using probability and algorithms to determine the next best move.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/nhanngyn2004/Minesweeper-AI" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-300 transition-colors"
                            >
                                View on Github
                            </a>
                        </div>
                    </div>
                    
                    {/* Project 4 */}
                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-3">Totoro Travels Website</h3>
                        <p className="text-black mb-4">
                            Created a travel website utilizing the Yelp API to provide the best recommendations based on the location.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "HTML", "CSS", "Javascript"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};