import { FaBehance } from "react-icons/fa6";

interface IconProps {
    className?: string;
    size?: number
}

export const BehanceIcon = ({ className, size = 22 }: IconProps) => (
    <FaBehance size={size} className={className} />
);