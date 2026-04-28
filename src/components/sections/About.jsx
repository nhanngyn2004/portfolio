import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    const backendSkills = ["Python", "Java", "C/C++", "PHP/Laravel", "Flask", "SQL"]
    const cloudSkills = ["AWS", "Kubernetes", "Docker", "MySQL", "MongoDB", "OpenAI API"]

    return (
        <section id="about" className="py-24 bg-[#f7f7fa]">
            <RevealOnScroll>
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-14">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-[#5b50f0] mb-3">About Me</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f18]">Who I Am</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <p className="text-[#60607a] text-base leading-relaxed mb-4">
                            I'm a Computer Science student at <strong className="text-[#0f0f18]">UC Irvine</strong> specializing in Intelligent Systems, graduating June 2026. I'm passionate about building AI-powered applications and scalable full-stack systems that solve real problems.
                        </p>
                        <p className="text-[#60607a] text-base leading-relaxed mb-8">
                            In my free time, I enjoy going out with friends, trying out new food, and playing volleyball.    
                        </p>

                        <div className="bg-white border border-[#e4e4ec] rounded-xl p-5 flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-lg bg-[#eeedfd] border border-[#e4e4ec] flex items-center justify-center text-[#5b50f0] flex-shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-sm text-[#0f0f18]">University of California, Irvine</p>
                                <p className="text-sm text-[#60607a] mt-0.5">B.S. Computer Science — Intelligent Systems</p>
                                <p className="text-xs text-[#5b50f0] font-semibold mt-1">Expected June 2026 · Dean's Honor List ×4</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { label: "Frontend", skills: frontendSkills },
                            { label: "Backend", skills: backendSkills },
                            { label: "Cloud & Tools", skills: cloudSkills },
                        ].map(({ label, skills }) => (
                            <div key={label} className="bg-white border border-[#e4e4ec] rounded-xl p-5 hover:border-[#5b50f0] hover:shadow-[0_2px_12px_rgba(91,80,240,0.1)] transition-all">
                                <h3 className="text-sm font-bold text-[#0f0f18] mb-3">{label}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(s => (
                                        <span key={s} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#eeedfd] border border-[#dddafa] text-[#5b50f0]">{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
