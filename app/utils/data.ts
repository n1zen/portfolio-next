export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    link: string;
}

export const ProjectList: ProjectProps[] = [
    { id: 0, title: "CloudTree", description: "An android app for MCU-Based Soil Scanner with Machine Learning Application for Finding Suitable Location for Planting Narra Trees", link: "https://www.github.com/n1zen/CloudTree" },
    { id: 1, title: "Church Attendance App", description: "A web application for tracking member and visitor attendance in churches.", link: "https://www.github.com/n1zen/ChurchAttendance" },
    { id: 2, title: "Web Barcode Generator", description: "A web based barcode generator", link: "https://www.github.com/n1zen/webGenerator" },
    { id: 3, title: "Eternia Mod", description: "A minecraft fabric mod", link: "https://www.github.com/n1zen/eterniamod" },
];
