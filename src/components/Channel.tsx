import {HoverEffect} from "./ui/CardHoverEffect.tsx";

export const projects = [
    {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    },
    {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    },
    {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    },
    {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    },
    {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    }, {
        title: "کانال هوش مصنوعی",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        link: "text.com",
    },

];
const Channel = () => {
    return (
        <div className="w-full mx-auto px-8">
            <HoverEffect items={projects}/>
        </div>
    )
}
export default Channel
