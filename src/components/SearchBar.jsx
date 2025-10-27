import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={submit} className="w-full">
      <label htmlFor="search" className="sr-only">Search keywords</label>
      <div className="relative shadow-sm">
        <input
          id="search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter keywords to find sentences in YouTube videos"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-36 text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-[#3498db]"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-1 top-1 h-[calc(100%-0.5rem)] rounded-md bg-[#3498db] px-4 text-white font-medium hover:brightness-105 active:brightness-95 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-600">Tip: Use multiple keywords for precise matches. Example: hello me</p>
    </form>
  );
}

export default SearchBar;
