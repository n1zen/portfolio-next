import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function ActionBar() {
    return(
        <div className="flex space-x-2 mx-4">
	    <a href="https://github.com/n1zen" className="bg-slate-300 p-1.5 rounded">
		<IoLogoGithub fontSize={"1.25em"}/>
	    </a>
	    <a href="https://www.linkedin.com/in/louie-izen-torres-4557243ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="bg-slate-300 p-1.5 rounded">
		<IoLogoLinkedIn fontSize={"1.25em"}/>
	    </a>
        </div>
    );
}
