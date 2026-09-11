import NavBar from "./NavBar";
import ActionBar from "./ActionBar";
import Card from "./Card";

export default function Header() {
    return(
	<Card className="max-w-6xl w-full py-2 px-6 my-8 mx-auto flex justify-between items-center">
	    {/* Title */ }
	    <div className="p-0 flex">
			<h1 className="font-bold text-xl font-heading">n1zen.dev</h1>
	    </div>
	    {/* Navigation and Other Actions */}
	    <div className="p-0 flex">
			<NavBar />
			<ActionBar />
	    </div>
	</Card>
    );
}
