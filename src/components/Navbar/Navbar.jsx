import React from "react"
import { FloatingDock } from "./navbar-menu"
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconInfoCircle,
    IconActivity
} from "@tabler/icons-react"
import Image from "next/image"

export default function Navbar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#profile01"
        },

        {
            title: "About",
            icon: (
                <IconInfoCircle className="h-full w-full text-neutral-500 " />
            ),
            href: "#about01"
        },
        {
            title: "Skills",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#skills01"
        },
        {
            title: "Projects",
            icon: (
                <IconActivity
                    className="h-full w-full text-neutral-500"
                />
            ),
            href: "#projects01"
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/mizanurhasan0"
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/mizanurhasan0"
        }
    ]
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    )
}
