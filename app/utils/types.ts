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

export const Routes: route[] = [
        { routeId: 1, name: "Home", url: "/" },
        { routeId: 2, name: "About", url: "/about" },
        { routeId: 3, name: "Projects", url: "/projects" }
    ];