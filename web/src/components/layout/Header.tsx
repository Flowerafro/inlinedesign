import { sanityClient } from "@/lib/sanity";
import { fileUrl } from "@/lib/imageUrl";
import Logo from "../ui/Logos/Logo";
import Wordmark from "../ui/Logos/Wordmark";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";

async function getCVData() {
  const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]{ "cvRef": cvFile.asset._ref }`);
  return data?.cvRef ? fileUrl(data.cvRef) : "/Resume2026.pdf";
}

export default async function Header() {
  const cvUrl = await getCVData();

  return (
    <header className="w-full flex justify-center">
      <section className="w-full max-w-[1200px] flex mx-auto px-10 h-24 items-center justify-between">
        <div className="wrapper-padding">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
        </div>
        <DesktopNav cvUrl={cvUrl} />

        <MobileMenu />
      </section>
    </header>
  );
}