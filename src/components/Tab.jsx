"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName
}) => {
    const [active, setActive] = useState(propTabs[0])
    const [tabs, setTabs] = useState(propTabs)

    const moveSelectedTabToTop = idx => {
        const newTabs = [...propTabs]
        const selectedTab = newTabs.splice(idx, 1)
        newTabs.unshift(selectedTab[0])
        setTabs(newTabs)
        setActive(newTabs[0])
    }

    const [hovering, setHovering] = useState(false)

    return (
        <>
            <div
                className={cn(
                    "flex flex-row  items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full py-5 border-b border-secondary shadow-lg shadow-primary rounded-xl",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx)
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn(" relative px-4 py-2 rounded-full text-xl leading-6", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    " absolute inset-0 bg-primary  rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block ">
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-32 bg-red-500", contentClassName)}
            />
        </>
    )
}

export const FadeInDiv = ({ className = "bg-red-500", tabs, hovering }) => {
    const isActive = tab => {
        return tab.value === tabs[0].value
    }
    return (
        <div className="relative w-full h-full bg-blue-500">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}

                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0
                    }}
                    className={cn("w-full h-full absolute top-0 left-0 bg-pink-500", className + "bg-red-500")}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    )
}
