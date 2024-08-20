
import InfiniteMoving from '@/components/infinite movement/InfiniteMove'
import React from 'react'

export default function Skills() {
    return (
        <div>
            <div className="text-center py-10">
                <h1 className="text-4xl font-semibold text-black">
                    Get to <br />
                    <span className="text-4xl md:text-[4rem] xl:text-[6rem] font-bold  leading-none">
                        Professional Skills
                    </span>
                </h1>
            </div>
            <InfiniteMoving />
        </div>
    )
}