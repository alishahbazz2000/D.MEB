import {Spotlight} from "./ui/Spotlight.tsx";
import avatarImg from "../assets/teacher.png"
import {SparklesPreview} from "./Title.tsx";
import {Vortex} from "./ui/Vortex.tsx";
import {Button} from "./ui/MovingBorders.tsx";
import SocialMedia from "./SocialMedia.tsx";


const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-between">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div className="grid grid-cols-2 items-center justify-center h-full w-full pt-20">
                <div className=" flex justify-center relative my-20 z-10">
                    <div
                        className=" flex flex-col  justify-center gap-y-8">
                        <p className="font-semibold text-sm">سلام به همه من</p>
                        <SparklesPreview />
                        <div className="flex flex-col items-center justify-center gap-y-10">
                            <SocialMedia />
                            <Button
                                borderRadius="1.75rem"
                                className="bg-transparent text-white  border-slate-800 py-5 px-12 text-lg"
                            >
                                مشاهده برنامه کلاسی
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[calc(100%-4rem)] mx-auto overflow-hidden rounded-full">
                        <Vortex
                            backgroundColor="transparent"
                            rangeY={800}
                            particleCount={500}
                            baseHue={120}
                            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                        >
                            <img src={avatarImg} alt="" className="relative w-full h-full object-contain"/>

                        </Vortex>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
