export const About = () => {
    const frontendSkills = ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    const backendSkills = ["Python", "Java", "C/C++", "PHP/Laravel", "Flask", "SQL"]
    const cloudSkills = ["AWS", "Kubernetes", "Docker", "MySQL", "MongoDB", "OpenAI API"]

    const education = [
        { school: "California State Polytechnic University, Pomona", degree: "M.S. Computer Science", detail: "Starting Spring 2027 · Expected Dec 2028" },
        { school: "University of California, Irvine", degree: "B.S. Computer Science — Intelligent Systems", detail: "Graduated June 2026 · Dean's Honor List ×5" },
    ]

    return (
        <section id="about" className="py-14 bg-page scroll-mt-16">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-8">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-accent mb-3">About Me</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f18]">Who I Am</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <p className="text-[#60607a] text-base leading-relaxed mb-4">
                            I graduated from <strong className="text-[#0f0f18]">UC Irvine</strong> in June 2026 with a B.S. in Computer Science, specializing in Intelligent Systems. In Spring 2027 I'm starting my M.S. in Computer Science at <strong className="text-[#0f0f18]">Cal Poly Pomona</strong>. I'm passionate about building AI-powered applications and scalable full-stack systems that solve real problems.
                        </p>
                        <p className="text-[#60607a] text-base leading-relaxed mb-8">
                            In my free time, I enjoy going out with friends, trying out new food, and playing volleyball.    
                        </p>

                        <div className="flex flex-col gap-4">
                            {education.map(({ school, degree, detail }) => (
                                <div key={school} className="bg-white border border-[#e4e4ec] rounded-xl p-5 flex gap-4 items-start hover:border-accent hover:shadow-[0_2px_12px_var(--color-accent-glow)] transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-accent-tint border border-[#e4e4ec] flex items-center justify-center text-accent flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#0f0f18]">{school}</p>
                                        <p className="text-sm text-[#60607a] mt-0.5">{degree}</p>
                                        <p className="text-xs text-accent font-semibold mt-1">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { label: "Frontend", skills: frontendSkills },
                            { label: "Backend", skills: backendSkills },
                            { label: "Cloud & Tools", skills: cloudSkills },
                        ].map(({ label, skills }) => (
                            <div key={label} className="bg-white border border-[#e4e4ec] rounded-xl p-5 hover:border-accent hover:shadow-[0_2px_12px_var(--color-accent-glow)] transition-all">
                                <h3 className="text-sm font-bold text-[#0f0f18] mb-3">{label}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(s => (
                                        <span key={s} className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-tint border border-accent-border text-accent">{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
