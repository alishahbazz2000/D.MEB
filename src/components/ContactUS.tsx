import {Container} from "./Container.tsx";
import {useId} from "react";
import {FadeIn} from "./FadeIn.tsx";
import imageContact from "../assets/contactus.png"

interface TextInputProps {
    label: string;
    [key: string]: any; // This allows any other prop to be passed
}

function TextInput ({ label, ...props }: TextInputProps) {
    let id = useId()

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border-2 border-white bg-transparent px-6 pb-4 pt-12 text-white ring-2 ring-transparent transition focus:border-neutral-100 focus:outline-none focus:ring-neutral-100 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute right-6 top-1/2 -mt-3 origin-left text-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-200"
            >
                {label}
            </label>
        </div>
    )
}

function ContactForm() {
    return (
        <FadeIn className="lg:order-last" >
            <h2 className="text-center font-semibold text-slate-400 text-xl mb-10">فرم تماس با ما</h2>
            <form >
                <div className="isolate mt-6 -space-y-px rounded-2xl ">
                    <TextInput label="نام" name="name" autoComplete="name"/>
                    <TextInput
                        label="ایمیل"
                        type="email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextInput
                        label="شرکت"
                        name="company"
                        autoComplete="organization"
                    />
                    <TextInput label="شماره تلفن" type="tel" name="phone" autoComplete="tel" />
                    <TextInput label="پیغام" name="message" />
                </div>

            </form>
        </FadeIn>
    )
}

function ContactDetails() {
    return (
        <FadeIn >
            <img src={imageContact} alt="" className="w-full h-full object-contain"/>
        </FadeIn>
    )
}


export default function Contact() {
    return (
        <div className="my-10">
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 items-center">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </Container>
        </div>
    )
}
