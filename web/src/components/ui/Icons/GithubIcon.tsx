import { FaGithub } from "react-icons/fa6";

interface IconProps {
    className?: string;
    size?: number
}

export const GithubIcon = ({ className, size = 22 }: IconProps) => (
    <FaGithub size={size} className={className} />
);