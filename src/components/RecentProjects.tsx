import {projects} from "../data/index.ts";
import {PinContainer} from "./ui/Pin.tsx";
import {FaLocationArrow} from "react-icons/fa6";
import bgImage from "../assets/teacher.png"

const RecentProjects = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title="website_test.com"
                            href="website_test.com"
                        >
                            <div
                                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{backgroundColor: "#13162D"}}
                                >
                                    <img src={bgImage} alt="bgimg"/>
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <div className="py-4 flex flex-col gap-y-4">
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>
                                <p
                                    className="lg:text-base lg:font-normal font-light line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex justify-center items-center">
                                        <FaLocationArrow className="me-3" color="#CBACF9"/>
                                        <p className="flex lg:text-lg md:text-xs  text-purple">
                                            دیدن پروژه
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
