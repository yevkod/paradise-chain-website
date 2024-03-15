import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useState } from "react";


export const Progress = () => {
    const [progress, setProgress] = useState(80);

    return (
        <ProgressPrimitive.Root
            value={progress}
            className="h-3 flex items-center w-full bg-gray-400 bg-opacity-50 dark:bg-gray-900"
        >
            <ProgressPrimitive.Indicator
                style={{ width: `${progress}%` }}
                className="h-full bg-[#FFD69A] flex items-center duration-300 relative ease-in-out dark:bg-white"
            >
                <div className="flex absolute text-[20px] -right-16 bottom-7 font-bold text-white">
                    $2,521,597.21<br></br>
                    raised
                </div>
                <div className="flex absolute items-center justify-center -right-2 bg-[#FFD69A] w-[24.5px] rounded-full"><span className="text-white">{'>'}</span></div>
            </ProgressPrimitive.Indicator>
        </ProgressPrimitive.Root>
    );
};