"use client";

import { useState } from "react";
import { clsx } from "clsx";

interface DrawingsFilterProps {
    filterKeys: string[];
    activeFilter: string;
    onFilter: (key: string) => void;
}

const LABEL_MAP: Record<string, string> = {
    "illustration": "Illustration",
    "digital-art": "Digital Art",
    "free-hand-drawing": "Free Hand",
    "drawing": "Drawing",
    "other": "Other",
};

function labelFor(key: string): string {
    return LABEL_MAP[key] ?? key.replace(/-/g, " ");
}

export default function DrawingsFilter({ filterKeys, activeFilter, onFilter }: DrawingsFilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const glassBase = "backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]";

    return (
        <div className="flex flex-col items-center py-24 px-4 w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "glass-button transition-all duration-300 hover:-translate-y-0.5",
                    glassBase,
                    isOpen ? "bg-white/15 border-white/30" : "bg-white/5 hover:bg-white/10 border-white/20"
                )}
            >
                FILTER ART {isOpen ? "−" : "+"}
            </button>

            {isOpen && (
                <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[800px] animate-in fade-in slide-in-from-top-4 duration-500">
                    <button
                        className={clsx(
                            "px-5 py-2 rounded-sm font-heading text-sm tracking-widest uppercase transition-all duration-300",
                            glassBase,
                            activeFilter === "all" ? "bg-pink-500/80 border-pink-500 text-white" : "bg-white/5 text-white/80"
                        )}
                        onClick={() => onFilter("all")}
                    >
                        All Works
                    </button>
                    {filterKeys.map((key) => (
                        <button
                            key={key}
                            className={clsx(
                                "px-5 py-2 rounded-sm font-heading text-sm tracking-widest uppercase transition-all duration-300",
                                glassBase,
                                activeFilter === key ? "bg-pink-500/80 border-pink-500 text-white" : "bg-white/5 text-white/80"
                            )}
                            onClick={() => onFilter(key)}
                        >
                            {labelFor(key)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}