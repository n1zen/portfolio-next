"use client";

import { Routes, MenuProps } from "../utils/types";
import Card from "./Card"
import NavLink from "./NavLink";

export default function MobileNavBar({isMenuOpen, setIsMenuOpen}: MenuProps) {
    return(
        <>
        <Card className={`absolute right-30 mt-2 flex flex-col justify-center items-center
        transition-all duration-300 origin-top px-4 py-2
        ${isMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}>
            {Routes.map((routeProp) => (
                            <NavLink key={routeProp.routeId} href={routeProp.url}>
                                {routeProp.name}
                            </NavLink>
                        ))}
        </Card>
        </>
    );
}