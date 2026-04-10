
interface LoadMoreBtnProps {
    loadMore: () => void;
    label: string;
}

export default function LoadMoreBtn({ loadMore, label }: LoadMoreBtnProps) {
    return (
        <button
            onClick={loadMore}
            className="flex items-center gap-2 button-padding bg-pink-500 text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:bg-pink-600 hover:-translate-y-0.5"
        >
            {label}
        </button>
    )
}
