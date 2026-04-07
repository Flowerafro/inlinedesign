import Hero from "@/components/layout/Hero";
import { sanityClient } from "@/lib/sanity";

async function getSiteSettings() {
  return await sanityClient.fetch(`*[_type == "siteSettings"][0]{wordmark}`);
}

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <main>
      <Hero wordmarkData={settings?.wordmark} />
    </main>
  );
}