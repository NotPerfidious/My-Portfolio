import { Icon } from "@iconify/react";


function Footer() {
    return (
        <div className="flex items-center justify-between p-6 px-4 border-t-[0.1px] border-border">

            <div className="flex items-center text-muted-foreground gap-5">

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/NotPerfidious">
                    <Icon icon="lucide-github" className="h-4 w-4 cursor-pointer hover:text-foreground transition-colors" />
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/m-basim-irfan-5b625b323">
                    <Icon icon="lucide-linkedin" className="h-4 w-4 cursor-pointer hover:text-foreground transition-colors"></Icon>
                </a>
            </div>


            <div className="flex items-center text-muted-foreground font-['JetBrains_Mono'] gap-3 text-xs">
                <Icon icon={"lucide-activity"} className="text-accent h-4 w-4" />
                <div>System Status: Online</div>
            </div>

        </div >
    )
}

export default Footer;