import { RevealOnScroll } from "../RevealOnScroll"

const projects = [
    {
        title: "AWSpeak AI",
        desc: "Full-stack AI-powered interview prep platform that generates tailored questions from job descriptions. Flask backend integrates AWS Bedrock (Claude LLM) with ~3s response time; AWS Polly for voice synthesis and S3 for storage.",
        tech: ["Python", "Flask", "Next.js", "TypeScript", "AWS Bedrock", "AWS Polly"],
        github: "https://github.com/nhanngyn2004/AWSpeak-AI",
        badge: "Hackathon Finalist",
    },
    {
        title: "Fabflix",
        desc: "Full-stack e-commerce movie database with 12,000+ movies, auth, search, and shopping cart. Deployed on Kubernetes with load balancing supporting 300+ concurrent users. Sub-second query times via JDBC pooling and MySQL master-slave replication.",
        tech: ["Java", "JavaScript", "MySQL", "Kubernetes", "AWS", "Tomcat"],
        github: null,
    },
    {
        title: "Minesweeper AI",
        desc: "AI agent that solves N×N Minesweeper grids using constraint satisfaction and queue-based frontier management, achieving 85% mine-prediction accuracy.",
        tech: ["Python"],
        github: "https://github.com/nhanngyn2004/Minesweeper-AI",
    },
    {
        title: "Totoro Travels",
        desc: "Travel recommendation website using the Yelp API to surface real-time restaurant and attraction data based on location, with a Python backend for API routing.",
        tech: ["Python", "JavaScript", "HTML/CSS", "Yelp API"],
        github: null,
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <RevealOnScroll>
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-14">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-[#5b50f0] mb-3">My Work</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f18]">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map(({ title, desc, tech, github, badge }) => (
                        <div key={title} className="bg-white border border-[#e4e4ec] rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:border-[#5b50f0] hover:shadow-[0_4px_20px_rgba(91,80,240,0.1)] transition-all">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <h3 className="text-base font-bold text-[#0f0f18]">{title}</h3>
                                {badge && (
                                    <span className="text-[0.65rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#5b50f0] text-white whitespace-nowrap flex-shrink-0">
                                        {badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-[#60607a] leading-relaxed mb-4 flex-1">{desc}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {tech.map(t => (
                                    <span key={t} className="text-[0.7rem] font-semibold px-2.5 py-1 rounded bg-[#eeedfd] border border-[#dddafa] text-[#5b50f0]">{t}</span>
                                ))}
                            </div>
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm font-medium text-[#5b50f0] hover:text-[#4c42d4] transition-colors w-fit">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
