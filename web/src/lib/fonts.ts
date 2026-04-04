import { Bebas_Neue, Open_Sans, Six_Caps } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});