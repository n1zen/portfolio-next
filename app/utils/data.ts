export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export const ProjectList: Project[] = [
    { id: 1, title: "CloudTree", description: "An android app for MCU-Based Soil Scanner with Machine Learning Application for Finding Suitable Location for Planting Narra Trees", link: "https://www.github.com/n1zen/CloudTree" },
    { id: 2, title: "Church Attendance App", description: "A web application for tracking member and visitor attendance in churches.", link: "https://www.github.com/n1zen/ChurchAttendance" },
];
