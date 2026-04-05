import beaconsLogo from "../../../assets/beacons.png";
import Image from "next/image";

interface beaconIconProps {
    className?: string;
    size?: number;
}

export const BeaconsIcon = ({ className = "", size = 22 }: beaconIconProps) => {
    return (
        <div
            className={`hover-icon-effect ${className}`}
            style={{ width: size, height: size, "--icon-url": `url(${beaconsLogo.src})` } as React.CSSProperties}
        />
    );
};