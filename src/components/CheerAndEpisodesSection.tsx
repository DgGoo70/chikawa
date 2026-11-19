import {Check, Copy, RefreshCw} from 'lucide-react';
import {useState} from 'react';
import {CHEER_CARDS, EPISODES, type MoodId} from '../data/chiikawaData';
import {CharacterPortrait} from './ChiikawaIllustrations';

const MOODS: {id: MoodId; label: string}[] = [
  {id: 'working', label: '열심히 일하는 중'},
  {id: 'tired', label: '조금 지쳤어요'},
  {id: 'sweet', label: '달콤한 게 필요해'},
  {id: 'study', label: '시험·공부 파이팅'},
];

export function CheerAndEpisodesSection() {
  const [selectedMood, setSelectedMood] = useState<MoodId>('working');
  const [cardVariantIndex, setCardVariantIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);

  const moodCards = CHEER_CARDS.filter((card) => card.mood === selectedMood);
  const activeCard = moodCards[cardVariantIndex % moodCards.length] ?? CHEER_CARDS[0];

  const handleSelectMood = (mood: MoodId) => {
    setSelectedMood(mood);
    setCardVariantIndex(0);
    setCopied(false);
  };

  const handleDrawNextCard = () => {
    setCardVariantIndex((prev) => prev + 1);
    setCopied(false);
  };

  const handleCopyCheer = async () => {
    const text = `[${activeCard.characterName}의 응원] ${activeCard.quote} (추천 간식: ${activeCard.recommendedSnack})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="episodes" className="py-16 md:py-22 bg-[#F5F3EE] border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Iconic Episodes Interactive List */}
        <div className="lg:col-span-6">
          <p className="text-xs font-medium text-[#645F69] mb-2">
            03. 입문 추천 명장면
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#252329] [text-wrap:balance] mb-3">
            처음 본다면 꼭 만나봐야 할 에피소드
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#554F59] mb-7">
            짧은 분량 안에 웃음과 울컥함을 동시에 담아내는 대표 에피소드 세 편을 골라보았습니다.
          </p>

          <div className="bg-white rounded-2xl border border-[#E8E4DC] divide-y divide-[#EFECE6]">
            {EPISODES.map((ep, idx) => {
              const isOpen = idx === activeEpisodeIndex;
              return (
                <div key={ep.number} className="p-5 sm:p-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveEpisodeIndex(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E67] rounded-sm"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#645F69] mb-1.5">
                        <span className="font-semibold text-[#C83E67] tabular-nums">{ep.number}</span>
                        <span aria-hidden="true">·</span>
                        <span>{ep.tagLine}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#252329]">
                        {ep.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-md shrink-0 transition-colors ${
                        isOpen ? 'bg-[#FFF0F4] text-[#B5365B]' : 'bg-[#F5F3EE] text-[#5A545E]'
                      }`}
                    >
                      {isOpen ? '읽는 중' : '보기'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-[#F4F1EC] space-y-2.5">
                      <p className="text-sm leading-[1.7] text-[#4E4852]">
                        {ep.story}
                      </p>
                      <p className="text-sm font-medium text-[#B5365B]">
                        {ep.highlightQuote}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Daily Cheer Card */}
        <div id="cheer" className="lg:col-span-6 scroll-mt-20">
          <p className="text-xs font-medium text-[#645F69] mb-2">
            04. 오늘의 작은 응원
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#252329] [text-wrap:balance] mb-3">
            지금 기분에 맞는 응원을 뽑아보세요
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#554F59] mb-7">
            오늘의 상태를 고르면 치이카와 친구들이 작은 응원 한마디와 간식을 추천해 드립니다.
          </p>

          <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-7">
            {/* Mood Selector */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {MOODS.map((mood) => {
                const isSelected = mood.id === selectedMood;
                return (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={() => handleSelectMood(mood.id)}
                    className={`px-3 py-2.5 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-150 cursor-pointer whitespace-nowrap truncate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67] ${
                      isSelected
                        ? 'bg-[#252329] text-white border-[#252329]'
                        : 'bg-[#FAF8F4] text-[#4E4852] border-[#E8E4DC] hover:bg-[#F2EFE8]'
                    }`}
                  >
                    {mood.label}
                  </button>
                );
              })}
            </div>

            {/* Active Cheer Card Display */}
            <div className="rounded-xl bg-[#FCFBF9] border border-[#E8E4DC] p-5 sm:p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#E8E4DC] shrink-0">
                  <CharacterPortrait id={activeCard.characterId} />
                </div>
                <div>
                  <p className="text-xs text-[#645F69]">
                    {activeCard.moodLabel} · 추천 친구
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[#252329]">
                    {activeCard.characterName}
                  </p>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-[#252329] leading-relaxed mb-2.5">
                {activeCard.quote}
              </blockquote>
              <p className="text-sm text-[#554F59] leading-relaxed mb-5">
                {activeCard.message}
              </p>

              <div className="pt-4 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="text-[#645F69]">오늘의 추천 간식</span>
                <span className="font-semibold text-[#B5365B]">{activeCard.recommendedSnack}</span>
              </div>
            </div>

            {/* Card Actions */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleDrawNextCard}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#C83E67] hover:bg-[#B03057] rounded-xl transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67]"
              >
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                <span>다른 응원 보기</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCheer}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#252329] bg-[#F5F3EE] hover:bg-[#EAE6DD] rounded-xl transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#2A7A4B]" aria-hidden="true" />
                    <span>문구를 복사했어요</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>응원 문구 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
