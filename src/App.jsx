import JokeCard from "./components/JokeCard";
import SkeletonCard from "./components/SkeletonCard";
import Pagination from "./components/Pagination";
import ErrorState from "./components/ErrorState";
import { useJokes } from "./hooks/useJokes";

export default function App() {
  const { jokes, loading, error, page, totalPages, setPage, nextPage, prevPage, retry } =
    useJokes();

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">

        {/* ===== Hero Header ===== */}
        <header className="text-center mb-14 animate-fade-in-up">
          {/* Logo icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] mb-6 shadow-lg shadow-[var(--accent)]/20 animate-float">
            <span className="text-4xl leading-none">😂</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-warm)] to-[var(--accent)] bg-clip-text text-transparent">
              JokeDeck
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] mt-3 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            A daily dose of laughter — curated random jokes,{" "}
            <span className="text-[var(--accent)] font-medium">one punchline at a time</span>
          </p>

          {/* Decorative divider */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>
        </header>

        {/* ===== Error State ===== */}
        {error && <ErrorState message={error} onRetry={retry} />}

        {/* ===== Loading Skeleton ===== */}
        {loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </div>
        )}

        {/* ===== Jokes Grid ===== */}
        {!loading && !error && jokes.length > 0 && (
          <>
            {/* Results info */}
            <div className="flex items-center justify-between mb-6 animate-fade-in-up">
              <p className="text-[var(--text-secondary)] text-xs font-medium uppercase tracking-widest">
                Showing {jokes.length} jokes
              </p>
              <p className="text-[var(--text-secondary)] text-xs font-medium">
                Page <span className="text-[var(--accent)]">{page}</span> of {totalPages}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {jokes.map((joke, index) => (
                <JokeCard key={joke.id || index} joke={joke} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrev={prevPage}
              onNext={nextPage}
              onGoTo={setPage}
            />
          </>
        )}

        {/* ===== Empty State ===== */}
        {!loading && !error && jokes.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="text-6xl mb-4">🦗</div>
            <p className="text-[var(--text-secondary)] text-lg">
              No jokes found. The comedians are on a break!
            </p>
          </div>
        )}

        {/* ===== Footer ===== */}
        <footer className="text-center mt-16 pb-8 animate-fade-in-up">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent mb-6" />
          <p className="text-[var(--text-secondary)] text-xs">
            Built with <span className="text-[var(--accent)]">React</span> •
            Powered by{" "}
            <a
              href="https://freeapi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-warm)] transition-colors underline underline-offset-2"
            >
              FreeAPI
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
