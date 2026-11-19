export function Footer() {
  return (
    <footer className="bg-[#FCFBF9] border-t border-[#E8E4DC] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <p className="font-[family-name:var(--font-display)] text-xl text-[#252329]">
            치이카와
          </p>
          <p className="text-xs sm:text-sm text-[#645F69]">
            일러스트레이터 나가노(Nagano)의 작품 ‘치이카와(뭔가 작고 귀여운 녀석)’를 소개하는 원페이지 큐레이션입니다.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs sm:text-sm text-[#5A545E]">
          <a
            href="#intro"
            className="hover:text-[#252329] transition-colors whitespace-nowrap shrink-0"
          >
            소개
          </a>
          <a
            href="#characters"
            className="hover:text-[#252329] transition-colors whitespace-nowrap shrink-0"
          >
            등장인물
          </a>
          <a
            href="#world"
            className="hover:text-[#252329] transition-colors whitespace-nowrap shrink-0"
          >
            세계관
          </a>
          <a
            href="#top"
            className="font-medium text-[#252329] hover:text-[#C83E67] transition-colors whitespace-nowrap shrink-0"
          >
            맨 위로
          </a>
        </div>
      </div>
    </footer>
  );
}
