import beaconsLogo from "../../../assets/beacons.png";
import Image from "next/image";

interface beaconIconProps {
    className?: string;
    size?: number;
}

export const BeaconsIcon = ({ className = "", size = 22 }: beaconIconProps) => {
    return (
        <div
            className={`relative inline-flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <Image
                src={beaconsLogo}
                alt="Beacons.ai"
                fill
                className="object-contain brightness-0 invert vanilla-png-icon"
                sizes={`${size}px`}
                priority
            />
        </div>
    );
};