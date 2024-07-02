import {motion} from "framer-motion";
import {LampContainer} from "./ui/Lamp.tsx";
import DateTable from "./DateTable.tsx";
import Clock from "./Clock.tsx";

const DateClass = () => {
    return (
        <div className="grid grid-cols-12 p-4 gap-2 h-screen">
            <div className="col-span-4 ">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 30 }}
                        whileInView={{ opacity: 1, y: 100 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col gap-y-10 "
                    >
                        <Clock />
                    </motion.h1>
                </LampContainer>
            </div>
            <div className="col-span-8 h-full">
                <DateTable />
            </div>
        </div>
    )
}
export default DateClass
