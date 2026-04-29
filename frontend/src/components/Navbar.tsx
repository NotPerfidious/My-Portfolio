import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import resumePdf from '../assets/M-Basim-Resume.pdf'
import { useEffect, useState } from "react";


function Navbar() {

    const [theme, setTheme] = useState('dark')

    useEffect(()=>{
        if (theme == 'dark')
            document.querySelector('html')?.classList.add('dark')
        else
             document.querySelector('html')?.classList.remove('dark')
    }, [theme])

    const changeTheme = () => {
        if (theme == 'dark')
            setTheme('light')
        else
            setTheme('dark')
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-background px-5 py-3 flex items-center justify-between border-b-[0.1px] border-border">

            <div className="flex items-center gap-5">
                <NavLink to="/" className=" flex items-center gap-1 text-sm cursor-pointer hover:text-accent">
                    <Icon icon="lucide:terminal" className="text-accent h-5 w-5" />

                    <div>{'<dev/>'}</div>
                </NavLink>

                <div className="flex gap-5 text-sm text-muted-foreground">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-foreground' : 'hover:text-foreground'}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-foreground' : 'hover:text-foreground'}>Projects</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-foreground' : 'hover:text-foreground'}>Technical Profile</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-foreground' : 'hover:text-foreground'}>Contact</NavLink>
                </div>
            </div>

            <div className="flex items-center gap-3">

                <div>
                    <Icon onClick={changeTheme} icon={theme == 'dark' ? 'lucide:sun' : 'lucide:moon'} className="text-muted-foreground h-5 w-5" />
                </div>

                <div>

                    <a className="flex items-center  bg-accent p-1 px-3 gap-1 text-white rounded-sm cursor-pointer" href={resumePdf} download={"M-Basim-Resume.pdf"}>
                        <Icon icon="lucide:download" />
                        <div className="text-sm">Resume</div>
                    </a>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;