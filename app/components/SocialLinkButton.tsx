import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SocialLinks } from "../utils/types";

export default function SocialLinkButton({name, link}: SocialLinks) {
    return(
        <a href={link} className="bg-slate-300 p-1.5 rounded">
            {name.endsWith("github") ? <IoLogoGithub fontSize={"1.25em"}/> : <IoLogoLinkedin fontSize={"1.25em"} />}
        </a>
    );
}