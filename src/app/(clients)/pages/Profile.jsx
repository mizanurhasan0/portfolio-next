"use client";

import Card from "@/components/cards/Card";
import FlipWords from "@/components/flip_words/FlipWords";
import Typewriter from "@/components/typeText/TextWrite";
import Image from "next/image";

export default function Profile() {

    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-8">
            <div className="rounded-full overflow-hidden  border-4 border-opacity-50 border-secondary">
                <Image src="/profile1.jpeg" alt="ptofile photo" height={300} width={300} className="w-60 xl:w-72" />
            </div>
            <Typewriter />
            <div>
                <Card >
                    <div className="flex gap-8 font-thin font-inter">
                        <div className="space-y-3">
                            <h4 className="text-2xl xl:text-3xl border-b border-primary pb-2 font-medium">Personal Details</h4>
                            <div className="text-xl xl:text-2xl space-y-2">
                                <p className="whitespace-nowrap">
                                    <span className="font-medium">Email:</span> <span className="italic text-primary font-medium">eng.mizanur.hasan@gmail.com</span></p>
                                <p><span className="font-medium">Address:</span> <span>Mirpur 60 feet, Dhaka-1216</span></p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <FlipWords />
                            <p className="text-xl xl:text-2xl">I am extremely sincere about my schedule. I have been appreciated many times for my sincere approach to the tasks bestowed upon me. I can be comfortable with new technologies within a very short time.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

