import beaconsLogo from "../../../assets/beacons.png";
import Image from "next/image";

interface beaconIconProps {
    className?: string;
    size?: number;
}

export const BeaconsIcon = ({ className, size = 22 }: beaconIconProps) => {
    return (
        <div
            className={`relative inline-flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <Image
                src={beaconsLogo}
                alt="Beacons.ai"
                fill // Fyller forelderen (div-en over)
                className="object-contain brightness-0 invert" // MAGIC! Gjør en sort PNG helt hvit
                sizes={`${size}px`}
                priority
            />
        </div>
    );
};