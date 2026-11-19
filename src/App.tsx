/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {CharacterSection} from './components/CharacterSection';
import {CheerAndEpisodesSection} from './components/CheerAndEpisodesSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {WorldSection} from './components/WorldSection';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FCFBF9] text-[#252329]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CharacterSection />
        <WorldSection />
        <CheerAndEpisodesSection />
      </main>
      <Footer />
    </div>
  );
}
