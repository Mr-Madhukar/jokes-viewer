import { useState } from "react";

export default function JokeCard({ joke, index }) {
  const [revealed, setRevealed] = useState(false);

  const isTwoPart = joke.setup && joke.punchline;
  const jokeText = isTwoPart ? joke.setup : joke.content || joke.joke || "No joke here!";

  return (
    <div
      className="animate-fade-in-up group relative"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-warm)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 group-hover:border-[var(--accent)]/20 group-hover:shadow-[var(--card-hover-shadow)]">
        {/* Joke number badge */}
        <div className="flex items-start justify-between gap-3">
          <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] text-[var(--bg-dark)] text-xs font-bold">
            {joke.id ? `#${joke.id}` : `#${index + 1}`}
          </span>

          {/* Category badge */}
          <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-[var(--accent)]/20 text-[var(--accent)] bg-[var(--accent)]/5">
            {joke.type || joke.category || "General"}
          </span>
        </div>

        {/* Joke text */}
        <p className="text-[var(--text-primary)] font-medium text-[15px] leading-relaxed">
          {jokeText}
        </p>

        {/* Punchline reveal */}
        {isTwoPart && (
          <div className="mt-1">
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)]/30 px-5 py-2 rounded-full bg-[var(--accent)]/5 hover:bg-[var(--accent)]/15 hover:border-[var(--accent)]/50 transition-all duration-300 cursor-pointer"
              >
                <span>Reveal Punchline</span>
                <span className="group-hover/btn:animate-float text-base">🥁</span>
              </button>
            ) : (
              <div className="animate-slide-reveal">
                <div className="relative pl-4 border-l-2 border-[var(--accent)]/40">
                  <p className="text-[var(--accent)] font-semibold italic text-sm leading-relaxed">
                    🎤 {joke.punchline}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
