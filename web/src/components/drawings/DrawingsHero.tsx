import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import type { SanityImage } from "@/lib/queries";

interface DrawingsHeroProps {
    image: SanityImage | undefined;
    title: string;
}

export default function DrawingsHero({ image, title }: DrawingsHeroProps) {
    if (!image) {
        return (
            <div className="w-full h-[40vh] md:h-[50vh] bg-gradient-to-br from-[#22201d] to-black" />
        );
    }

    return (
        <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden">
            <Image
                src={imageUrl(image).width(1600).height(900).fit("crop").url()}
                alt={`Hero image for ${title}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
    );
}
