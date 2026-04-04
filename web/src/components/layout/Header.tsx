import Link from "next/link";
import Logo from "../ui/Logos/Logo";
import Wordmark from "../ui/Logos/Wordmark";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <Wordmark />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="nav-link text-sm uppercase tracking-widest border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 transition-colors">About</Link>
          <Link href="/projects" className="nav-link text-sm uppercase tracking-widest border-b-2 border-pink-500 text-pink-500">Projects</Link>
          <Link href="/designs" className="nav-link text-sm uppercase tracking-widest border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 transition-colors">Designs</Link>
          <Link href="/contact" className="nav-link text-sm uppercase tracking-widest border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 transition-colors">Contact</Link>
          <Link href="/cv.pdf" className="btn-cv text-sm tracking-[0.1em] px-6 py-2 ml-4">CV</Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}