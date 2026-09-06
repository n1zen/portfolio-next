import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function ActionBar() {
    return(
        <div className="flex space-x-2 mx-4">
            <div className="bg-slate-300 p-1.5 rounded">
                <IoLogoGithub fontSize={"1.25em"}/>
            </div>
            <div className="bg-slate-300 p-1.5 rounded">
                <IoLogoLinkedin fontSize={"1.25em"}/>
            </div>
        </div>
    );
}
