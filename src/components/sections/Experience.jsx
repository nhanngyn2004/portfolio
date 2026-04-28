import { RevealOnScroll } from "../RevealOnScroll"

const experience = [
    {
        role: "Software Engineer Intern",
        company: "Dua Health",
        location: "Austin, TX",
        date: "Jun – Sep 2025",
        bullets: [
            "Developed and maintained an AI-powered conversational platform using PHP (Laravel), JavaScript, and OpenAI GPT models for personalized user guidance and support.",
            "Implemented full-stack features including user authentication, real-time chat capabilities, database design, and secure API integrations handling 100+ requests per day.",
            "Built responsive frontend interfaces with JavaScript and HTML/CSS for seamless user interactions.",
        ],
        tech: ["PHP", "Laravel", "JavaScript", "OpenAI API", "MySQL"],
    },
]


export const Experience = () => {
    return (
        <section id="experience" className="py-12 bg-[#f7f7fa]">
            <div className="w-full">
            <RevealOnScroll>
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-14">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-[#5b50f0] mb-3">Work History</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f18]">Experience</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {experience.map(({ role, company, location, date, bullets, tech }) => (
                        <div key={role} className="bg-white border border-[#e4e4ec] rounded-xl p-6 hover:border-[#5b50f0] hover:shadow-[0_2px_12px_rgba(91,80,240,0.1)] transition-all">
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-base font-bold text-[#0f0f18]">{role}</h3>
                                    <p className="text-sm font-semibold text-[#5b50f0] mt-0.5">{company} · {location}</p>
                                </div>
                                <span className="text-xs text-[#60607a] bg-[#f0f0f5] border border-[#e4e4ec] px-3 py-1 rounded-full whitespace-nowrap">{date}</span>
                            </div>
                            <ul className="flex flex-col gap-2 mb-4">
                                {bullets.map((b, i) => (
                                    <li key={i} className="text-sm text-[#60607a] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#5b50f0]">
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                                {tech.map(t => (
                                    <span key={t} className="text-[0.7rem] font-semibold px-2.5 py-1 rounded bg-[#eeedfd] border border-[#dddafa] text-[#5b50f0]">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            </RevealOnScroll>
            </div>
        </section>
    );
};
