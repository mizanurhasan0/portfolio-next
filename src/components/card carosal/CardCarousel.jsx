"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./Card_Carousel_Eff";

export function AppleCardsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full pt-32">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-6xl font-bold">
                Know About this Project
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "E Commerce",
        src: "/p-1.png",
        content: <DummyContent />,
    },
    {
        category: "Productivity",
        title: "Dashboard",
        src: "/p-2.jpg",
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Chating",
        src: "/p-3.png",
        content: <DummyContent />,
    },

    {
        category: "Product",
        title: "Project Management",
        src: "/p-4.jpg",
        content: <DummyContent />,
    },
    {
        category: "iOS",
        title: "Point of Sales",
        src: "/p-5.jpg",
        content: <DummyContent />,
    },
    {
        category: "Hiring",
        title: "Portfolio",
        src: "/p-6.jpg",
        content: <DummyContent />,
    },
];
