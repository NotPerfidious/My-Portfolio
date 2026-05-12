import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';


const directChannels = [
    {
        name: "Email",
        value: "mbasimirfan65@gmail.com",
        href: "mailto:mbasimirfan65@gmail.com",
        icon: "lucide-mail",
    },
    {
        name: "lucide-linkedin",
        value: "linkedin.com/in/m-basim-irfan-5b625b323",
        href: "https://www.linkedin.com/in/m-basim-irfan-5b625b323",
        icon: "lucide-linkedin",
    },
    {
        name: "GitHub",
        value: "github.com/NotPerfidious",
        href: "https://github.com/NotPerfidious",
        icon: "lucide-github",
    },
];

function Contacts() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                className='mb-16'
            >
                <div className='text-5xl md:text-5xl font-medium tracking-tight mb-4'>
                    Get In Touch
                </div>
                <div className='h-1 w-20 bg-accent mb-6' />

                <div className='text-muted-foreground text-lg'>
                    Open to collaboration on technical projects, consulting opportunities, and full-time positions.
                </div>
            </motion.div>



            <div className='grid md:grid-cols-2 gap-12'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}

                >
                    <div className='text-2xl tracking-tight font-medium mb-6'>Direct Channels</div>

                    <div className='flex flex-col gap-4 mb-8'>
                        {directChannels.map((directChannel) => {
                            return (
                                <a
                                    key={crypto.randomUUID()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={directChannel.href}
                                    className='group px-3 py-5 flex items-start gap-2 bg-card border border-border rounded hover:border-accent/50 transition-all'>

                                    <div className='flex items-start'>
                                        <Icon icon={directChannel.icon} className='w-5 h-5 text-accent' />
                                    </div>

                                    <div className='text-sm'>
                                        <div className='text-muted-foreground mb-1'>
                                            {directChannel.name}
                                        </div>

                                        <div className="font-['JetBrains_Mono'] group-hover:text-accent transition-colors">
                                            {directChannel.value}
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>

                    <div className='px-4 py-6 bg-card border border-border rounded'>

                        <div className='text-lg font-medium mb-3'>Response Time</div>

                        <div className='text-muted-foreground'>
                            I typically respond to all inquiries within 24-48 hours. For urgent matters, please reach out via LinkedIn for faster response.
                        </div>

                    </div>


                </motion.div>




                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                >

                    <div className='text-2xl tracking-tight font-medium mb-6'>Send a Message</div>

                    <form onSubmit={handleSubmit}>

                        <div className='flex flex-col mb-6'>
                            <label htmlFor="name" className='mb-2 text-sm font-medium'>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='bg-input-background border border-border text-black px-3 py-4 rounded focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                            />
                        </div>

                        <div className='flex flex-col mb-6'>
                            <label htmlFor="email" className='mb-2 text-sm font-medium'>Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='bg-input-background border border-border text-black px-3 py-4 rounded focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                            />
                        </div>

                        <div className='flex flex-col mb-6'>
                            <label htmlFor="subject" className='mb-2 text-sm font-medium'>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className='bg-input-background border border-border text-black px-3 py-4 rounded focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                            />
                        </div>

                        <div className='flex flex-col mb-6'>
                            <label htmlFor="message" className='mb-2 text-sm font-medium'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className='bg-input-background border border-border text-black px-3 py-4 rounded focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full py-3 rounded flex cursor-pointer items-center justify-center gap-2 text-white bg-accent hover:opacity-80 transition-opacity'>
                            <Icon icon="lucide-send" className='text-white h-4 w-4' />
                            <span>Send Message</span>
                        </button>

                    </form>

                </motion.div>
            </div>
        </>
    )
}

export default Contacts;