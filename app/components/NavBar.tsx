"use client";

import { IoMdMenu, IoMdClose } from "react-icons/io";

import NavLink from "./NavLink";
import { MenuProps, Routes } from "../utils/types";

function MenuButton({isMenuOpen, setIsMenuOpen}: MenuProps) {
    return(
        <div className="flex space-x-2 ml-4 lg:hidden">
            <button className="p-1.5"
            onClick={() => {setIsMenuOpen(!isMenuOpen)}}
            >
                {isMenuOpen ? <IoMdClose fontSize={"1.5em"}/> : <IoMdMenu fontSize={"1.25em"}/>}
            </button>
        </div>
    );
}

export default function NavBar({isMenuOpen, setIsMenuOpen}: MenuProps) {
    return(
        <>
        <div className="justify-center items-center space-x-10 px-0 pb-0 pt-1 mx-4 hidden lg:flex">
            {Routes.map((routeProp) => (
                <NavLink key={routeProp.routeId} href={routeProp.url}>
                    {routeProp.name}
                </NavLink>
            ))}
        </div>
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </>
    );
}
