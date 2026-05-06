export default function Pagination({ page, totalPages, onPrev, onNext, onGoTo }) {
  // Generate smart page numbers (show first, last, and neighbors)
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - delta && i <= page + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-12 animate-fade-in-up">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
          border border-[var(--border-subtle)] bg-[var(--bg-card)]
          text-[var(--text-secondary)]
          hover:border-[var(--accent)]/30 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--border-subtle)] disabled:hover:text-[var(--text-secondary)] disabled:hover:bg-[var(--bg-card)]
          transition-all duration-300 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((pageNum, idx) =>
          pageNum === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 text-[var(--text-secondary)] text-sm select-none"
            >
              ⋯
            </span>
          ) : (
            <button
              key={pageNum}
              onClick={() => onGoTo(pageNum)}
              className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                pageNum === page
                  ? "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] text-[var(--bg-dark)] shadow-lg shadow-[var(--accent)]/20"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
              }`}
            >
              {pageNum}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
          border border-[var(--border-subtle)] bg-[var(--bg-card)]
          text-[var(--text-secondary)]
          hover:border-[var(--accent)]/30 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--border-subtle)] disabled:hover:text-[var(--text-secondary)] disabled:hover:bg-[var(--bg-card)]
          transition-all duration-300 cursor-pointer"
      >
        Next
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    </div>
  );
}
