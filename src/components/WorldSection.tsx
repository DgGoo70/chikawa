import {WORLD_ITEMS} from '../data/chiikawaData';
import {WorldMeadowIllustration} from './ChiikawaIllustrations';

export function WorldSection() {
  return (
    <section id="world" className="py-16 md:py-22 bg-[#FCFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-medium text-[#645F69] mb-2">
            02. 세계관과 일상
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#252329] [text-wrap:balance] mb-3">
            귀여움 속에 담긴 조금은 짠하고 다정한 세상
          </h2>
          <p className="text-[15px] sm:text-base leading-[1.7] text-[#554F59]">
            치이카와의 매력은 단순히 동글동글한 그림체에만 있지 않습니다. 열심히 일해서 돈을 벌고,
            시험에 떨어져 속상해하기도 하며, 맛있는 간식 하나로 다시 기운을 내는 현실적인 일상이 공존합니다.
          </p>
        </div>

        {/* Asymmetric Bento Grid (col-span-2 + col-span-1 rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORLD_ITEMS.map((item, index) => {
            const isWide = item.span === 'wide';
            return (
              <article
                key={item.number}
                className={`${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                } bg-white rounded-2xl border border-[#E8E4DC] p-6 sm:p-8 flex flex-col justify-between`}
              >
                <div>
                  <p className="text-xs font-semibold text-[#C83E67] tabular-nums mb-2">
                    {item.number}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#252329] mb-3 [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#4E4852]">
                    {item.summary}
                  </p>
                </div>

                {index === 0 && (
                  <div className="mt-6 rounded-xl overflow-hidden border border-[#ECE8DF] aspect-[16/6]">
                    <WorldMeadowIllustration />
                  </div>
                )}

                <p className="mt-6 pt-4 border-t border-[#F2EFEA] text-xs sm:text-sm text-[#645F69] leading-relaxed">
                  {item.note}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
