interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({children, className}: CardProps) {
    return(
	<div className={`border border-slate-400 rounded-lg shadow-sm ${className ?? ""}`}>
	    {children}
	</div>
    );
}
