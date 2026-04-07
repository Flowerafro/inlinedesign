import SocialIcons from "../ui/Icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full mt-auto h-[50px] wrapper-padding bg-transparent">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col">
          <SocialIcons />
        </div>
        <p className="font-body text-[0.50rem] text-white/60">
          © 2026 inlinedesign.no. All rights reserved.</p>
      </div>
    </footer>
  );
}
