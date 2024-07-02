import SocialMedia from "./SocialMedia.tsx";
import {Button} from "./ui/MovingBorders.tsx";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-16" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading">
                    تایتل فوتر
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center leading-9 text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                </p>
                <Button
                    borderRadius="1.75rem"
                    className="bg-transparent text-white  border-slate-800 py-5 px-12 text-lg"
                >
                    مشاهده برنامه کلاسی
                </Button>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024
                </p>
                <SocialMedia />
            </div>
        </footer>
    );
};

export default Footer;
