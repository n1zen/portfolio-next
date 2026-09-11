"use client";

import { Socials, Routes, MenuProps } from "../utils/types";
import Card from "./Card"
import NavLink from "./NavLink";
import SocialLinkButton from "./SocialLinkButton";

export default function MobileNavBar({isMenuOpen, setIsMenuOpen}: MenuProps) {
    return(
        <>
        <Card className={`absolute right-8 mt-2 flex flex-col justify-center items-center
        transition-all duration-300 origin-top px-4 py-2 gap-2.5
        ${isMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}>
            <div className="flex flex-col justify-center items-center gap-1">
                {Routes.map((route) => (
                    <NavLink key={route.routeId} href={route.url}>
                        {route.name}
                    </NavLink>
                ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-1.25">
                {Socials.map((social) => (
                    <SocialLinkButton key={social.name} link={social.link} name={social.name}/>
                ))}
            </div>
        </Card>
        </>
    );
}