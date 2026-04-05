import { InstagramIcon } from "./InstagramIcon";
import { BeaconsIcon } from "./BeaconsIcon";
import { EmailIcon } from "./EmailIcon";

interface IconProps {
  className?: string;
  size?: number;
}

export default function SocialIcons({ size = 22 }: IconProps) {
  const badgeCls = "group inline-flex items-center justify-center transition-transform hover:scale-110 duration-200";
  const svgCls = "text-white transition-colors duration-200 group-hover:text-pink";

  return (
    <div className="flex gap-4 items-center">
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={badgeCls}>
        <InstagramIcon size={size} className={svgCls} />
      </a>
      <a href="https://beacons.ai" target="_blank" rel="noreferrer" aria-label="Beacons" className={badgeCls}>
        <BeaconsIcon size={size} />
      </a>
      <a href="mailto:hello@inlinedesign.no" aria-label="Email" className={badgeCls}>
        <EmailIcon size={size} className={svgCls} />
      </a>
    </div>
  )
}
