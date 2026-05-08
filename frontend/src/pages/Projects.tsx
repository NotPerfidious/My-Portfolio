import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';


const projects = [
    {
        id: "jobglide",
        name: "JobGlide",
        date: "2026-03-15",
        summary: "AI-Powered Job Application System",
        challenges: [
            "Multi-threaded job matching engine",
            "ML-based candidate scoring algorithm",
            "Real-time notification system",
            "Scalable microservices architecture",
        ],
        tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        id: "blood-trace",
        name: "Blood-Trace",
        date: "2026-02-20",
        summary: "Real-Time Healthcare Logistics Platform",
        challenges: [
            "Distributed blood bank inventory system",
            "Geo-spatial routing optimization",
            "Real-time WebSocket connections",
            "HIPAA-compliant data architecture",
        ],
        tags: ["Django", "Redis", "GraphQL", "Maps API"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        id: "hirex",
        name: "HireX",
        date: "2026-01-10",
        summary: "Collaborative Recruitment Platform",
        challenges: [
            "Role-based access control system",
            "Resume parsing with NLP",
            "Collaborative filtering for candidate ranking",
            "Automated interview scheduling",
        ],
        tags: ["React", "Express", "MongoDB", "Stripe"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        id: "codestream",
        name: "CodeStream",
        date: "2025-11-05",
        summary: "Live Code Collaboration Tool",
        challenges: [
            "Operational transformation for real-time editing",
            "WebRTC-based video conferencing",
            "Syntax highlighting engine",
            "Conflict-free replicated data types",
        ],
        tags: ["TypeScript", "WebSocket", "WebRTC", "Monaco Editor"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        id: "dataflow",
        name: "DataFlow",
        date: "2025-09-18",
        summary: "ETL Pipeline Orchestration System",
        challenges: [
            "Directed acyclic graph execution engine",
            "Fault-tolerant task scheduling",
            "Dynamic resource allocation",
            "Stream processing with Apache Kafka",
        ],
        tags: ["Python", "Airflow", "Kafka", "Docker"],
        github: "https://github.com",
    },
    {
        id: "neural-art",
        name: "NeuralArt",
        date: "2025-07-22",
        summary: "Style Transfer Web Application",
        challenges: [
            "Convolutional neural network optimization",
            "GPU acceleration with CUDA",
            "Image preprocessing pipeline",
            "Efficient model serving",
        ],
        tags: ["PyTorch", "Flask", "CUDA", "S3"],
        github: "https://github.com",
        live: "https://example.com",
    },
];


function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mb-8'
            >
                <div className='text-5xl md:text-5xl font-medium tracking-tight mb-4'>
                    Project Archive
                </div>

                <div className='h-1 w-20 bg-accent mb-6' />

                <div className='text-muted-foreground text-lg'>
                    A comprehensive repository of engineering solutions and technical implementations.
                </div>

            </motion.div>

            <div className='grid md:grid-cols-1 gap-3'>

                {projects.map((p, index) => {
                    return (
                        <motion.div
                            key={p.id}

                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + 0.1 * index
                            }}

                            className='p-5 bg-card rounded-lg border border-border  hover:border-accent/50 transition-all'
                        >

                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex gap-5'>

                                    <div className='text-xl font-medium'>
                                        {p.name}
                                    </div>

                                    <div className='flex items-center gap-2 text-muted-foreground'>

                                        <a target='_blank' rel="noopener noreferrer" href={p.github}>
                                            <Icon icon="lucide-github" className='h-4 w-4 cursor-pointer hover:text-foreground transition-colors' />
                                        </a>

                                        <a target='_blank' rel="noopener noreferrer" href={p.live}>
                                            <Icon icon="lucide:external-link" className='h-4 w-4 cursor-pointer hover:text-foreground transition-colors' />
                                        </a>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] text-muted-foreground">
                                    <Icon icon="lucide:calendar" className='h-3.5 w-3.5 text-accent' />
                                    <div>
                                        {p.date}
                                    </div>
                                </div>
                            </div>

                            <div className="font-['JetBrains_Mono'] text-xs  mb-6 text-muted-foreground">
                                {p.summary}
                            </div>

                            <div className='mb-4'>
                                <div className='uppercase text-sm font-medium text-muted-foreground mb-2'>Technical Challenges Solved</div>

                                <div className='grid md:grid-cols-2 gap-2'>

                                    {
                                        p.challenges.map((ch) => {
                                            return (
                                                <div key={ch}
                                                    className='flex items-center gap-2 text-muted-foreground text-xs'>
                                                    <Icon icon="mingcute:arrow-right-fill"
                                                        className='h-3 w-3 text-accent' />

                                                    <div>{ch}</div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div className='flex gap-2 mb-8'>

                                {p.tags.map((t, index) => {
                                    return (
                                        <motion.div
                                            key={t}

                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.7 + 0.1 * index
                                            }}


                                            className="p-0.5 px-1 bg-accent/10 border border-accent/20 rounded-sm text-accent font-['JetBrains_Mono'] text-[0.7rem]">
                                            {t}
                                        </motion.div>
                                    )
                                })}

                            </div>

                            <NavLink to={`/projects/${p.id}`}
                                className="text-accent text-sm hover:underline">

                                <div className=' flex items-center gap-2'>
                                    <div>View Systems Breakdown</div>
                                    <Icon icon="lucide:arrow-right"
                                        className='h-4 w-4' />
                                </div>

                            </NavLink>

                        </motion.div>
                    )
                })}

            </div >

        </>
    )
}

export default Projects;