import { InstagramIcon } from "../Icons/InstagramIcon";
import { BeaconsIcon } from "../Icons/BeaconsIcon";
import { EmailIcon } from "../Icons/EmailIcon";

interface IconProps {
  className?: string;
  size?: number;
}

export default function SocialIcons({ className, size }: IconProps) {
  return (
    <div className="flex gap-3 items-center">
      <InstagramIcon className={className} size={size} />
      <BeaconsIcon className={className} size={size} />
      <EmailIcon className={className} size={size} />
    </div>
  )
}
