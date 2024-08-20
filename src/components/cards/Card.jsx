import React from "react";
import { Meteors } from "./CardsEffect";

export default function Card({ children }) {
    return (
        <div className="">
            <div className="w-full relative">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">


                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute w-8 h-8 top-0 z-50">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M16.2188 4.83755L19.1835 7.80516C21.1954 9.81905 22.2014 10.826 21.9667 11.9115C21.7319 12.9969 20.4 13.4973 17.7362 14.4981L15.8922 15.191C15.1788 15.459 14.8221 15.593 14.5468 15.8314C14.4262 15.9358 14.3184 16.054 14.2254 16.1835C14.013 16.4795 13.9119 16.8472 13.7095 17.5825C13.2493 19.2551 13.0192 20.0914 12.4713 20.4041C12.2404 20.5358 11.9792 20.6049 11.7134 20.6045C11.0827 20.6036 10.4699 19.9902 9.24441 18.7635L7.77841 17.2961L6.69935 16.2163L5.28476 14.8C4.06698 13.581 3.45809 12.9715 3.45413 12.3446C3.45242 12.0735 3.5228 11.8069 3.65804 11.5721C3.97088 11.0289 4.80107 10.8 6.46145 10.3423C7.19811 10.1392 7.56644 10.0377 7.86251 9.82451C7.99536 9.72887 8.11619 9.61754 8.22239 9.49292C8.45908 9.2152 8.59063 8.85617 8.85373 8.1381L9.5217 6.31506C10.5086 3.62155 11.0021 2.2748 12.0904 2.03468C13.1788 1.79457 14.1921 2.8089 16.2188 4.83755Z" fill="#02451f" /> <path d="M3.30236 21.7764L7.77841 17.2961L6.69935 16.2163L2.22345 20.6965C1.92552 20.9947 1.92552 21.4782 2.22345 21.7764C2.52138 22.0747 3.00443 22.0747 3.30236 21.7764Z" fill="#02451f" /> </g>

                    </svg>
                    {/* </div> */}
                    <div className="pt-4">
                        {children}
                    </div>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
