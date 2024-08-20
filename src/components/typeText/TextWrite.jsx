"use client"
import Text3D from "../3d_Name/3DText"
import { TypewriterEffectSmooth } from "./TypeWriteEffect"
export default function Typewriter() {
    const words = [
        {
            text: "I"
        },
        {
            text: "am"
        },
        {
            text: "a"
        },
        {
            text: "Passionate"
        },
        {
            text: "Full Stack Developer",
            className: "text-primary "
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className=" ">
                <Text3D />
            </div>
            <TypewriterEffectSmooth words={words} />

        </div>
    )
}
