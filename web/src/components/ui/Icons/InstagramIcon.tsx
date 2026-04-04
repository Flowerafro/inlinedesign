import { FaInstagram } from "react-icons/fa6";

interface IconProps {
    className?: string;
    size?: number;
}

export const InstagramIcon = ({ className, size = 22 }: IconProps) => (
    <FaInstagram size={size} className={className} />
);