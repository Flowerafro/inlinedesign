"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
            <div className="relative flex flex-col items-center gap-6">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="h-12 w-12 border-2 border-[#ff4d94] rounded-full"
                />

                <span className="font-heading text-xs uppercase tracking-[0.3em] text-white/50 animate-pulse">
                    Fetching Data...
                </span>
            </div>
        </div>
    );
}