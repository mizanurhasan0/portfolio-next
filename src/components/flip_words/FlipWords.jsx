import React from "react";
import { FlipWordsEffect } from "./FlipWordEffect";

export default function FlipWords() {
    const words = ["Javascript", "React js", "Next js", "Node js", "Tailwind css"];

    return (
        <div className="flex justify-center items-center">
            <div className="text-2xl xl:text-3xl mr-auto font-normal text-secondary">
                I'm skilled in
                <FlipWordsEffect words={words} />
            </div>
        </div>
    );
}
