import { FaLinkedin } from "react-icons/fa6";

interface IconProps {
    className?: string;
    size?: number
}

export const LinkedInIcon = ({ className, size = 22 }: IconProps) => (
    <FaLinkedin size={size} className={className} />
);