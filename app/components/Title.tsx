import { TitleProps } from "../utils/types";

export default function Title({ children, className }: TitleProps) {
    return(
	<h5 className={`font-bold text-xl font-heading ${className ?? ""}`}>{children}</h5>
    );
}
