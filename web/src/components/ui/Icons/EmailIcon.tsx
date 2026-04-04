import { FaEnvelope } from "react-icons/fa6";

interface IconProps {
    className?: string;
    size?: number;
}

export const EmailIcon = ({ className, size = 22 }: IconProps) => (
    <FaEnvelope size={size} className={className} />
);