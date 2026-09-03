export default function NavBar() {
    const Routes: route[] = [
        { routeId: 1, name: "Home", url: "/" },
        { routeId: 2, name: "About", url: "/about" },
        { routeId: 3, name: "Projects", url: "/projects" }
    ];

    return(
        <div className="flex justify-center items-center p-0 m-0">
            {Routes.map((routeProp) => (
                <NavItem key={routeProp.routeId} name={routeProp.name} url={routeProp.url}/>
            ))}
        </div>
    );
}

function NavItem({name, url}: RouteProp) {
    return(
        <a className="ml-3 font-semibold text-xl" href={url}>
            {name}
        </a>
    )
}

interface route {
    routeId: number;
    name: string;
    url: string;
}

interface RouteProp {
    name: string;
    url: string;
}