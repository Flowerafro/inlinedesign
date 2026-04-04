import SocialIcons from "../ui/Icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
        <p className="font-body text-[0.85rem] text-white/60">
          © 2026 inlinedesign.no. All rights reserved.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
