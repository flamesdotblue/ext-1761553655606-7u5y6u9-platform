import { useState, useMemo } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import ErrorAlert from "./components/ErrorAlert";
import Footer from "./components/Footer";

// Mock dataset simulating indexed YouTube sentences with timestamps
const MOCK_DATA = [
  {
    videoId: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up - Official Music Video",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    sentences: [
      { text: "Never gonna give you up, never gonna let you down", time: 42 },
      { text: "We know the game and we're gonna play it", time: 68 },
      { text: "Never gonna make you cry, never gonna say goodbye", time: 95 },
    ],
  },
  {
    videoId: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE(강남스타일) M/V",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    sentences: [
      { text: "Oppa Gangnam Style", time: 55 },
      { text: "A girl who is warm and humanly during the day", time: 73 },
      { text: "A classy girl who knows how to enjoy the freedom of a cup of coffee", time: 82 },
    ],
  },
  {
    videoId: "3JZ_D3ELwOQ",
    title: "Adele - Hello",
    thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    sentences: [
      { text: "Hello, it's me", time: 32 },
      { text: "I was wondering if after all these years you'd like to meet", time: 44 },
      { text: "There's such a difference between us and a million miles", time: 58 },
    ],
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasResults = useMemo(() => results && results.length > 0, [results]);

  const onSearch = async (q) => {
    const cleaned = q.trim();
    setQuery(cleaned);
    setError("");

    if (!cleaned) {
      setResults([]);
      setError("Please enter one or more keywords to search.");
      return;
    }

    setLoading(true);

    try {
      // Simulate network latency and potential API failure
      await new Promise((res) => setTimeout(res, 500));

      // Randomly simulate API issues at a very low rate to demonstrate error handling
      if (Math.random() < 0.02) {
        throw new Error("Temporary YouTube API issue. Please try again.");
      }

      const terms = cleaned.toLowerCase().split(/\s+/).filter(Boolean);
      // Flatten the dataset to sentence-level results
      const matches = [];
      for (const video of MOCK_DATA) {
        for (const s of video.sentences) {
          const hay = `${s.text} ${video.title}`.toLowerCase();
          const isMatch = terms.every((t) => hay.includes(t));
          if (isMatch) {
            matches.push({
              videoId: video.videoId,
              title: video.title,
              thumbnail: video.thumbnail,
              sentence: s.text,
              time: s.time,
            });
          }
        }
      }

      setResults(matches);
    } catch (e) {
      setResults([]);
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ecf0f1] text-slate-900">
      <header className="w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Find Sentences in YouTube Videos</h1>
          <p className="mt-1 text-slate-600">Enter keywords to find exact sentences, see timestamps, and jump right to that moment.</p>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-6">
        <section className="">
          <SearchBar onSearch={onSearch} loading={loading} />
          {error && (
            <div className="mt-4">
              <ErrorAlert message={error} />
            </div>
          )}
        </section>

        <section className="mt-6">
          {!loading && !hasResults && !error && (
            <div className="text-slate-600 text-sm">No results yet. Try searching for lyrics like "never gonna" or phrases like "hello it's me".</div>
          )}
          <ResultsList results={results} query={query} loading={loading} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
