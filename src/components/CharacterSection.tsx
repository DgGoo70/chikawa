import {useState} from 'react';
import {CHARACTERS, type CharacterId} from '../data/chiikawaData';
import {CharacterPortrait} from './ChiikawaIllustrations';

export function CharacterSection() {
  const [selectedId, setSelectedId] = useState<CharacterId>('chiikawa');

  const activeCharacter = CHARACTERS.find((item) => item.id === selectedId) ?? CHARACTERS[0];

  return (
    <section id="characters" className="py-16 md:py-22 bg-[#F5F3EE] border-y border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#645F69] mb-2">
              01. 등장인물 소개
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#252329] [text-wrap:balance]">
              각기 다른 매력의 작은 친구들
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="등장인물 선택"
            className="flex items-center gap-1 p-1 bg-[#EAE6DD] rounded-xl overflow-x-auto max-w-full"
          >
            {CHARACTERS.map((character) => {
              const isSelected = character.id === selectedId;
              return (
                <button
                  key={character.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(character.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67] ${
                    isSelected
                      ? 'bg-white text-[#252329] shadow-sm'
                      : 'text-[#5A545E] hover:text-[#252329]'
                  }`}
                >
                  {character.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Character Spotlight Card */}
        <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className={`w-full max-w-[300px] aspect-square rounded-2xl border ${activeCharacter.accentBorder} overflow-hidden transition-colors duration-200`}
              >
                <CharacterPortrait id={activeCharacter.id} />
              </div>
            </div>

            {/* Detail Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#645F69] mb-3">
                <span>{activeCharacter.japaneseName}</span>
                <span aria-hidden="true">·</span>
                <span>{activeCharacter.subtitle}</span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#252329]">
                  {activeCharacter.name}
                </h3>
                <p className={`font-[family-name:var(--font-display)] text-lg sm:text-xl ${activeCharacter.accentText}`}>
                  {activeCharacter.quote}
                </p>
              </div>

              <p className="text-[15px] sm:text-base leading-[1.7] text-[#4E4852] mb-6">
                {activeCharacter.description}
              </p>

              {/* Unboxed Metadata Separators */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-[#5E5863] pb-6 border-b border-[#EFECE6]">
                {activeCharacter.meta.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2.5">
                    <span>{item}</span>
                    {idx < activeCharacter.meta.length - 1 && (
                      <span aria-hidden="true" className="text-[#BDB6AA]">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Clean Editorial Key-Value Rows */}
              <dl className="divide-y divide-[#F2EFEA] mt-2">
                {activeCharacter.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4"
                  >
                    <dt className="sm:col-span-3 text-xs sm:text-sm font-semibold text-[#252329]">
                      {detail.label}
                    </dt>
                    <dd className="sm:col-span-9 text-sm text-[#554F59] leading-relaxed">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Quick-pick Character Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {CHARACTERS.map((character) => {
            const active = character.id === selectedId;
            return (
              <button
                key={character.id}
                type="button"
                onClick={() => setSelectedId(character.id)}
                className={`group flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67] ${
                  active
                    ? 'bg-white border-[#C83E67] shadow-sm'
                    : 'bg-[#FAF8F4] border-[#E8E4DC] hover:bg-white hover:border-[#D5CEC2]'
                }`}
              >
                <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-[#ECE8DF]">
                  <CharacterPortrait id={character.id} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#252329] truncate">
                    {character.name}
                  </p>
                  <p className="text-xs text-[#6E6873] truncate">
                    {character.japaneseName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
