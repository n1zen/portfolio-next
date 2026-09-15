"use client";

import { useState } from "react";

import NavBar from "./NavBar";
import ActionBar from "./ActionBar";
import Card from "./Card";
import MobileNavBar from "./MobileNavBar";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
		<>
		<Card className="relative max-w-6xl w-full py-2 px-6 mt-8 mx-auto flex justify-between items-center">
			{/* Title */ }
			<div className="p-0 flex">
				<h1 className="font-bold text-xl font-heading">n1zen.dev</h1>
			</div>
			{/* Navigation and Other Actions */}
			<div className="p-0 flex">
				<NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
				<ActionBar />
			</div>
			{/* Mobile Navigation */}
			<MobileNavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</Card>
		</>
    );
}
