"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./InfiniteMoveEff";

export default function InfiniteMoving() {
    return (
        <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        image: "./html5.svg",
        title: "HTML5",
    },
    {
        image:
            "./tailwindcss.svg",
        title: "Tailwind css",
    },
    {
        image: "./javascript.svg",

        title: "Javascript",
    },
    {
        image: "./reactjs.svg",
        title: "React js",
    },
    {
        image:
            "./nextjs.svg",
        title: "Next Js",
    },
    {
        image:
            "./node-js.svg",
        title: "Node Js",
    },
];
