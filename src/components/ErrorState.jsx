export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
      <div className="text-6xl mb-4">😵</div>
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-[var(--text-secondary)] text-sm mb-6 text-center max-w-md">
        {message}
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold
          bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)]
          text-[var(--bg-dark)] shadow-lg shadow-[var(--accent)]/20
          hover:shadow-[var(--accent)]/40 hover:scale-105
          transition-all duration-300 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
        Try Again
      </button>
    </div>
  );
}
