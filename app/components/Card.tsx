import { CardProps } from "../utils/types";

export default function Card({children, className}: CardProps) {
    return(
	<div className={`border border-slate-400 rounded-lg shadow-sm ${className ?? ""}`}>
	    {children}
	</div>
    );
}
