"use client";

import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface HeroProps {
    wordmarkData: any;
}

export default function Hero({ wordmarkData }: HeroProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative w-full h-full flex items-center justify-center bg-black px-6 md:px-12">
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 px-8">
                {wordmarkData && (
                    <div className="relative w-full h-[80vh] opacity-[0.09] grayscale">
                        <Image
                            src={imageUrl(wordmarkData).url()}
                            alt="Background Wordmark"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                )}
            </div>

            <motion.div
                style={{ left: dx, top: dy }}
                className="absolute w-[600px] h-[600px] bg-[#ff4d94]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10"
            />

            <div className="relative z-20 flex flex-col items-center text-center wrapper padding wrapper-margin-top">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.85] text-white uppercase tracking-tighter wrapper-margin-top">
                        Welcome to
                        <span className="text-[#ff4d94]">  Inline Design</span>
                    </h1>
                    <p className="mt-6 text-white/50 text-sm md:text-base max-w-md font-light font-heading leading-relaxed uppercase tracking-widest wrapper-margin-top-50">
                        DESIGNER OF DIGITAL DESIGN AND VISUAL COMMUNICATIONS, WITH BACKGROUND IN PROJECT MANAGEMENT AND PASSION FOR VISUAL ARTS
                    </p>
                </motion.div>
            </div>
        </section>
    );
}