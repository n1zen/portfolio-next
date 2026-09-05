import NavBar from "./NavBar";
import ActionBar from "./ActionBar";

export default function Header() {
    return(
        <header className="border border-slate-400 rounded-lg py-2 px-6 my-2 space-x-64 mx-auto flex justify-center items-center"> 
            {/* Title */}
            <h1 className="font-bold text-xl font-heading">n1zen.dev</h1>
            {/* Navigation */}
            <div>
                <NavBar/>
            </div>
            {/* Other Actions */}
            <div>
                <ActionBar />
            </div>
        </header>
    );
}
