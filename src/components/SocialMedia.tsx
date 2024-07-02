import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <>
            <div className="flex">
                <ul className="flex items-center">
                    <li className="group iconFooter hover:bg-[#1877F2] hover:text-white">
                    <span
                        className="tooltipSocial group-hover:bg-[#1877F2] group-hover:text-white before:bg-[#1877F2]">Facebook</span>
                        <span><FaGithub className="text-2xl"/></span>
                    </li>
                    <li className="group iconFooter hover:bg-[#1DA1F2] hover:text-white">
                    <span
                        className="tooltipSocial group-hover:bg-[#1DA1F2] group-hover:text-white before:bg-[#1DA1F2]">Telegram</span>
                        <span><FaTelegram className="text-2xl"/></span>
                    </li>
                    <li className="group iconFooter hover:bg-[#E4405F] hover:text-white">
                    <span
                        className="tooltipSocial group-hover:bg-[#E4405F] group-hover:text-white before:bg-[#E4405F]">Instagram</span>
                        <span><FaInstagram className="text-2xl"/></span>
                    </li>
                    <li className="group iconFooter hover:bg-[#333333] hover:text-white">
                    <span
                        className="tooltipSocial group-hover:bg-[#333333] group-hover:text-white before:bg-[#333333]">Github</span>
                        <span><FaGithub className="text-2xl"/></span>
                    </li>
                    <li className="group iconFooter hover:bg-[#CD201F] hover:text-white">
                    <span
                        className="tooltipSocial group-hover:bg-[#CD201F] group-hover:text-white before:bg-[#CD201F]">Youtube</span>
                        <span><FaGithub className="text-2xl"/></span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SocialMedia
