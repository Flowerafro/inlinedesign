import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import type { DesignProduct } from "@/lib/queries";
import { BeaconsIcon } from "../ui/Icons/BeaconsIcon";
import { InstagramIcon } from "../ui/Icons/InstagramIcon";

interface DesignLinksProps {
  design: DesignProduct;
}

export default function DesignLinks({ design }: DesignLinksProps) {
  const { instagramUrl, portfolioUrl } = design;

  if (!instagramUrl && !portfolioUrl) return null;

  return (
    <section aria-label="Design links" className="mt-10 w-full flex flex-col gap-4">
      <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-4">
        Links &amp; Deliverables
      </h2>
      <div className="flex gap-4">
        {portfolioUrl && (
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 button-padding bg-pink-500 text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:bg-pink-600 hover:-translate-y-0.5"
          >
            <BeaconsIcon />
            <span>Shop</span>
          </a>
        )}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 button-padding bg-pink-500 text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:bg-pink-600 hover:-translate-y-0.5"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        )}
      </div>
    </section>
  );
}
