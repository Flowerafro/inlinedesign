import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/imageUrl";
import { sanityClient } from "@/lib/sanity";

async function getLogo() {
    return await sanityClient.fetch(`*[_type == "siteSettings"][0].logo`);
}

export default async function Logo() {
    const logoData = await getLogo();
    const logoSrc = logoData ? imageUrl(logoData).url() : "/id-logo.svg";

    return (
        <Link
            href="/"
            aria-label="inline design — home"
            className="shrink-0 flex flex-col gap-[6px] group"
        >
            <div className="relative w-[52px] h-[52px]">
                <Image
                    src={logoSrc}
                    alt="inline design logo"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 cursor-pointer"
                    priority
                />
            </div>
        </Link>
    );
}