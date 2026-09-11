import Link from "next/link";

import { NavLinkProps } from "../utils/types";

export default function NavLink({href, children}: NavLinkProps) { 
    return( 
        <Link href={href} className="relative text-gray-700 hover:text-black font-subheading group transition-colors duration-200">
            {children}
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-full"/>
        </Link>
    );
}