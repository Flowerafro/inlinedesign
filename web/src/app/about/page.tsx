import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import { fileUrl } from "@/lib/imageUrl";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About – inline design",
  description: "Learn more about Line Henriksen and the story behind inline design.",
};

async function getAboutPageData() {
  const query = `{
    "about": *[_type == "aboutPage"][0],
    "settings": *[_type == "siteSettings"][0]{ "cvRef": cvFile.asset._ref }
  }`;

  try {
    const data = await sanityClient.fetch(query);
    const cvUrl = data?.settings?.cvRef ? fileUrl(data.settings.cvRef) : "/cv.pdf";
    return { about: data?.about || null, cvUrl };
  } catch (error) {
    console.error("Feil ved henting av About-data:", error);
    return { about: null, cvUrl: "/cv.pdf" };
  }
}

export default async function AboutPage() {
  const { about, cvUrl } = await getAboutPageData();

  if (!about) {
    return <div className="text-white mt-32 text-center">Fant ikke innhold for About-siden i Sanity.</div>;
  }

  return <AboutClient cvUrl={cvUrl} data={about} />;
}