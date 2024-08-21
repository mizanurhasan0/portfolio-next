"use client";
import React from "react";
import { WavyBackgroundEff } from "./WavyBackgroundEff";

export default function WavyBackground() {
    return (
        <WavyBackgroundEff className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center pb-10">
                Get in Touch
            </p>
            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white">
                <div>
                    <h1 className="text-3xl xl:text-4xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm md:text-xl text-secondary mt-4">When it comes to expression our emotions, we have two choices: we can talk them out or we can act them out.</p>

                    <div className="mt-12 bg-third/50 p-3 rounded-md shadow-md shadow-primary">
                        <h2 className="text-xl font-bold">Email</h2>
                        <ul className="mt-4 ">
                            <li className="flex items-center">
                                <div className="bg-secondary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className=" text-sm md:text-xl ml-4">
                                    <small className="block">Mail</small>
                                    <div className="font-thin">sajalhasan0@gmail.com</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <form className="ml-auto space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 text-secondary text-sm outline-primary bg-transparent border-secondary border focus:border-primary " />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 outline-primary bg-transparent border-secondary border focus:border-primary " />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 outline-primary bg-transparent border-secondary border focus:border-primary" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 outline-primary bg-transparent border-secondary border focus:border-primary "></textarea>
                    <button type='button'
                        className="text-white bg-primary hover:bg-primary/80 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </WavyBackgroundEff>
    );
}
