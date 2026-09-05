import NavBar from "./NavBar";

export default function Header() {
    return(
        <header className="border border-slate-100 rounded-lg py-2 px-6 my-2 mx-auto flex justify-center items-center"> 
            {/* Title */}
            <div className="p-0 m-0 flex justify-center items-center">
                <h1 className="font-bold text-xl">n1zen.dev</h1>
            </div>
            {/* Navigation */}
            <NavBar/>
            {/* Other Actions */}
            <div className="p-0 m-0 flex justify-center items-center">
                <h1 className="font-bold text-xl">Other Actions</h1>
            </div>
        </header>
    );
}
