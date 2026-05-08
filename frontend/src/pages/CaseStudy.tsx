import { motion } from 'motion/react';
import { NavLink, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

const caseStudies: Record<string, any> = {
    jobglide: {
        name: "JobGlide",
        tagline: "AI-Powered Job Application System",
        challenge: {
            title: "The Challenge",
            description:
                "Traditional job matching systems rely on keyword-based search, resulting in poor candidate-job fit and high application-to-interview ratios. The bottleneck was the inability to process semantic understanding of job requirements and candidate profiles at scale.",
            bottlenecks: [
                "Linear time complexity for candidate matching (O(n))",
                "No semantic understanding of skills and requirements",
                "Manual screening of 1000+ applications per posting",
                "High latency in real-time notifications",
            ],
        },
        logic: {
            title: "The Logic",
            description:
                "Implemented a multi-threaded matching engine using TensorFlow for semantic analysis. The system employs a combination of cosine similarity for skill matching and a custom scoring algorithm based on experience, education, and cultural fit.",
            approach: "ML-Based Semantic Matching + Multi-Threaded Processing",
            algorithms: [
                "Word2Vec embeddings for skill vectorization",
                "Cosine similarity for semantic matching",
                "Weighted scoring algorithm with normalization",
                "Priority queue for real-time job ranking",
            ],
        },
        architecture: {
            title: "System Architecture",
            description:
                "Microservices architecture with event-driven communication. The matching service runs asynchronously, processing jobs in batches while maintaining real-time responsiveness through WebSocket connections.",
            components: [
                { name: "React Frontend", tech: "React + Redux" },
                { name: "API Gateway", tech: "Node.js + Express" },
                { name: "Matching Engine", tech: "Python + TensorFlow" },
                { name: "Database Layer", tech: "PostgreSQL + Redis" },
                { name: "Message Queue", tech: "RabbitMQ" },
                { name: "Notification Service", tech: "WebSocket + FCM" },
            ],
        },
        outcome: {
            title: "The Outcome",
            metrics: [
                { label: "Match Accuracy", value: "87%", change: "+42%" },
                { label: "Processing Time", value: "1.2s", change: "-85%" },
                { label: "Interview Rate", value: "31%", change: "+23%" },
                { label: "User Satisfaction", value: "4.6/5", change: "+1.2" },
            ],
            features: [
                "Real-time job matching with ML-based scoring",
                "Automated resume parsing and skill extraction",
                "Multi-criteria candidate ranking",
                "Push notifications for new matches",
                "Analytics dashboard for recruiters",
            ],
        },
        github: "https://github.com",
        live: "https://example.com",
    },
    "blood-trace": {
        name: "Blood-Trace",
        tagline: "Real-Time Healthcare Logistics Platform",
        challenge: {
            title: "The Challenge",
            description:
                "Blood banks face critical challenges in inventory management and distribution. Inefficient routing leads to expired units and delayed emergency deliveries. The system needed to handle real-time inventory tracking across multiple facilities while optimizing delivery routes.",
            bottlenecks: [
                "No unified view of multi-facility inventory",
                "Manual routing decisions causing delays",
                "Blood unit expiration due to poor allocation",
                "HIPAA compliance requirements for data handling",
            ],
        },
        logic: {
            title: "The Logic",
            description:
                "Implemented a distributed system using Redis for real-time inventory sync and GraphQL for efficient data queries. The routing engine uses Dijkstra's algorithm with dynamic weights based on traffic, distance, and blood type urgency.",
            approach: "Distributed Systems + Graph-Based Routing Optimization",
            algorithms: [
                "Dijkstra's shortest path with priority weights",
                "FIFO queue for blood unit expiration tracking",
                "Pub/Sub pattern for real-time inventory updates",
                "Geohashing for location-based queries",
            ],
        },
        architecture: {
            title: "System Architecture",
            description:
                "Event-driven architecture with WebSocket connections for real-time updates. Each blood bank operates as a node in the distributed system, synchronized through Redis pub/sub messaging.",
            components: [
                { name: "Web Dashboard", tech: "React + Apollo Client" },
                { name: "GraphQL API", tech: "Django + Graphene" },
                { name: "Cache Layer", tech: "Redis Cluster" },
                { name: "Database", tech: "PostgreSQL with PostGIS" },
                { name: "Routing Service", tech: "Python + Google Maps API" },
                { name: "Real-Time Layer", tech: "WebSocket + Redis Pub/Sub" },
            ],
        },
        outcome: {
            title: "The Outcome",
            metrics: [
                { label: "Delivery Time", value: "18m", change: "-62%" },
                { label: "Expiration Rate", value: "3.2%", change: "-71%" },
                { label: "System Uptime", value: "99.7%", change: "+4.2%" },
                { label: "Facilities Connected", value: "45", change: "+45" },
            ],
            features: [
                "Real-time inventory tracking across facilities",
                "Geo-spatial routing optimization",
                "Automated expiration alerts",
                "HIPAA-compliant data architecture",
                "Mobile app for delivery personnel",
            ],
        },
        github: "https://github.com",
        live: "https://example.com",
    },
    hirex: {
        name: "HireX",
        tagline: "Collaborative Recruitment Platform",
        challenge: {
            title: "The Challenge",
            description:
                "Recruitment teams struggle with fragmented workflows across email, spreadsheets, and calendar apps. The lack of a unified system leads to miscommunication, duplicate work, and poor candidate experience. Resume screening consumes significant time that could be spent on strategic activities.",
            bottlenecks: [
                "Manual resume parsing and data entry",
                "No centralized candidate pipeline visibility",
                "Interview scheduling conflicts and delays",
                "Limited collaboration between team members",
            ],
        },
        logic: {
            title: "The Logic",
            description:
                "Built a full-stack platform with NLP-powered resume parsing and collaborative filtering for candidate ranking. The system uses role-based access control to manage permissions across hiring teams, with automated workflows for interview scheduling.",
            approach: "NLP-Based Parsing + RBAC + Automated Workflow Engine",
            algorithms: [
                "Named Entity Recognition for resume parsing",
                "Collaborative filtering for candidate recommendations",
                "Constraint satisfaction for interview scheduling",
                "Role-based access control with permission inheritance",
            ],
        },
        architecture: {
            title: "System Architecture",
            description:
                "MERN stack application with microservices for resume processing and payment integration. The platform uses MongoDB for flexible document storage and Express.js for RESTful API endpoints.",
            components: [
                { name: "Frontend", tech: "React + Context API" },
                { name: "API Server", tech: "Express.js + Node.js" },
                { name: "NLP Service", tech: "Python + spaCy" },
                { name: "Database", tech: "MongoDB Atlas" },
                { name: "Payment Gateway", tech: "Stripe API" },
                { name: "Email Service", tech: "SendGrid + Templates" },
            ],
        },
        outcome: {
            title: "The Outcome",
            metrics: [
                { label: "Parsing Accuracy", value: "94%", change: "+94%" },
                { label: "Time-to-Schedule", value: "2.1d", change: "-58%" },
                { label: "Active Users", value: "320", change: "+320" },
                { label: "Resume Processed", value: "5.2K", change: "+5.2K" },
            ],
            features: [
                "Automated resume parsing with NLP",
                "Collaborative candidate evaluation",
                "Intelligent interview scheduling",
                "Role-based team management",
                "Integrated payment processing",
            ],
        },
        github: "https://github.com",
        live: "https://example.com",
    },
};


function CaseStudy() {
    const { id } = useParams();

    const project = id ? caseStudies[id] : null;

    if (!project) {
        return (
            <>
                <div className='flex flex-col items-center justify-center gap-6'>

                    <div className='text-4xl font-medium'>
                        Project Not Found
                    </div>

                    <NavLink to="/projects" className='flex items-center gap-2 font-medium text-accent hover:underline mb-7'>
                        <Icon icon="lucide:arrow-left"
                            className="h-4 w-4" />
                        <div className=''>Back to Projects</div>
                    </NavLink>

                </div>
            </>
        )
    }

    return (
        <>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

                <NavLink to="/projects" className='flex items-center gap-2 font-medium text-sm text-muted-foreground hover:text-foreground mb-7'>
                    <Icon icon="lucide:arrow-left"
                        className="h-3 w-3" />
                    <div>Back to Projects</div>
                </NavLink>

                <h1 className='text-5xl font-medium mb-4'>
                    {project.name}
                </h1>
                <div className="font-['JetBrains_Mono'] text-lg text-muted-foreground mb-6">
                    {project.tagline}
                </div>

                <div className='flex gap-3 mb-10'>
                    {project.github &&
                        (<a href={project.github}
                            type="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 py-2 px-3 border border-border rounded text-sm hover:border-accent/60 transition-all'>

                            <Icon icon="lucide-github" className='h-4 w-4' />
                            <div>View Source</div>

                        </a>)}

                    {project.live &&
                        (<a href={project.github}
                            type="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 py-2 px-3 border border-border rounded text-sm text-white bg-accent hover:border-accent/60 transition-all'>

                            <Icon icon="lucide:external-link" className='h-4 w-4' />
                            <div>Live Demo</div>

                        </a>)}
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='mb-15'
            >

                <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="lucide:alert-circle" className='h-6 w-6 text-accent' />
                    <h2 className='text-3xl font-medium'>{project.challenge.title}</h2>
                </div>

                <div className='text-muted-foreground mb-5'>
                    {project.challenge.description}
                </div>

                <div className='border-l-2 border-accent pl-6'>
                    <div className='uppercase text-muted-foreground text-sm mb-3'>Technical Bottlenecks</div>

                    <div className='flex flex-col gap-2 text-sm'>
                        {project.challenge.bottlenecks.map((b: string) => {
                            return (
                                <>

                                    <div
                                        key={b}
                                        className='flex items-center gap-2'>
                                        <Icon icon="mingcute:arrow-right-fill"
                                            className='h-4 w-4 text-accent' />
                                        <div className='text-muted-foreground'>{b}</div>
                                    </div>



                                </>
                            )
                        })}
                    </div>
                </div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='mb-15'
            >
                <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="lucide:code-2" className='h-6 w-6 text-accent' />
                    <h2 className='text-3xl font-medium'>{project.logic.title}</h2>
                </div>

                <div className='text-muted-foreground mb-5'>
                    {project.logic.description}
                </div>

                <div className='px-5 py-6 bg-card border border-border rounded flex flex-col gap-2 mb-7'>

                    <div className='text-muted-foreground text-sm'>Approach</div>
                    <div className="font-['JetBrains_Mono'] text-accent text-xl">{project.logic.approach}</div>

                </div>

                <div className='uppercase text-muted-foreground text-sm font-medium mb-4'>Algorithms & Data Structures</div>

                <div className='grid md:grid-cols-2 gap-3'>

                    {project.logic.algorithms.map((alg: string) => {
                        return (
                            <>
                                <div
                                    key={alg}
                                    className="p-3 border border-border rounded-sm bg-card text-foreground font-['JetBrains_Mono'] text-sm">
                                    {alg}
                                </div>
                            </>
                        )
                    })}

                </div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='mb-15'
            >

                <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="lucide:network" className='h-6 w-6 text-accent' />
                    <h2 className='text-3xl font-medium'>{project.architecture.title}</h2>
                </div>

                <div className='text-muted-foreground mb-5'>
                    {project.architecture.description}
                </div>

                <div className='p-7 bg-card border border-border rounded-sm grid md:grid-cols-3 gap-3'>

                    {project.architecture.components.map((c: Record<string, any>, index: number) => {
                        return (
                            <>
                                <div key={crypto.randomUUID()}
                                    className="px-3 py-4 border border-foreground/20 rounded-sm flex flex-col gap-2"
                                >
                                    <div className='text-accent text-xs'>Layer {index + 1}</div>
                                    <div className='text-foreground text-sm '>{c.name}</div>
                                    <div className="text-muted-foreground text-xs font-['JetBrains_Mono']">{c.tech}</div>
                                </div>
                            </>
                        )
                    })}

                </div>


            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='mb-15'
            >

                <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="lucide:trending-up" className='h-6 w-6 text-accent' />
                    <h2 className='text-3xl font-medium'>{project.outcome.title}</h2>
                </div>

                <div className='grid md:grid-cols-4 gap-4 mb-6'>

                    {project.outcome.metrics.map((metric: any) => {
                        return (
                            <>
                                <div
                                    key={crypto.randomUUID()}
                                    className='py-4 border border-border bg-card rounded flex flex-col justify-center items-center gap-2'>

                                    <div className='text-3xl'>{metric.value}</div>
                                    <div className='text-muted-foreground text-xs'>{metric.label}</div>
                                    <div className='text-accent text-xs'>{metric.change}</div>
                                </div>
                            </>
                        )
                    })}

                </div>

                <div>
                    <div className='uppercase text-sm text-muted-foreground mb-4'>Key Features Built</div>

                    <div className='flex flex-col gap-2'>


                        {project.outcome.features.map((feat: any) => {
                            return (
                                <>
                                    <div key={feat}
                                    className="flex items-center gap-2">
                                        <Icon icon="lucide:check" className='h-4 w-4 text-accent'/>
                                        <div className='text-muted-foreground text-sm'>{feat}</div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>


            </motion.div>


        </>
    )
}

export default CaseStudy;