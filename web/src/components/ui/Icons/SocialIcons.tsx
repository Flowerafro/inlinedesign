import { InstagramIcon } from "./InstagramIcon";
import { BeaconsIcon } from "./BeaconsIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { BehanceIcon } from "./BehanceIcon";
import { GithubIcon } from "./GithubIcon";
import { sanityClient } from "@/lib/sanity";

interface IconProps {
  className?: string;
  size?: number;
}

async function getSocialIcons() {
  return await sanityClient.fetch(`*[_type == "siteSettings"][0]{ instagramUrl, beaconsUrl, linkedinUrl, behanceUrl, githubUrl}`);
}

export default async function SocialIcons({ size = 22 }: IconProps) {
  const data = await getSocialIcons();
  const badgeCls = "group inline-flex items-center justify-center transition-transform hover:scale-110 duration-200 cursor-pointer";
  const svgCls = "text-white transition-colors duration-200 group-hover:text-pink";

  return (
    <div className="flex gap-4 items-center">
      <a href={data?.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={badgeCls}>
        <LinkedInIcon size={size} className={svgCls} />
      </a>
      <a href={data?.githubUrl} target="_blank" rel="noreferrer" aria-label="Github" className={badgeCls}>
        <GithubIcon size={size} className={svgCls} />
      </a>
      <a href={data?.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className={badgeCls}>
        <InstagramIcon size={size} className={svgCls} />
      </a>
      <a href={data?.behanceUrl} target="_blank" rel="noreferrer" aria-label="Behance" className={badgeCls}>
        <BehanceIcon size={size} className={svgCls} />
      </a>
      <a href={data?.beaconsUrl} target="_blank" rel="noreferrer" aria-label="Beacons" className={badgeCls}>
        <BeaconsIcon size={size} />
      </a>
    </div>
  )
}
