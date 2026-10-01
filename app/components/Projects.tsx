"use client";

import { useState, useRef } from "react";
import Card from "./Card";
import Title from "./Title";
import { ProjectList } from "../utils/data";

const VISIBLE_CARD_COUNT = 3;

const MAX_DRAG = 65;
const SWIPE_THRESHOLD = 60;
const EXIT_DISTANCE = 300;

const stackStyles: Record<number, string> = {
    0: "translate-x-0 translate-y-0 scale-100 z-30",
    1: "translate-x-4 translate-y-3 scale-95 z-20, opacity-90",
    2: "translate-x-8 translate-y-6 scale-90 z-10, opacity-75",
};

const cardColors: Record<number, string> = {
    0: "bg-gray-950",
    1: "bg-gray-400",
    2: "bg-gray-100",
};

const textColors: Record<number, string> = {
	0: "text-white",
	1: "text-gray-950",
	2: "text-gray-950",
}

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
	<Card className="w-full flex flex-col py-4 pl-4 pr-8 gap-3">
		<Title>My Projects</Title>
		<div className="relative w-full h-40 mb-4">
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
		</div>
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

	const [dragY, setDragY] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [isExiting, setIsExiting] = useState(false);

	const startY = useRef<number | null>(null);

	const handlePointerDown = (e: React.PointerEvent) => {
		if (!onSwipeUp) return;
		startY.current = e.clientY;
		setIsDragging(true);
		e.currentTarget.setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e: React.PointerEvent) => {
		if (startY.current === null) return;
		const rawDelta = startY.current - e.clientY;
		const clamped = Math.min(Math.max(rawDelta, 0), MAX_DRAG);
		setDragY(clamped);
	};

	const handlePointerUp = () => {
		setIsDragging(false);
		if (dragY > SWIPE_THRESHOLD) {
			setIsExiting(true)
			setDragY(EXIT_DISTANCE);
			setTimeout(() => {
				onSwipeUp?.();
				setDragY(0);
				setIsExiting(false);
			}, 300);
		} else {
			setDragY(0);
		}
		startY.current = null;	
	};

    return(
	<div
		onPointerDown={handlePointerDown}
		onPointerMove={handlePointerMove}
		onPointerUp={handlePointerUp}
		onPointerCancel={handlePointerUp}
		className={`absolute inset-0 rounded-2xl border border-black shadow-md flex items-center justify-center ${isDragging ? "" : "transition-all duration-300 ease-out"} ${stackStyles[stackPosition]} ${cardColors[stackPosition]}`}
		style={stackPosition === 0 ? { 
			transform: `translateY(-${dragY}px)`,
			opacity: isExiting ? 0 : 1,
		}: undefined}
	>
		<h6 className={`font-subheading font-bold text-xl ${isDragging ? "" : "transition-all duration-300 ease-out"} ${textColors[stackPosition]}`}>{project.title}</h6>
	</div>
    );
}
