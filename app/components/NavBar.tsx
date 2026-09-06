"use client";

import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode; 
} interface route { 
    routeId: number; 
    name: string; 
    url: string; 
} 
function NavLink({href, children}: NavLinkProps) { 
    return( 
	<Link href={href} className="relative text-gray-700 hover:text-black font-subheading group transition-colors duration-200">
            {children}
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-full"/>
        </Link>
    );
}

export default function NavBar() {
    const Routes: route[] = [
        { routeId: 1, name: "Home", url: "/" },
        { routeId: 2, name: "About", url: "/about" },
        { routeId: 3, name: "Projects", url: "/projects" }
    ];

    return(
        <div className="flex justify-center items-center space-x-10 p-0 m-auto">
            {Routes.map((routeProp) => (
                <NavLink key={routeProp.routeId} href={routeProp.url}>
                    {routeProp.name}
                </NavLink>
            ))}
        </div>
    );
}
