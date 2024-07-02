import { useEffect, useState } from "react";

interface ClockState {
    hour: number | string;
    min: number | string;
    sec: number | string;
    handHour: number;
    handMin: number;
    handSec: number;
}

const Clock: React.FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [clock, setClock] = useState<ClockState>({
        hour: 0,
        min: 0,
        sec: 0,
        handHour: 0,
        handMin: 0,
        handSec: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            setClock((prev) => ({
                ...prev,
                hour: hours < 10 ? `0${hours}` : hours,
                min: minutes < 10 ? `0${minutes}` : minutes,
                sec: seconds < 10 ? `0${seconds}` : seconds,
                handHour: hours * 30 + minutes / 2,
                handMin: minutes * 6,
                handSec: seconds * 6,
            }));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <div
                className="h-[350px] w-[350px] rounded-full text-white border-8 border-[#16C5E2] flex items-center justify-center relative">
                <div className="h-5 w-5 rounded-full bg-[#16C5E2] z-[50]"></div>
                <div
                    className="absolute flex items-end justify-center"
                    style={{ transform: `rotate(${clock.handHour}deg)` }}
                >
                    <span className="w-1 h-[90px] bg-[#777] absolute rounded-xl"></span>
                </div>
                <div
                    className="absolute flex items-end justify-center"
                    style={{ transform: `rotate(${clock.handMin}deg)` }}
                >
                    <span className="w-1 h-[100px] bg-[#777] absolute rounded-xl z-10"></span>
                </div>
                <div
                    className="absolute flex items-start justify-center"
                    style={{ transform: `rotate(${clock.handSec}deg)` }}
                >
                    <span className="w-1 h-[120px] bg-[#16C5E2] absolute rounded-xl z-40"></span>
                </div>

                {[...Array(60)].map((_, index) => (
                    <div
                        style={{ transform: `rotate(${6 * index}deg)` }}
                        className="absolute inset-[2px] text-center"
                        key={index}
                    >
                        <span className="inline-block bg-[#333] h-2 w-0.5"></span>
                    </div>
                ))}

                {[...Array(12)].map((_, index) => (
                    <div
                        style={{ transform: `rotate(${30 * index}deg)` }}
                        className="absolute inset-[2px] text-center"
                        key={index}
                    >
                        <span className="inline-block bg-[#16C5E2] h-4 w-1 rounded-full"></span>
                    </div>
                ))}

                {numbers.map((number) => (
                    <div
                        style={{ transform: `rotate(${30 * number}deg)` }}
                        className="absolute text-center inset-[15px]"
                        key={number}
                    >
                          <span style={{ transform: `rotate(${-30 * number}deg)` }} className="block text-xl">
                            {number}
                          </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clock;
