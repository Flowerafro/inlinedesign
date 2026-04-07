import { sanityClient } from "@/lib/sanity";

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
                        Get in touch
                    </h1>
                    <p className="font-body text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                        E-post: <a href={`mailto:${data.email}`} className="text-pink hover:underline">{data.email}</a>
                    </p>
                </header>
            </div>
        </section>
    );
}