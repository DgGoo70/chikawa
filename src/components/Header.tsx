export function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 bg-[#FCFBF9]/95 backdrop-blur-sm border-b border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[#252329] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
        >
          치이카와
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav aria-label="주요 섹션 이동" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A545E]">
          <a
            href="#intro"
            className="hover:text-[#252329] hover:underline underline-offset-4 decoration-[#C83E67] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
          >
            소개
          </a>
          <a
            href="#characters"
            className="hover:text-[#252329] hover:underline underline-offset-4 decoration-[#C83E67] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
          >
            등장인물
          </a>
          <a
            href="#world"
            className="hover:text-[#252329] hover:underline underline-offset-4 decoration-[#C83E67] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
          >
            세계관
          </a>
          <a
            href="#episodes"
            className="hover:text-[#252329] hover:underline underline-offset-4 decoration-[#C83E67] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
          >
            명장면
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            href="#cheer"
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#C83E67] hover:bg-[#B03057] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67]"
          >
            오늘의 응원 뽑기
          </a>
        </div>
      </div>
    </header>
  );
}
