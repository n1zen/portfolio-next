"use client";

import { useState, useRef } from "react";
import Card from "./Card";
import Title from "./Title";
import { ProjectList } from "../utils/data";

const VISIBLE_CARD_COUNT = 3;

const stackStyles: Record<number, string> = {
    0: "translate-y-0 scale-100 z-30",
    1: "translate-y-3 scale-95 z-20, opacity-90",
    2: "translate-y-6 scale-90 z-10, opacity-75",
};

const cardColors: Record<number, string> = {
    0: "bg-gray-950",
    1: "bg-gray-400",
    2: "bg-gray-50",
};

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visible = Array.from({ length: VISIBLE_CARD_COUNT }, (_, offset) => {
	const itemIndex = (currentIndex + offset) % ProjectList.length;
	return { project: ProjectList[itemIndex], stackPosition: offset };
    });

    const handleSwipeUp = () => {
	setCurrentIndex((prev) => (prev + 1) % ProjectList.length);
    };

    return(
	<Card className="w-full flex flex-col p-4">
	    <Title>My Projects</Title>
	    {visible
		.slice()
		.reverse()
		.map(({ project, stackPosition }) => (
		    <ProjectCard
			key={project.id}
			project={project}
			stackPosition={stackPosition}
			onSwipeUp={stackPosition === 0 ? handleSwipeUp : undefined}
		    />
		))}
	</Card>
    );
}

function ProjectCard({
    project,
    stackPosition,
    onSwipeUp,
}: {
    project: (typeof ProjectList)[number];
    stackPosition: number;
    onSwipeUp?: () => void;
}) {

    const touchStartY = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
	touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
	if (touchStartY.current === null || !onSwipeUp) return;
	const deltaY = touchStartY.current - e.changedTouches[0].clientY;
	if (deltaY > 60) onSwipeUp();
	touchStartY.current = null;
    };

    return(
	<div
	    onTouchStart={handleTouchStart}
	    onTouchEnd={handleTouchEnd}
	    className={`rounded-2xl border border-black shadow-md flex items-center justify-center text-xl font-semibold transition-all duration-300 ease-out ${stackStyles[stackPosition]} ${cardColors[stackPosition]}`}
	>
	    {project.title}
	</div>
    );
}
