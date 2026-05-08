import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import myPic from '../assets/my-pic.png';

const languages = ["C/C++", "Java", "Python", "JavaScript"]

const featuredProjects = [
    {
        id: "jobglide",
        name: "JobGlide",
        summary: "AI-Powered Job Application System",
        description:
            "Multi-threaded job matching engine with ML-based candidate scoring",
        tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
        github: "https://github.com/NotPerfidious/HireX.git",
        // live: "https://example.com",
    },
    {
        id: "blood-trace",
        name: "Blood-Trace",
        summary: "Real-Time Healthcare Logistics Platform",
        description:
            "Distributed system for blood bank inventory with geo-spatial routing",
        tags: ["Django", "Redis", "Maps API"],
        github: "https://github.com/NotPerfidious/Blood-Trace.git",
        // live: "https://example.com",
    },
];

function Home() {




    return (
        <>

            <div className='flex items-center justify-between mb-10'>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}

                        className='mb-10'
                    >

                        <h1 className="text-5xl md:text-7xl font-medium  tracking-tight mb-4">
                            Muhammad Basim Irfan
                        </h1>
                        <div className="flex items-center gap-3 mb-7">
                            <div className="h-px w-12 bg-accent" />
                            <h3 className="text-muted-foreground text-2xl">
                                Software Engineer
                            </h3>
                        </div>

                        <p className="text-muted-foreground text-lg">
                            Developing efficient systems and solving complex problems through code.
                        </p>

                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mb-15'
                    >
                        <p className="text-muted-foreground tracking-wider uppercase text-sm mb-3">Core Competencies</p>

                        <div className=" flex gap-3">



                            {languages.map((lang, index) => {
                                return (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.3 + index * 0.1
                                        }}
                                        className="bg-accent/10 py-2 px-4 font-['JetBrains_Mono'] text-accent text-sm border border-accent/20  rounded-sm"
                                    >
                                        {lang}
                                    </motion.span>
                                )
                            })}

                        </div>

                    </motion.div>

                </div>



                <motion.div
                    initial={{ opacity: 0.1, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='size-70 border-none rounded-full overflow-hidden'>
                    <img src={myPic} alt="" className='w-full h-full object-cover' />
                </motion.div>

            </div>



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >

                <div className='flex justify-between items-center mb-5'>
                    <p className="text-muted-foreground tracking-wider uppercase text-sm mb-5">Featured Engineering Work</p>

                    <NavLink to="/projects" className="text-accent text-sm flex items-center gap-2">
                        <div className='hover:underline'>View all Projects</div>
                        <Icon icon="lucide:arrow-right" className='h-4 w-4' />
                    </NavLink>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    {featuredProjects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + index * 0.1,
                                }}
                                className='p-5 bg-card rounded-sm border border-border'>

                                <div className='flex justify-between items-center mb-5'>
                                    <div className='text-xl font-medium'>{project.name}</div>

                                    <a target="_blank" rel="noopener noreferrer" href={project.github} className='text-muted-foreground'>
                                        <Icon icon="lucide-github" className="h-4 w-4 cursor-pointer hover:text-foreground transition-colors" />
                                    </a>
                                </div>

                                <div className="font-['JetBrains_Mono'] text-muted-foreground text-sm mb-4">{project.summary}</div>

                                <div className="text-muted-foreground text-sm mb-4">{project.description}</div>

                                <div className='flex gap-2 mb-4'>

                                    {project.tags.map((tag, index) => {
                                        return (
                                            <div key={index} className="font-['JetBrains_Mono'] text-xs py-1 px-2 text-muted-foreground bg-muted rounded-xs">
                                                {tag}
                                            </div>
                                        )
                                    })}

                                </div>

                                <div className="flex items-center gap-2 text-accent text-sm">
                                    <NavLink to={`/projects/${project.id}`}>
                                        View Case Study
                                    </NavLink>

                                    <Icon icon="lucide:arrow-right" className='h-4 w-4' />
                                </div>


                            </motion.div>
                        )
                    })}
                </div>

            </motion.div>

        </>

    )
}

export default Home;