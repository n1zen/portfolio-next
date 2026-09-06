import NavBar from "./NavBar";
import ActionBar from "./ActionBar";

export default function Header() {
    return(
        <header className="border border-slate-400 rounded-lg py-2 px-6 my-2 mx-auto flex justify-between items-center"> 
            {/* Title */}
	    <div className="m-auto p-0 flex">
		<h1 className="font-bold text-xl font-heading">n1zen.dev</h1>
	    </div>
	    {/* Navigation and Other Actions */}
	    <div className="m-auto p-0 flex">
		<NavBar />
		<ActionBar />
	    </div>
        </header>
    );
}
