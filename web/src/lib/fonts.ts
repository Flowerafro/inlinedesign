import { Bebas_Neue, Open_Sans } from "next/font/google";

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
