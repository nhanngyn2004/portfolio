import { RevealOnScroll } from "../RevealOnScroll"



export const About = () => {

    const frontendSkills = ["HTML", "Javascript","React", "Typescript", "TailwindCSS"]
    const backendSkills = ["Python", "C/C++", "Java", "SQL", "AWS"]

    return (
    <section 
        id="about" 
        className="flex items-center justify-center py-8"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto-px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="glass rounded-xl p-8 border-black border hover:-translate-y-1 transition-all">
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-black border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        📚 Education
                    </h3>
                    <ul className="text-black space-y-10">
                        <li>
                            <strong>B.S. in Computer Science, Specialiation in Intelligent Systems</strong> - University of California, Irvine (2022- 2026)
                        </li>
                        <li>
                            <strong>Relevant Coursework:</strong> 
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Software Engineering</li>
                                <li>Python Programming and Libraries</li>
                                <li>Programming in C/C++</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Programming in Java</li>
                                <li>Artificial Intelligence</li>
                                <li>Data Management</li>
                                <li>Information Retrieval</li>
                                <li>Full Stack Project Course</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-black border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        💻 Work Experience
                    </h3>
                    <div className="space-y-4 text-black">
                        <div>
                            <h4 className="font-semibold">
                                Software Engineer Intern at Dua Health AI (June 2025 - Present)
                            </h4>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Developed an AI-powered chatbot for mental health support</li>
                                <li>Integrated OpenAI API for natural language processing</li>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};