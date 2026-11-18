export const site = {
  name: 'TD Club',
  full: 'Talent Development Club',
  origin: 'https://td-club.a-a-studio.workers.dev',
  phoneDisplay: '+7 708 425 41 45',
  phoneE164: '+77084254145',
  wa: '77084254145',
  instagram: 'https://www.instagram.com/tdclub.astana/',
  igHandle: '@tdclub.astana',
  taplink: 'https://taplink.cc/tdclub',
  address: 'пр. Улы Дала, 31, НП 7, ЖК «Алпамыс»',
  addressMore: 'Блок А3, подъезд 9, со стороны Сайран Арены',
  city: 'Астана',
  metro: 'Станция «Улы Дала» в 750 м',
  gis: 'https://2gis.kz/astana/firm/70000001067676021',
  route: 'https://2gis.kz/astana/directions/to/71.398231,51.100401',
  geo: { lat: 51.100401, lng: 71.398231 },
  rating: { value: '5,0', num: 5, reviews: 110, marks: 157 },
  hours: [['Пн–Пт', '09:00–20:30'], ['Суббота', '10:00–14:00']] as const,
};
/** Цены из прайса 2ГИС от 14.11.2026. false — карточки без цен. */
export const showPrices = true;

export const waUrl = (what?: string) =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(`Здравствуйте! Пишу с сайта TD Club.${what ? ` Интересует: ${what}.` : ''} Подскажите, пожалуйста, возраст, расписание и стоимость.`)}`;

export type Item = { title: string; price?: string; note?: string };
export type Group = { id: string; title: string; photo: string; alt: string; items: Item[] };
export const groups: Group[] = [
  { id: 'school', title: 'Подготовка к школе', photo: 'classroom.webp', alt: 'Дети за партами в классе TD Club',
    items: [{ title: 'Подготовка к школе', price: '75 000 ₸' }, { title: 'Продлёнка', price: '50 000 ₸' }] },
  { id: 'art', title: 'Творчество', photo: 'boy-painting.webp', alt: 'Мальчик рисует красками на холсте',
    items: [{ title: 'ИЗО-студия', price: '28 000 ₸' }, { title: 'Современные танцы', price: '28 000 ₸' }] },
  { id: 'sport', title: 'Спорт и логика', photo: 'chess.webp', alt: 'Дети играют в шахматы',
    items: [{ title: 'Шахматы', price: '32 000 ₸' }, { title: 'Шахматы индивидуально', price: '6 000 ₸' }, { title: 'Киокушинкай карате', price: '21 000 ₸' }] },
  { id: 'lang', title: 'Языковые курсы', photo: 'globe-craft.webp', alt: 'Дети с педагогом делают глобус из папье-маше',
    items: [{ title: 'Английский язык', price: 'от 30 000 ₸' }] },
];
export const more = ['Хореография', 'Живопись', 'Репетиторство', 'Программирование'];
export const mini = { title: 'Мини-центр', price: '70 000 ₸', photos: [
  { src: 'mini-lego.webp', alt: 'Малыши собирают конструктор за столом' },
  { src: 'mini-hospital.webp', alt: 'Малыши играют в больницу' },
] };
export const wins = [
  { src: 'karate.webp', cap: 'Карате: награждение учеников' },
  { src: 'dance-masterkids.webp', cap: 'Танцевальная группа на сцене Master Kids' },
  { src: 'diplomas.webp', cap: 'Дипломы и сертификаты учеников' },
  { src: 'dance-stage.webp', cap: 'Танцевальный номер на сцене' },
  { src: 'holiday.webp', cap: 'Праздник в центре' },
];
export const gallery = [
  { src: 'girls-painting.webp', cap: 'Рисуем за мольбертами' },
  { src: 'mini-blocks.webp', cap: 'Строим из конструктора' },
  { src: 'classroom.webp', cap: 'Класс подготовки к школе' },
  { src: 'globe-craft.webp', cap: 'Делаем глобус из папье-маше' },
  { src: 'chess.webp', cap: 'Партия в шахматы' },
  { src: 'boy-painting.webp', cap: 'Своя картина на холсте' },
  { src: 'mini-hospital.webp', cap: 'Сюжетная игра «Больница»' },
  { src: 'mini-lego.webp', cap: 'Малыши в мини-центре' },
];
