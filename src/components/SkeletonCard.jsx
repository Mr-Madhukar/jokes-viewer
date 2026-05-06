export default function SkeletonCard({ index }) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 flex flex-col gap-4">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-full animate-shimmer" />
          <div className="w-16 h-5 rounded-full animate-shimmer" />
        </div>

        {/* Text lines skeleton */}
        <div className="space-y-3">
          <div className="h-4 rounded-lg animate-shimmer w-full" />
          <div className="h-4 rounded-lg animate-shimmer w-4/5" />
          <div className="h-4 rounded-lg animate-shimmer w-3/5" />
        </div>

        {/* Button skeleton */}
        <div className="h-9 w-40 rounded-full animate-shimmer mt-1" />
      </div>
    </div>
  );
}
