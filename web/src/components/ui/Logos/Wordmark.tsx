import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { sanityClient } from "@/lib/sanity";

async function getWordmark() {
    return await sanityClient.fetch(`*[_type == "siteSettings"][0].wordmark`);
}

export default async function Wordmark() {
    const wordmarkData = await getWordmark();

    if (!wordmarkData) return null;

    return (
        <div className="relative h-[20px] w-auto">
            <Image
                src={imageUrl(wordmarkData).url()}
                alt="Wordmark"
                fill
                className="object-contain"
            />
        </div>
    );
}