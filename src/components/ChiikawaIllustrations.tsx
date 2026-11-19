import type {CharacterId} from '../data/chiikawaData';

interface PortraitProps {
  id: CharacterId;
  className?: string;
}

export function CharacterPortrait({id, className = 'w-full h-full'}: PortraitProps) {
  switch (id) {
    case 'chiikawa':
      return (
        <svg viewBox="0 0 240 240" fill="none" className={className} role="img" aria-label="치이카와 일러스트">
          <rect width="240" height="240" rx="24" fill="#FFF4F7" />
          {/* Soft ground shadow */}
          <ellipse cx="120" cy="198" rx="56" ry="10" fill="#F2D7DF" />
          {/* Ears */}
          <circle cx="78" cy="68" r="18" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" />
          <circle cx="162" cy="68" r="18" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" />
          {/* Arms */}
          <path d="M62 146C46 142 42 158 54 166C62 171 72 166 74 158" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M178 144C194 134 202 148 190 160C182 167 170 165 168 156" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Body */}
          <path
            d="M66 132C66 86 88 64 120 64C152 64 174 86 174 132C174 164 162 186 142 190C138 196 130 198 124 190H116C110 198 102 196 98 190C78 186 66 164 66 132Z"
            fill="#FFFFFF"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Ear inner blend */}
          <path d="M68 74C75 68 85 72 88 79" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <path d="M172 74C165 68 155 72 152 79" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          {/* Rosy cheeks */}
          <ellipse cx="88" cy="126" rx="11" ry="7" fill="#F8B4C6" />
          <ellipse cx="152" cy="126" rx="11" ry="7" fill="#F8B4C6" />
          {/* Eyes */}
          <circle cx="98" cy="110" r="6" fill="#3C312B" />
          <circle cx="96.5" cy="108" r="2" fill="#FFFFFF" />
          <circle cx="142" cy="110" r="6" fill="#3C312B" />
          <circle cx="140.5" cy="108" r="2" fill="#FFFFFF" />
          {/* Eyebrows */}
          <path d="M93 98C96 95 101 95 103 98" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M137 98C139 95 144 95 147 98" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
          {/* Cute mouth */}
          <path d="M111 122C113 127 118 127 120 122C122 127 127 127 129 122" stroke="#3C312B" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Tiny pink flower held in paw */}
          <path d="M192 146V122" stroke="#5E8F5B" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="192" cy="112" r="6" fill="#F48FB1" stroke="#3C312B" strokeWidth="2.5" />
          <circle cx="183" cy="118" r="6" fill="#F48FB1" stroke="#3C312B" strokeWidth="2.5" />
          <circle cx="201" cy="118" r="6" fill="#F48FB1" stroke="#3C312B" strokeWidth="2.5" />
          <circle cx="192" cy="119" r="4" fill="#FDE08D" />
        </svg>
      );

    case 'hachiware':
      return (
        <svg viewBox="0 0 240 240" fill="none" className={className} role="img" aria-label="하치와레 일러스트">
          <rect width="240" height="240" rx="24" fill="#EEF7FC" />
          <ellipse cx="120" cy="198" rx="56" ry="10" fill="#D5E6F2" />
          {/* Cat Ears (blue outer) */}
          <path d="M72 86L65 52C64 47 70 44 74 47L98 67" fill="#7AB8E8" stroke="#3C312B" strokeWidth="4.5" strokeLinejoin="round" />
          <path d="M168 86L175 52C176 47 170 44 166 47L142 67" fill="#7AB8E8" stroke="#3C312B" strokeWidth="4.5" strokeLinejoin="round" />
          {/* Arms */}
          <path d="M62 146C46 140 42 156 54 165C63 171 73 166 75 158" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M178 146C194 140 198 156 186 165C177 171 167 166 165 158" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          {/* Body */}
          <path
            d="M66 132C66 86 88 64 120 64C152 64 174 86 174 132C174 164 162 186 142 190C138 196 130 198 124 190H116C110 198 102 196 98 190C78 186 66 164 66 132Z"
            fill="#FFFFFF"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Blue parted bangs */}
          <path
            d="M72 95C78 72 96 64 120 64V92C104 92 86 99 72 95Z"
            fill="#7AB8E8"
            stroke="#3C312B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M168 95C162 72 144 64 120 64V92C136 92 154 99 168 95Z"
            fill="#7AB8E8"
            stroke="#3C312B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Cheeks */}
          <ellipse cx="86" cy="128" rx="10" ry="6.5" fill="#F8B4C6" />
          <ellipse cx="154" cy="128" rx="10" ry="6.5" fill="#F8B4C6" />
          {/* Eyes */}
          <circle cx="97" cy="113" r="6" fill="#3C312B" />
          <circle cx="95.5" cy="111" r="2" fill="#FFFFFF" />
          <circle cx="143" cy="113" r="6" fill="#3C312B" />
          <circle cx="141.5" cy="111" r="2" fill="#FFFFFF" />
          {/* Cheerful smile */}
          <path d="M111 122C113 127 118 127 120 122C122 127 127 127 129 122" stroke="#3C312B" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M115 127C115 134 125 134 125 127" fill="#F28A9E" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
          {/* Tiny camera */}
          <rect x="97" y="150" width="46" height="30" rx="7" fill="#5D9FD6" stroke="#3C312B" strokeWidth="3.5" />
          <circle cx="120" cy="165" r="9" fill="#FFFFFF" stroke="#3C312B" strokeWidth="3" />
          <circle cx="120" cy="165" r="4" fill="#3C312B" />
          <rect x="129" y="145" width="9" height="5" rx="2" fill="#E4EEF7" stroke="#3C312B" strokeWidth="2.5" />
        </svg>
      );

    case 'usagi':
      return (
        <svg viewBox="0 0 240 240" fill="none" className={className} role="img" aria-label="우사기 일러스트">
          <rect width="240" height="240" rx="24" fill="#FFF9E6" />
          <ellipse cx="120" cy="204" rx="56" ry="9" fill="#EFE0B8" />
          {/* Tall Rabbit Ears */}
          <ellipse cx="96" cy="54" rx="13" ry="34" transform="rotate(-7 96 54)" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4.5" />
          <ellipse cx="96" cy="56" rx="6" ry="20" transform="rotate(-7 96 56)" fill="#F7C4D0" />
          <ellipse cx="144" cy="54" rx="13" ry="34" transform="rotate(7 144 54)" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4.5" />
          <ellipse cx="144" cy="56" rx="6" ry="20" transform="rotate(7 144 56)" fill="#F7C4D0" />
          {/* Arms */}
          <path d="M62 148C46 139 43 154 54 164C62 170 72 167 74 159" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M178 148C194 139 197 154 186 164C178 170 168 167 166 159" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          {/* Body */}
          <path
            d="M68 138C68 95 89 75 120 75C151 75 172 95 172 138C172 169 160 190 141 194C137 200 129 201 124 194H116C111 201 103 200 99 194C80 190 68 169 68 138Z"
            fill="#FBE6A2"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Cheeks */}
          <ellipse cx="89" cy="133" rx="10" ry="6.5" fill="#F6A4B8" />
          <ellipse cx="151" cy="133" rx="10" ry="6.5" fill="#F6A4B8" />
          {/* Eyes & Playful Brows */}
          <circle cx="99" cy="118" r="6" fill="#3C312B" />
          <circle cx="97.5" cy="116" r="2" fill="#FFFFFF" />
          <circle cx="141" cy="118" r="6" fill="#3C312B" />
          <circle cx="139.5" cy="116" r="2" fill="#FFFFFF" />
          <path d="M92 106C97 103 103 103 106 106" stroke="#3C312B" strokeWidth="3" strokeLinecap="round" />
          <path d="M134 106C137 103 143 103 148 106" stroke="#3C312B" strokeWidth="3" strokeLinecap="round" />
          {/* Mouth */}
          <path d="M110 129C113 134 118 134 120 129C122 134 127 134 130 129" stroke="#3C312B" strokeWidth="3.2" strokeLinecap="round" />
          {/* Melon Bread */}
          <ellipse cx="120" cy="167" rx="24" ry="16" fill="#E6A95C" stroke="#3C312B" strokeWidth="3.5" />
          <path d="M104 159L122 178M116 153L136 173M136 159L118 178M124 153L104 173" stroke="#C58235" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'momonga':
      return (
        <svg viewBox="0 0 240 240" fill="none" className={className} role="img" aria-label="모몽가 일러스트">
          <rect width="240" height="240" rx="24" fill="#F6F2FB" />
          <ellipse cx="120" cy="198" rx="58" ry="10" fill="#E2D8EE" />
          {/* Fluffy Tail */}
          <path
            d="M156 172C186 172 204 146 196 120C190 102 172 104 166 118"
            fill="#FFFFFF"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Ears */}
          <circle cx="80" cy="70" r="19" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" />
          <circle cx="80" cy="70" r="10" fill="#B7A9CE" />
          <circle cx="160" cy="70" r="19" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4.5" />
          <circle cx="160" cy="70" r="10" fill="#B7A9CE" />
          {/* Body */}
          <path
            d="M68 132C68 88 89 67 120 67C151 67 172 88 172 132C172 164 160 186 141 190C137 196 129 198 124 190H116C111 198 103 196 99 190C80 186 68 164 68 132Z"
            fill="#FFFFFF"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Fluffy bangs */}
          <path d="M104 72C111 82 129 82 136 72" stroke="#D5CBE4" strokeWidth="4" strokeLinecap="round" />
          {/* Big sparkling eyes */}
          <circle cx="96" cy="113" r="8.5" fill="#3C312B" />
          <circle cx="93.5" cy="110" r="3" fill="#FFFFFF" />
          <circle cx="99" cy="116" r="1.5" fill="#FFFFFF" />
          <circle cx="144" cy="113" r="8.5" fill="#3C312B" />
          <circle cx="141.5" cy="110" r="3" fill="#FFFFFF" />
          <circle cx="147" cy="116" r="1.5" fill="#FFFFFF" />
          {/* Rosy cheeks */}
          <ellipse cx="83" cy="128" rx="10" ry="6.5" fill="#F8B4C6" />
          <ellipse cx="157" cy="128" rx="10" ry="6.5" fill="#F8B4C6" />
          {/* Cute pleading paws near cheeks */}
          <ellipse cx="90" cy="148" rx="12" ry="9" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" />
          <ellipse cx="150" cy="148" rx="12" ry="9" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" />
          {/* Smile */}
          <path d="M113 125C116 129 124 129 127 125" stroke="#3C312B" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );

    case 'kurimanju':
      return (
        <svg viewBox="0 0 240 240" fill="none" className={className} role="img" aria-label="쿠리만주 일러스트">
          <rect width="240" height="240" rx="24" fill="#F8F3EC" />
          <ellipse cx="120" cy="198" rx="56" ry="10" fill="#E3D5C3" />
          {/* Small round ears */}
          <circle cx="78" cy="76" r="13" fill="#A76B44" stroke="#3C312B" strokeWidth="4.5" />
          <circle cx="162" cy="76" r="13" fill="#A76B44" stroke="#3C312B" strokeWidth="4.5" />
          {/* Arms */}
          <path d="M64 148C48 142 46 158 56 165C64 170 72 166 74 159" fill="#FFFDF7" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M176 146C191 136 198 148 188 159C181 166 170 164 168 156" fill="#FFFDF7" stroke="#3C312B" strokeWidth="4.5" strokeLinecap="round" />
          {/* Body */}
          <path
            d="M68 134C68 88 89 67 120 67C151 67 172 88 172 134C172 165 160 186 141 190C137 196 129 198 124 190H116C111 198 103 196 99 190C80 186 68 165 68 134Z"
            fill="#FFFDF7"
            stroke="#3C312B"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Chestnut brown cap */}
          <path
            d="M72 104C78 78 96 67 120 67C144 67 162 78 168 104C152 94 136 92 120 92C104 92 88 94 72 104Z"
            fill="#A76B44"
            stroke="#3C312B"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Eyes */}
          <circle cx="98" cy="118" r="5.5" fill="#3C312B" />
          <circle cx="96.5" cy="116.5" r="1.8" fill="#FFFFFF" />
          <circle cx="142" cy="118" r="5.5" fill="#3C312B" />
          <circle cx="140.5" cy="116.5" r="1.8" fill="#FFFFFF" />
          {/* Cheeks */}
          <ellipse cx="86" cy="130" rx="9" ry="6" fill="#F4AEBD" />
          <ellipse cx="154" cy="130" rx="9" ry="6" fill="#F4AEBD" />
          {/* Calm satisfied expression */}
          <path d="M114 128C117 132 123 132 126 128" stroke="#3C312B" strokeWidth="3.2" strokeLinecap="round" />
          {/* Fizzy soda bottle */}
          <rect x="180" y="114" width="22" height="46" rx="7" fill="#9EDBB4" stroke="#3C312B" strokeWidth="3.5" />
          <rect x="186" y="104" width="10" height="10" rx="2" fill="#D5F2DF" stroke="#3C312B" strokeWidth="3" />
          <circle cx="191" cy="134" r="3" fill="#FFFFFF" />
          <circle cx="187" cy="144" r="2" fill="#FFFFFF" />
        </svg>
      );
  }
}

export function HeroMeadowIllustration() {
  return (
    <svg
      viewBox="0 0 640 480"
      fill="none"
      className="w-full h-full object-cover"
      role="img"
      aria-label="풀밭에서 피크닉을 즐기는 치이카와와 친구들 일러스트"
    >
      {/* Sky */}
      <rect width="640" height="480" fill="#F6FAFD" />
      <circle cx="520" cy="96" r="46" fill="#FFF3C4" />
      {/* Fluffy clouds */}
      <g fill="#FFFFFF">
        <ellipse cx="135" cy="86" rx="44" ry="20" />
        <ellipse cx="164" cy="80" rx="28" ry="18" />
        <ellipse cx="106" cy="90" rx="24" ry="14" />
        <ellipse cx="385" cy="70" rx="38" ry="16" />
        <ellipse cx="412" cy="64" rx="24" ry="15" />
      </g>

      {/* Rolling hills */}
      <path d="M0 305C140 250 280 260 410 292C510 316 585 288 640 272V480H0V305Z" fill="#DCEFD2" />
      <path d="M0 330C170 296 360 304 640 335V480H0V330Z" fill="#C9E6B9" />

      {/* Tiny distant clovers */}
      <g fill="#9AC784">
        <circle cx="88" cy="368" r="7" />
        <circle cx="99" cy="364" r="7" />
        <circle cx="94" cy="376" r="7" />
        <circle cx="552" cy="360" r="8" />
        <circle cx="564" cy="356" r="8" />
        <circle cx="558" cy="368" r="8" />
      </g>

      {/* Picnic mat */}
      <path d="M126 392L218 336H442L518 392C522 396 519 406 512 406H132C125 406 122 396 126 392Z" fill="#FFFDF9" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
      <path d="M188 354H458L482 374H162L188 354Z" fill="#FADCE4" />

      {/* Center Giant Custard Pudding */}
      <ellipse cx="322" cy="378" rx="44" ry="11" fill="#FFFFFF" stroke="#3C312B" strokeWidth="3.5" />
      <path d="M294 374L301 334C303 328 341 328 343 334L350 374H294Z" fill="#FCE08B" stroke="#3C312B" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M301 334C303 328 341 328 343 334C344 342 336 346 328 342C320 338 312 346 301 334Z" fill="#7D492D" stroke="#3C312B" strokeWidth="3" />

      {/* Left: Hachiware */}
      <g transform="translate(120, 178)">
        <path d="M40 50L34 22C33 18 38 15 42 18L62 34" fill="#7AB8E8" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <path d="M118 50L124 22C125 18 120 15 116 18L96 34" fill="#7AB8E8" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <path d="M34 94C34 56 52 38 79 38C106 38 124 56 124 94C124 122 114 140 96 144H62C44 140 34 122 34 94Z" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <path d="M39 64C44 45 59 38 79 38V61C65 61 50 67 39 64Z" fill="#7AB8E8" stroke="#3C312B" strokeWidth="3" />
        <path d="M119 64C114 45 99 38 79 38V61C93 61 108 67 119 64Z" fill="#7AB8E8" stroke="#3C312B" strokeWidth="3" />
        <ellipse cx="52" cy="91" rx="8" ry="5" fill="#F8B4C6" />
        <ellipse cx="106" cy="91" rx="8" ry="5" fill="#F8B4C6" />
        <circle cx="60" cy="79" r="5" fill="#3C312B" />
        <circle cx="58.5" cy="77.5" r="1.7" fill="#FFFFFF" />
        <circle cx="98" cy="79" r="5" fill="#3C312B" />
        <circle cx="96.5" cy="77.5" r="1.7" fill="#FFFFFF" />
        <path d="M72 87C74 91 78 91 79 87C80 91 84 91 86 87" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
      </g>

      {/* Center-Back: Chiikawa */}
      <g transform="translate(244, 152)">
        <circle cx="44" cy="36" r="14" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" />
        <circle cx="114" cy="36" r="14" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" />
        <path d="M34 92C34 54 52 36 79 36C106 36 124 54 124 92C124 120 114 138 96 142H62C44 138 34 120 34 92Z" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <path d="M37 40C42 36 49 38 52 44" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M121 40C116 36 109 38 106 44" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="52" cy="87" rx="8.5" ry="5.5" fill="#F8B4C6" />
        <ellipse cx="106" cy="87" rx="8.5" ry="5.5" fill="#F8B4C6" />
        <circle cx="60" cy="75" r="5" fill="#3C312B" />
        <circle cx="58.5" cy="73.5" r="1.7" fill="#FFFFFF" />
        <circle cx="98" cy="75" r="5" fill="#3C312B" />
        <circle cx="96.5" cy="73.5" r="1.7" fill="#FFFFFF" />
        <path d="M72 84C74 88 78 88 79 84C80 88 84 88 86 84" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
      </g>

      {/* Right: Usagi */}
      <g transform="translate(362, 162)">
        <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(-7 60 30)" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4" />
        <ellipse cx="60" cy="32" rx="4.5" ry="15" transform="rotate(-7 60 32)" fill="#F7C4D0" />
        <ellipse cx="98" cy="30" rx="10" ry="26" transform="rotate(7 98 30)" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4" />
        <ellipse cx="98" cy="32" rx="4.5" ry="15" transform="rotate(7 98 32)" fill="#F7C4D0" />
        <path d="M35 102C35 66 53 48 79 48C105 48 123 66 123 102C123 128 113 145 96 149H62C45 145 35 128 35 102Z" fill="#FBE6A2" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <ellipse cx="53" cy="98" rx="8" ry="5" fill="#F6A4B8" />
        <ellipse cx="105" cy="98" rx="8" ry="5" fill="#F6A4B8" />
        <circle cx="62" cy="86" r="5" fill="#3C312B" />
        <circle cx="60.5" cy="84.5" r="1.7" fill="#FFFFFF" />
        <circle cx="96" cy="86" r="5" fill="#3C312B" />
        <circle cx="94.5" cy="84.5" r="1.7" fill="#FFFFFF" />
        <path d="M72 95C74 99 78 99 79 95C80 99 84 99 86 95" stroke="#3C312B" strokeWidth="2.8" strokeLinecap="round" />
      </g>

      {/* Cute sweet melon bread on mat */}
      <ellipse cx="222" cy="378" rx="22" ry="13" fill="#E8AC60" stroke="#3C312B" strokeWidth="3" />
      <path d="M210 371L224 385M222 367L234 379M232 371L218 385" stroke="#C48236" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WorldMeadowIllustration() {
  return (
    <svg
      viewBox="0 0 640 240"
      fill="none"
      className="w-full h-full object-cover"
      role="img"
      aria-label="치이카와 세계의 작은 집과 풀밭 풍경"
    >
      <rect width="640" height="240" rx="16" fill="#F3F8EE" />
      {/* Distant sky & hills */}
      <path d="M0 154C160 116 330 124 490 148C555 158 605 148 640 140V240H0V154Z" fill="#DCF0CF" />
      <path d="M0 176C220 156 440 162 640 182V240H0V176Z" fill="#CBE6BA" />

      {/* Cute little round white dome house */}
      <g transform="translate(88, 72)">
        <path d="M22 106C22 52 54 24 94 24C134 24 166 52 166 106H22Z" fill="#FFFFFF" stroke="#3C312B" strokeWidth="4" strokeLinejoin="round" />
        <path d="M74 106V72C74 62 114 62 114 72V106H74Z" fill="#E4B589" stroke="#3C312B" strokeWidth="3.5" />
        <circle cx="104" cy="88" r="3" fill="#3C312B" />
        <rect x="40" y="66" width="22" height="20" rx="5" fill="#DCEEF9" stroke="#3C312B" strokeWidth="3" />
      </g>

      {/* Wooden Labor Notice Board */}
      <g transform="translate(360, 88)">
        <rect x="26" y="60" width="10" height="44" fill="#9E734E" stroke="#3C312B" strokeWidth="3" />
        <rect x="112" y="60" width="10" height="44" fill="#9E734E" stroke="#3C312B" strokeWidth="3" />
        <rect x="8" y="8" width="132" height="62" rx="8" fill="#E5BE92" stroke="#3C312B" strokeWidth="3.5" />
        <rect x="22" y="20" width="44" height="36" rx="4" fill="#FFFDF7" stroke="#3C312B" strokeWidth="2.5" />
        <rect x="78" y="20" width="46" height="36" rx="4" fill="#FFF5F7" stroke="#3C312B" strokeWidth="2.5" />
        <path d="M30 32H58M30 42H50" stroke="#7A6D63" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M86 32H116M86 42H106" stroke="#C85D7A" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Giant four-leaf clovers */}
      <g transform="translate(534, 134)">
        <path d="M26 24V64" stroke="#4D8A4D" strokeWidth="4" strokeLinecap="round" />
        <circle cx="16" cy="18" r="11" fill="#7AC272" stroke="#3C312B" strokeWidth="3" />
        <circle cx="36" cy="18" r="11" fill="#7AC272" stroke="#3C312B" strokeWidth="3" />
        <circle cx="16" cy="34" r="11" fill="#7AC272" stroke="#3C312B" strokeWidth="3" />
        <circle cx="36" cy="34" r="11" fill="#7AC272" stroke="#3C312B" strokeWidth="3" />
      </g>
    </svg>
  );
}
