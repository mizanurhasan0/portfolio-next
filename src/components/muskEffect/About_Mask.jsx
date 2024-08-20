"use client";
import LampHeader from "../Lamp Header/Lamp_Header";
import { MaskContainer } from "./SVG_Mask_Effect";

export function AboutMaskEffect() {
    return (
        <div className="relative">

            <div className=" w-full flex items-center justify-center  overflow-hidden">

                <MaskContainer
                    revealText={
                        <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                            The first rule of MRR Club is you do not talk about MRR Club. The
                            second rule of MRR Club is you DO NOT talk about MRR Club.
                        </p>
                    }
                    className="h-[40rem]  rounded-md"
                >
                    <LampHeader />
                    The first rule of <span className="text-red-500">MRR Club</span> is you
                    do not talk about MRR Club. The second rule of MRR Club is you DO NOT
                    talk about <span className="text-red-500">MRR Club</span>.
                </MaskContainer>
            </div>
        </div>
    );
}
