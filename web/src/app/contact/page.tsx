import SocialIcons from "@/components/ui/Icons/SocialIcons";
import { sanityClient } from "@/lib/sanity";
import Image from "next/image";

async function getContactData() {
    return await sanityClient.fetch(`*[_type == "siteSettings"][0]{ email, instagramUrl, beaconsUrl }`);
}

export default async function ContactPage() {
    const data = await getContactData();

    return (
        <section className="w-full flex flex-col items-center px-6 md:px-8 py-20 wrapper-margin-top">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
                <header className="mb-24 flex flex-col items-center text-center gap-8 mb-8">
                    <h1 className="font-display text-[clamp(3rem,10vw,6rem)] leading-[0.85] text-white uppercase tracking-tighter mb-8">
                        Get in <span className="text-[#ff4d94]"> touch </span>
                    </h1>
                    <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                        If you want to work with me, send an email to: <a href={`mailto:${data.email}`} className="text-pink hover:underline"><br></br>{data.email}</a>
                    </p>
                    <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                        Or find me on social media:
                    </p>
                    <SocialIcons />
                </header>
            </div>
        </section>
    );
}