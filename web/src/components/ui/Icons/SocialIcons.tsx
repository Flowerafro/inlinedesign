import { InstagramIcon } from "./InstagramIcon";
import { BeaconsIcon } from "./BeaconsIcon";
import { EmailIcon } from "./EmailIcon";

interface IconProps {
  className?: string;
  size?: number;
}

export default function SocialIcons({ size = 22 }: IconProps) {
  return (
    <div className="flex gap-4 items-center">
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="vanilla-social-link">
        <InstagramIcon size={size} />
      </a>
      <a href="https://beacons.ai" target="_blank" rel="noreferrer" aria-label="Beacons" className="vanilla-social-link">
        <BeaconsIcon size={size} />
      </a>
      <a href="mailto:hello@inlinedesign.no" aria-label="Email" className="vanilla-social-link">
        <EmailIcon size={size} />
      </a>
    </div>
  )
}
