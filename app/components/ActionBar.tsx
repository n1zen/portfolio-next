import { Socials } from "../utils/types";
import SocialLinkButton from "./SocialLinkButton";

export default function ActionBar() {
    return(
        <div className="space-x-2 ml-4 hidden lg:flex">
			{Socials.map((social) => (
				<SocialLinkButton key={social.name} name={social.name} link={social.link} />
			))}
        </div>
    );
}
