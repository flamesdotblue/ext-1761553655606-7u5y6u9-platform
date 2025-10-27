function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sentence Finder for YouTube</p>
          <nav>
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3498db] hover:underline"
            >
              YouTube Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
