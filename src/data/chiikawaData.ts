export type CharacterId = 'chiikawa' | 'hachiware' | 'usagi' | 'momonga' | 'kurimanju';

export interface CharacterProfile {
  id: CharacterId;
  name: string;
  japaneseName: string;
  subtitle: string;
  quote: string;
  description: string;
  meta: string[];
  accentBg: string;
  accentBorder: string;
  accentText: string;
  details: {
    label: string;
    value: string;
  }[];
}

export interface WorldItem {
  number: string;
  title: string;
  summary: string;
  note: string;
  span: 'wide' | 'narrow';
}

export interface EpisodeItem {
  number: string;
  title: string;
  tagLine: string;
  story: string;
  highlightQuote: string;
}

export type MoodId = 'working' | 'tired' | 'sweet' | 'study';

export interface CheerCard {
  id: string;
  mood: MoodId;
  moodLabel: string;
  characterId: CharacterId;
  characterName: string;
  quote: string;
  message: string;
  recommendedSnack: string;
}

export const HERO_METRICS = [
  {label: '주인공 삼총사', value: '3명', note: '치이카와 · 하치와레 · 우사기'},
  {label: '연재 시작', value: '2020년', note: '작가 나가노 X(트위터) 연재'},
  {label: '주요 일과', value: '제초 · 토벌', note: '작은 손으로 버는 소중한 보수'},
  {label: '인기 비결', value: '단짠 일상', note: '귀여움 속에 담긴 현실 공감'},
];

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'chiikawa',
    name: '치이카와',
    japaneseName: 'ちいかわ',
    subtitle: '작고 여리지만 마음을 다하는 주인공',
    quote: '“와... 아...!”',
    description:
      '겁이 많고 눈물도 많지만, 소중한 친구가 위험에 처하면 누구보다 먼저 용기를 냅니다. 경품 당첨으로 얻은 하얀 집에서 살며 제초 검정 5급 합격을 꿈꾸고 있습니다.',
    meta: ['성격 · 순수하고 다정함', '좋아하는 음식 · 멜론빵과 야쿠르트', '주무기 · 핑크 사스마타'],
    accentBg: 'bg-[#FFF3F6]',
    accentBorder: 'border-[#F5D2DC]',
    accentText: 'text-[#B5365B]',
    details: [
      {label: '생활 모습', value: '단어를 또렷하게 말하기보다 짧은 감탄사와 표정으로 마음을 표현합니다.'},
      {label: '소중한 물건', value: '곰돌이 포셰트와 하치와레가 선물해 준 파란 리본을 아낍니다.'},
      {label: '매력 포인트', value: '겁을 내면서도 결국 끝까지 해내는 묵묵한 성실함이 돋보입니다.'},
    ],
  },
  {
    id: 'hachiware',
    name: '하치와레',
    japaneseName: 'ハチワレ',
    subtitle: '긍정 에너지로 곁을 지켜주는 든든한 단짝',
    quote: '“어떻게든 될 거야~!”',
    description:
      '파란 가르마가 매력적인 고양이 같은 친구입니다. 동굴집에 살면서도 늘 밝은 태도를 잃지 않으며, 유창하게 말을 하고 맛있는 요리를 만들어 나누는 것을 좋아합니다.',
    meta: ['성격 · 긍정적이고 사교적임', '좋아하는 음식 · 차루메라 라면', '주무기 · 블루 사스마타'],
    accentBg: 'bg-[#F0F7FC]',
    accentBorder: 'border-[#CDE3F3]',
    accentText: 'text-[#256396]',
    details: [
      {label: '생활 모습', value: '토벌로 모은 돈으로 카메라를 사서 친구들과의 추억을 사진으로 남깁니다.'},
      {label: '소중한 물건', value: '큰맘 먹고 장만한 필름 카메라와 직접 끓여 먹는 라면 냄비입니다.'},
      {label: '매력 포인트', value: '치이카와가 긴장할 때마다 가장 먼저 마음을 헤아려 주는 따뜻한 말벗입니다.'},
    ],
  },
  {
    id: 'usagi',
    name: '우사기',
    japaneseName: 'うさぎ',
    subtitle: '자유분방하지만 결정적인 순간 가장 믿음직한 친구',
    quote: '“야하! 우라~!”',
    description:
      '어디로 튈지 모르는 활발한 에너지의 소유자입니다. 말 대신 유쾌한 괴성과 리듬감으로 소통하지만, 제초 검정 3급을 단번에 딸 만큼 실력과 센스가 뛰어납니다.',
    meta: ['성격 · 자유롭고 대담함', '좋아하는 음식 · 빵과 단 음식 전반', '주무기 · 양끝이 빛나는 토벌봉'],
    accentBg: 'bg-[#FFF9E8]',
    accentBorder: 'border-[#EFE0B4]',
    accentText: 'text-[#8F6510]',
    details: [
      {label: '생활 모습', value: '맛있는 간식을 귀신같이 찾아내며 언제나 맛깔나게 먹는 모습이 인상적입니다.'},
      {label: '소중한 물건', value: '자신만의 개성이 담긴 토벌봉과 때마다 바뀌는 독특한 소품들입니다.'},
      {label: '매력 포인트', value: '위기 상황에서 주저 없이 앞장서 친구들을 구해내는 든든한 해결사입니다.'},
    ],
  },
  {
    id: 'momonga',
    name: '모몽가',
    japaneseName: 'モモンガ',
    subtitle: '“귀엽다고 해줘!” 뻔뻔함이 귀여운 날다람쥐',
    quote: '“잘 보라고! 귀엽지?”',
    description:
      '큰 눈과 복슬복슬한 꼬리를 뽐내며 주변 사람들에게 끊임없이 귀여움을 어필합니다. 엉뚱하고 제멋대로인 행동이 잦지만 미워할 수 없는 매력을 지녔습니다.',
    meta: ['성격 · 당당하고 제멋대로임', '좋아하는 음식 · 복숭아와 주먹밥', '특기 · 귀여운 척 애교 부리기'],
    accentBg: 'bg-[#F6F3FA]',
    accentBorder: 'border-[#DFD6EC]',
    accentText: 'text-[#62488A]',
    details: [
      {label: '생활 모습', value: '노동 대가로 받은 맛있는 음식을 빼앗아 먹거나 뻔뻔하게 요구하곤 합니다.'},
      {label: '소중한 물건', value: '남들에게 사랑받기 위해 연습하는 화려한 표정과 복슬한 꼬리입니다.'},
      {label: '매력 포인트', value: '화려한 겉모습 뒤에 묘한 미스터리를 품고 있어 이야기를 더욱 흥미롭게 만듭니다.'},
    ],
  },
  {
    id: 'kurimanju',
    name: '쿠리만주',
    japaneseName: 'くりまんじゅう',
    subtitle: '작은 몸으로 어른의 여유를 즐기는 미식가 선배',
    quote: '“하아~!”',
    description:
      '밤만주처럼 둥글고 따스한 머리 모양을 한 친구입니다. 말을 거의 하지 않고 조용히 안주와 탄산음료를 즐기며, 후배들에게 간식을 건네주는 다정한 면모도 있습니다.',
    meta: ['성격 · 차분하고 미식가임', '좋아하는 음식 · 안주와 시원한 음료', '자격증 · 음주 자격증 보유'],
    accentBg: 'bg-[#F8F3EE]',
    accentBorder: 'border-[#E3D3C3]',
    accentText: 'text-[#7C4E2C]',
    details: [
      {label: '생활 모습', value: '아침부터 상쾌한 음료 한 모금을 마시며 깊은 감탄사 “하아~”를 내뱉습니다.'},
      {label: '소중한 물건', value: '맛있는 안주를 곁들여 마시는 작은 잔과 깔끔한 보온병입니다.'},
      {label: '매력 포인트', value: '말없이 건네는 간식 하나에도 따뜻한 배려가 묻어나는 어른스러운 친구입니다.'},
    ],
  },
];

export const WORLD_ITEMS: WorldItem[] = [
  {
    number: '01',
    title: '제초와 토벌로 꾸려가는 소박한 노동',
    summary:
      '치이카와 세계의 귀여운 친구들은 하늘에서 음식이 떨어지기만을 기다리지 않습니다. 풀을 뽑고(제초), 게시판의 의뢰를 받아 작은 괴물들을 물리치며(토벌) 보수를 모아 살아갑니다.',
    note: '노동 후 받는 작은 봉투의 보수로 맛있는 간식을 사 먹는 순간이 하루의 가장 큰 기쁨입니다.',
    span: 'wide',
  },
  {
    number: '02',
    title: '거대 푸딩과 라멘집의 행복',
    summary:
      '세상 곳곳에는 숲속에 솟아난 야쿠르트 나무, 숟가락으로 퍼먹는 거대한 커스터드 푸딩, 주문 규칙이 까다로운 라멘집 ‘로’ 같은 독특한 먹거리 문화가 펼쳐집니다.',
    note: '열심히 일한 뒤 친구와 나누어 먹는 따뜻한 라멘 한 그릇은 무엇과도 바꿀 수 없습니다.',
    span: 'narrow',
  },
  {
    number: '03',
    title: '조금씩 성장하는 자격증 도전',
    summary:
      '제초 검정 5급 시험에 떨어져 눈물을 흘리기도 하지만, 하치와레와 함께 참고서를 펼치고 밤늦게까지 공부하며 포기하지 않고 다시 도전합니다.',
    note: '작은 실패를 겪어도 다시 일어서는 모습은 많은 독자들에게 조용한 위로를 건넵니다.',
    span: 'narrow',
  },
  {
    number: '04',
    title: '두려움 앞에서도 놓지 않는 우정',
    summary:
      '때로는 커다란 키메라나 무서운 적이 나타나는 긴장감 넘치는 순간도 찾아옵니다. 그럼에도 서로의 이름을 부르며 손을 잡는 우정이 이 세계를 따뜻하게 지탱합니다.',
    note: '단순한 힐링을 넘어 ‘함께 버텨내는 다정함’이 치이카와가 오래 사랑받는 이유입니다.',
    span: 'wide',
  },
];

export const EPISODES: EpisodeItem[] = [
  {
    number: '01',
    title: '파자마 파티즈의 탄생과 첫 무대',
    tagLine: '보라색 파자마 · 함께 부른 노래',
    story:
      '파자마를 입고 모인 친구들이 즉석에서 부른 귀여운 노래가 축제의 무대까지 이어집니다. 서툴지만 진심을 다해 춤추고 노래하는 모습이 큰 사랑을 받은 에피소드입니다.',
    highlightQuote: '“우~ 와~ 파자마 입고 신나게 춤추자!”',
  },
  {
    number: '02',
    title: '하치와레와 함께한 제초 검정 5급 도전기',
    tagLine: '도서관 공부 · 합격의 기쁨',
    story:
      '혼자 시험에서 떨어진 뒤 풀이 죽었던 치이카와를 위해 하치와레가 함께 공부하며 응원합니다. 마침내 합격 번호를 확인하고 함께 기뻐하는 장면이 깊은 감동을 줍니다.',
    highlightQuote: '“우리가 같이 땄어! 정말 다행이다!”',
  },
  {
    number: '03',
    title: '긴장 가득했던 라멘집 ‘로’ 첫 방문',
    tagLine: '주문 연습 · 마늘 많이요',
    story:
      '특유의 주문 방식 때문에 들어가기 망설였던 인기 라멘집에 용기를 내어 방문합니다. 떨리는 목소리로 주문을 마치고 땀을 뻘뻘 흘리며 먹던 첫 한 그릇의 기억을 담고 있습니다.',
    highlightQuote: '“마, 마늘... 조금만 넣어주세요!”',
  },
];

export const CHEER_CARDS: CheerCard[] = [
  {
    id: 'work-1',
    mood: 'working',
    moodLabel: '열심히 일하는 중',
    characterId: 'hachiware',
    characterName: '하치와레',
    quote: '“오늘도 제초하느라 정말 고생 많았어! 어떻게든 다 잘 풀릴 거야!”',
    message: '잠깐 기지개를 켜고 시원한 물 한 모금 마신 뒤 다시 천천히 이어가 보세요.',
    recommendedSnack: '차가운 야쿠르트 한 병',
  },
  {
    id: 'work-2',
    mood: 'working',
    moodLabel: '열심히 일하는 중',
    characterId: 'chiikawa',
    characterName: '치이카와',
    quote: '“와... 대단해... 조금씩이라도 앞으로 나아가고 있어!”',
    message: '눈에 띄지 않아도 작은 발걸음이 모여 꼭 멋진 결과로 이어질 거예요.',
    recommendedSnack: '달콤한 멜론빵 반쪽',
  },
  {
    id: 'tired-1',
    mood: 'tired',
    moodLabel: '조금 지쳤어요',
    characterId: 'chiikawa',
    characterName: '치이카와',
    quote: '“에헤... 오늘은 너무 무리하지 말고 따뜻한 이불 속으로 들어가자.”',
    message: '눈물이 날 만큼 힘든 날엔 그냥 푹 쉬는 것도 아주 훌륭한 하루의 마무리예요.',
    recommendedSnack: '따뜻한 우유와 카스텔라',
  },
  {
    id: 'tired-2',
    mood: 'tired',
    moodLabel: '조금 지쳤어요',
    characterId: 'kurimanju',
    characterName: '쿠리만주',
    quote: '“하아~ 하루 일과 끝. 이제 맛있는 걸 챙겨 먹을 시간이야.”',
    message: '바빴던 마음을 잠시 내려놓고 오늘 나를 위한 작은 보상을 선물해 주세요.',
    recommendedSnack: '톡 쏘는 크림소다 한 잔',
  },
  {
    id: 'sweet-1',
    mood: 'sweet',
    moodLabel: '달콤한 게 필요해',
    characterId: 'usagi',
    characterName: '우사기',
    quote: '“야하! 맛있는 걸 먹을 때가 세상에서 제일 행복한 순간이야!”',
    message: '고민은 잠깐 접어두고 입안 가득 퍼지는 부드러운 달콤함을 즐겨 보세요.',
    recommendedSnack: '탱글탱글한 거대 커스터드 푸딩',
  },
  {
    id: 'sweet-2',
    mood: 'sweet',
    moodLabel: '달콤한 게 필요해',
    characterId: 'momonga',
    characterName: '모몽가',
    quote: '“이 복숭아 정말 맛있지? 내 귀여운 모습 보면서 한 입 먹어!”',
    message: '기분 전환이 필요할 땐 달콤하고 상큼한 간식 하나가 큰 힘이 되어 줍니다.',
    recommendedSnack: '잘 익은 백도 복숭아',
  },
  {
    id: 'study-1',
    mood: 'study',
    moodLabel: '시험·공부 파이팅',
    characterId: 'hachiware',
    characterName: '하치와레',
    quote: '“참고서 한 장만 더 보고 같이 쉬자! 분명 좋은 소식이 기다릴 거야!”',
    message: '어제보다 한 문제라도 더 알게 된 오늘의 당신을 진심으로 응원합니다.',
    recommendedSnack: '바삭한 쿠키와 따뜻한 보리차',
  },
  {
    id: 'study-2',
    mood: 'study',
    moodLabel: '시험·공부 파이팅',
    characterId: 'usagi',
    characterName: '우사기',
    quote: '“우라! 걱정 말고 너만의 페이스로 밀고 나가면 단번에 합격이야!”',
    message: '스스로를 믿고 차분하게 풀어나가면 생각보다 훨씬 수월하게 해낼 수 있어요.',
    recommendedSnack: '갓 구운 버터 롤빵',
  },
];
