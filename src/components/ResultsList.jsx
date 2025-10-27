import ResultCard from "./ResultCard";

function ResultsList({ results, query, loading }) {
  if (loading) {
    return (
      <div className="mt-6 animate-pulse">
        <div className="h-24 bg-white/70 rounded-lg border border-slate-200" />
        <div className="h-24 bg-white/70 rounded-lg border border-slate-200 mt-3" />
        <div className="h-24 bg-white/70 rounded-lg border border-slate-200 mt-3" />
      </div>
    );
  }

  if (!results || results.length === 0) return null;

  return (
    <div>
      <div className="mb-3 text-sm text-slate-700">
        Found {results.length} result{results.length !== 1 ? "s" : ""}
        {query ? (
          <>
            {" "}for <span className="font-medium">"{query}"</span>
          </>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((r, idx) => (
          <ResultCard key={`${r.videoId}-${r.time}-${idx}`} result={r} />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
