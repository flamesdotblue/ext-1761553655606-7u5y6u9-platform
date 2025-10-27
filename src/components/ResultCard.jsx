function secondsToTimestamp(sec) {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
    
  }
  return `${m}:${String(ss).padStart(2, "0")}`;
}

function ResultCard({ result }) {
  const { videoId, title, thumbnail, sentence, time } = result;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}&t=${Math.max(0, Math.floor(time))}s`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-700">“{sentence}”</p>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            Timestamp: {secondsToTimestamp(time)}
          </span>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-[#3498db] px-3 py-1.5 text-sm font-medium text-white hover:brightness-105 active:brightness-95"
          >
            Play from Timestamp
          </a>
        </div>
      </div>
    </article>
  );
}

export default ResultCard;
