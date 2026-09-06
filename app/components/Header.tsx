import NavBar from "./NavBar";
import ActionBar from "./ActionBar";

export default function Header() {
    return(
        <header className="border border-slate-400 rounded-lg py-2 px-6 my-2 mx-auto flex justify-between items-center"> 
            {/* Title */}
            <h1 className="font-bold text-xl font-heading">n1zen.dev</h1>
	    {/* Navigation and Other Actions */}
	    <div className="m-0 p-0 flex justify-between">
		<NavBar />
		<ActionBar />
	    </div>
        </header>
    );
}
