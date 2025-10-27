import { AlertTriangle } from "lucide-react";

function ErrorAlert({ message }) {
  if (!message) return null;
  return (
    <div className="flex items-start gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
      <AlertTriangle className="h-5 w-5 shrink-0" />
      <div className="text-sm">
        <p className="font-medium">There was a problem</p>
        <p className="mt-0.5 text-red-700/90">{message}</p>
        <p className="mt-2 text-[11px] text-red-600/80">If the issue persists and relates to the YouTube API, please try again later.</p>
      </div>
    </div>
  );
}

export default ErrorAlert;
