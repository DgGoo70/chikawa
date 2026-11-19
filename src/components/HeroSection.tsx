import {ArrowRight} from 'lucide-react';
import {HERO_METRICS} from '../data/chiikawaData';
import {HeroMeadowIllustration} from './ChiikawaIllustrations';

export function HeroSection() {
  return (
    <section id="intro" className="pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#645F69] mb-4">
              <span>나가노 원작</span>
              <span aria-hidden="true">·</span>
              <span>뭔가 작고 귀여운 녀석</span>
              <span aria-hidden="true">·</span>
              <span>ちいかわ</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.2vw,3.5rem)] leading-[1.18] tracking-tight text-[#252329] [text-wrap:balance] mb-5">
              작지만 열심히 살아가는
              <br />
              우리들의 치이카와
            </h1>

            <p className="text-base sm:text-[17px] leading-[1.7] text-[#554F59] max-w-xl mb-8">
              겁이 많고 눈물도 많지만 매일 제초와 토벌을 해내며 하루를 살아가는 작은 친구들.
              소박한 간식 하나에 크게 기뻐하고, 힘든 날에도 서로의 곁을 지켜주는
              치이카와의 따뜻하고 뭉클한 일상을 만나보세요.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#characters"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-[#C83E67] hover:bg-[#B03057] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67]"
              >
                <span>친구들 만나보기</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#world"
                className="inline-flex items-center py-2.5 px-2 text-sm sm:text-base font-medium text-[#252329] hover:text-[#C83E67] underline underline-offset-4 decoration-[#D8D2C7] hover:decoration-[#C83E67] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C83E67] rounded-sm"
              >
                세계관 살펴보기
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#E8E4DC] bg-[#F6FAFD]">
              <HeroMeadowIllustration />
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Summary Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-[#E8E4DC] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-xs font-medium text-[#645F69]">{metric.label}</p>
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-[26px] text-[#252329] tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs text-[#6E6873] leading-relaxed">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
