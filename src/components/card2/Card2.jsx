"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardEffect";
import Link from "next/link";

export function ThreeDCard({ item }) {
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card border-black/[0.1]  px-6">

                <CardItem translateZ="100" className="w-full">
                    <Image
                        src={item?.image}
                        height={600}
                        width={600}
                        className="object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="text-6xl shadow-md mt-2 shadow-primary text-center w-full"
                >
                    {item?.title}
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
