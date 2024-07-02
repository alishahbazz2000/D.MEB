import avatarImage from "../assets/teacher.png";
import { RiInstagramLine, RiTelegramLine, RiLinkedinBoxFill, RiFacebookCircleLine } from "react-icons/ri";
import clsx from "clsx";
import { Link } from "react-router-dom";
import React from 'react';

interface SocialLinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
    icon: React.ComponentType<{ className?: string }>;
}

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                to={href}
                className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    );
}

const About: React.FC = () => {
    return (
        <div className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 place-items-center gap-20">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <img
                            src={avatarImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800 min-w-[32rem] w-[20rem]"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 flex flex-col gap-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        من هستم.
                    </h1>
                    <div className="mt-6 space-y-7 text-zinc-400 text-sm leading-8">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                            می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
                            متخصصان را می طلبد
                        </p>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                            می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
                            متخصصان را می طلبد
                        </p>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                            می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
                            متخصصان را می طلبد
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20 w-full" style={{ direction: "ltr" }}>
                    <div>
                        <SocialLink href="#" icon={RiInstagramLine} className="">
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink href="#" icon={RiTelegramLine} className="mt-4">
                            Follow on Telegram
                        </SocialLink>
                        <SocialLink href="#" icon={RiLinkedinBoxFill} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="#" icon={RiFacebookCircleLine} className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:test@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            test@gmail.com
                        </SocialLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
