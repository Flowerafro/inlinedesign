"use client";

import { useFilter } from "@/hooks/useFilter";
import DesignCard from "@/components/designs/DesignCard";
import DesignsFilter from "@/components/designs/DesignsFilter";
import type { DesignProduct } from "@/lib/queries";

interface DesignsClientProps {
  designs: DesignProduct[];
}

export default function DesignsClient({ designs }: DesignsClientProps) {
  const { filterKeys, activeFilter, setFilter, visible, hasMore, loadMore } =
    useFilter(designs);

  return (
    <>
      <DesignsFilter
        filterKeys={filterKeys}
        activeFilter={activeFilter}
        onFilter={setFilter}
      />

      {visible.length === 0 ? (
        <p className="font-body text-white/50 text-base py-16 text-center">
          No designs found for this filter.
        </p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {visible.map((design) => (
            <DesignCard key={design._id} design={design} />
          ))}
        </section>
      )}

      {hasMore && (
        <section className="flex justify-center mt-16 gap-8 md:gap-10">
          <button
            onClick={loadMore}
            className="glass-button transition-all duration-300 hover:-translate-y-0.5"
          >
            LOAD MORE DESIGNS
          </button>
        </section>
      )}
    </>
  );
}