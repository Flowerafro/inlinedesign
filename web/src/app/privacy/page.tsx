export default function PrivacyPage() {
    return (
        <section className="w-full flex flex-col items-center px-6 md:px-8 py-24 wrapper-margin-top gap-24 md:gap-32 overflow-hidden">
            <header className="flex flex-col items-center text-center gap-12 mb-16">
                <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.85] text-white uppercase tracking-tighter">
                    Privacy <span className="text-[#ff4d94]"> & Cookies</span>
                </h1>
            </header>

            <section className="space-y-6 text-gray-300">
                <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                    This privacy policy applies to <strong>Inlinedesign</strong>.
                    I take your privacy seriously and only collect the information necessary to provide you with a great user experience.
                </p>


                <h2 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full wrapper-margin-top-100">
                    1. Cookies & analytics
                </h2>

                <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                    This website uses cookies to analyze traffic and improve performance.
                    I use <strong>Google Analytics</strong> to understand how visitors interact with the site.
                    This data is collected anonymously.
                </p>

                <h2 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full wrapper-margin-top-100">2. Data handling</h2>
                <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                    The information gathered is anonymized and cannot be used to identify you as an individual.
                    I do not sell, trade, or otherwise transfer your data to outside parties.
                </p>

                <h2 className="wrapper-margin-bottom-50 font-heading text-[1.5rem] tracking-widest uppercase text-white border-b border-white/30 w-full wrapper-margin-top-100">3. Your rights</h2>
                <p className="font-heading text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                    You can choose to disable or delete cookies at any time through your browser settings.
                    By continuing to use this site, you consent to the use of these tools.
                </p>

                <div className="pt-10 border-t border-gray-800">
                    <p className="text-sm italic font-body">Last updated: April 2026</p>
                </div>
            </section>
        </section>
    );
}