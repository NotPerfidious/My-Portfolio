import { motion } from 'motion/react';
import { Icon } from '@iconify/react';


const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "FAST-NUCES Lahore",
    period: "2023 - 2027",
    gpa: "3.85/4.0",
};

const coursework = [
    "Theory of Automata",
    "Computer Networks",
    "Natural Language Processing",
    "Database Systems",
    "Operating Systems",
    "Algorithms & Data Structures",
];

const skillCategories = [
    {
        title: "Core",
        icon: "lucide:code-2",
        skills: ["Data Structures", "Algorithms", "System Design", "Object-Oriented Programming"],
    },
    {
        title: "Languages",
        icon: "lucide:layers",
        skills: ["Python", "C++", "Java", "JavaScript", "SQL", "TypeScript"],
    },
    {
        title: "Technologies",
        icon: "lucide:book-open",
        skills: ["React", "Node.js", "Django", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS"],
    },
];

function Profile() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                className='mb-8'
            >
                <h1 className="text-5xl font-medium mb-4 tracking-tight">Technical Profile</h1>
                <div className='w-20 h-1 mb-6 bg-accent' />

                <div className='text-muted-foreground text-lg'>
                    A systematic approach to building scalable, maintainable software through rigorous engineering principles.
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}

                className='mb-16'
            >
                <div className='flex gap-3 items-center mb-6'>
                    <Icon icon="lucide:graduation-cap" className="w-6 h-6 text-accent" />
                    <div className='text-2xl tracking-tight font-medium'>Academic Foundation</div>
                </div>

                <div className='px-7 py-9 rounded bg-card border border-border grid md:grid-cols-2 gap-8'>
                    <div>
                        <div className='text-xl font-medium mb-2'>{education.degree}</div>

                        <div className='text-muted-foreground mb-1'>{education.institution}</div>
                        <div className="text-sm font-['JetBrains_Mono'] text-muted-foreground mb-2">{education.period}</div>

                        <div className="text-sm font-['JetBrains_Mono'] text-accent">GPA: {education.gpa}</div>
                    </div>

                    <div className='text-muted-foreground '>
                        <div className='uppercase mb-4 text-sm'>Key Coursework</div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            {coursework.map((c) => {
                                return (
                                    <div key={c}
                                        className='flex items-center gap-2'>

                                        <Icon icon="mingcute:arrow-right-fill"
                                            className='h-3 w-3 text-accent' />
                                        <div className='text-sm'>{c}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </motion.div>



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}

                className='mb-16'
            >

                <div className='text-2xl tracking-tight font-medium mb-6'>Engineering Stack</div>

                <div className='grid md:grid-cols-3 gap-3'>
                    {skillCategories.map((skillCategory, index) => {
                        return (
                            <motion.div key={crypto.randomUUID()}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}

                                className='px-5 py-7 bg-card border border-border rounded'>

                                <div className='flex items-center gap-3 mb-4'>
                                    <Icon icon={skillCategory.icon}
                                        className='w-5 h-5 text-accent' />
                                    <div className="text-lg font-medium">
                                        {skillCategory.title}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 text-sm font-['JetBrains_Mono'] text-muted-foreground">
                                    {skillCategory.skills.map(skill => <span>{skill}</span>)}
                                </div>

                            </motion.div>
                        )
                    })}
                </div>


            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}

                className='border-l-3 border-accent pl-5'
            >
                <div className='text-2xl tracking-tight font-medium mb-6'>Engineering Philosophy</div>

                <div className='text-muted-foreground leading-relaxed max-w-3xl'>
                    I approach software development with a focus on writing clean, maintainable, and scalable code. Every system should be built with clarity of purpose, optimal performance, and long-term sustainability in mind. I believe in rigorous testing, comprehensive documentation, and continuous iteration to deliver solutions that not only solve immediate problems but also adapt to future requirements.
                </div>

            </motion.div>
        </>
    )
}

export default Profile;