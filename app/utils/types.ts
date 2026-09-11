import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export interface NavLinkProps {
    href: string;
    children: React.ReactNode; 
} 

export interface route { 
    routeId: number; 
    name: string; 
    url: string; 
}

export interface MenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export interface SocialLinks {
    name: string;
    link: string;
}

export const Socials: SocialLinks[] = [
    { name: "github", link: "https://github.com/n1zen" },
    { name: "linkedin", link: "https://www.linkedin.com/in/louie-izen-torres-4557243ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" }
];
export const Routes: route[] = [
        { routeId: 1, name: "Home", url: "/" },
        { routeId: 2, name: "About", url: "/about" },
        { routeId: 3, name: "Projects", url: "/projects" }
    ];