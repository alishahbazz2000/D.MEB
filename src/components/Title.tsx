import {SparklesCore} from "./ui/Sparkles.tsx";

export function SparklesPreview() {
    return (
        <div
            className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
            <h1 className="md:text-2xl  lg:text-4xl font-bold text-center text-white relative z-20">
                دکتر محمد احسان بصیری
            </h1>
            <div className="w-[35rem] h-10 relative">
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={.1}
                    maxSize={.1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="transparent"
                />
            </div>
        </div>
    );
}
