"use client";

import { useFilter } from "@/hooks/useFilter";
import DrawingCard from "@/components/drawings/DrawingsCard";
import DrawingsFilter from "@/components/drawings/DrawingsFilter";
import type { Drawing } from "@/lib/queries";

interface DrawingsClientProps {
    drawings: Drawing[];
}

export default function DrawingsClient({ drawings }: DrawingsClientProps) {
    const { filterKeys, activeFilter, setFilter, visible, hasMore, loadMore } =
        useFilter(drawings);

    return (
        <>
            <DrawingsFilter
                filterKeys={filterKeys}
                activeFilter={activeFilter}
                onFilter={setFilter}
            />

            {visible.length === 0 ? (
                <p className="font-body text-white/50 text-base py-16 text-center">
                    No drawings found for this filter.
                </p>
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {visible.map((drawing) => (
                        <DrawingCard key={drawing._id} drawing={drawing} />
                    ))}
                </section>
            )}

            {hasMore && (
                <section className="flex justify-center mt-16">
                    <button
                        onClick={loadMore}
                        className="glass-button transition-all duration-300 hover:-translate-y-0.5"
                    >
                        LOAD MORE ARTWORK
                    </button>
                </section>
            )}
        </>
    );
}