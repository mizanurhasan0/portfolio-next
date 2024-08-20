"use client";
import React from "react";
import { ContainerScroll } from "./Scroll_Effect";
import Image from "next/image";

export function ScrollAnimation() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Get to <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Know Me
                            </span>
                        </h1>
                    </>
                }
            >

                <Image
                    src={`/1.png`}
                    alt="about photo"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-fill h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
