const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)] as T[];
// шапка с тенью и мобильная кнопка после героя
const hdr = document.querySelector<HTMLElement>('[data-hdr]');
const sticky = document.querySelector<HTMLElement>('[data-sticky]');
const hero = document.getElementById('top');
const onScroll = () => {
  hdr?.classList.toggle('is-scrolled', scrollY > 8);
  if (sticky && hero) sticky.classList.toggle('is-on', hero.getBoundingClientRect().bottom < 0);
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();
// лайтбокс
const lb = document.querySelector<HTMLDialogElement>('[data-lb]');
const holder = document.querySelector<HTMLElement>('[data-photos]');
if (lb && holder) {
  const list: { full: string; cap: string }[] = JSON.parse(holder.dataset.photos!);
  const img = lb.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const cap = lb.querySelector<HTMLElement>('[data-lb-cap]')!;
  const cnt = lb.querySelector<HTMLElement>('[data-lb-count]')!;
  let cur = 0, opener: HTMLElement | null = null;
  const show = (i: number) => {
    cur = (i + list.length) % list.length;
    img.src = list[cur].full; img.alt = list[cur].cap; cap.textContent = list[cur].cap;
    cnt.textContent = `${cur + 1} / ${list.length}`;
  };
  $$<HTMLButtonElement>('[data-gal]').forEach((b) => b.addEventListener('click', () => {
    opener = b; show(Number(b.dataset.gal)); lb.showModal(); document.documentElement.classList.add('no-scroll');
  }));
  $$<HTMLButtonElement>('[data-lb-step]', lb).forEach((b) => b.addEventListener('click', () => show(cur + Number(b.dataset.lbStep))));
  lb.querySelector('[data-lb-close]')!.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(cur + 1); if (e.key === 'ArrowLeft') show(cur - 1); });
  lb.addEventListener('close', () => { document.documentElement.classList.remove('no-scroll'); opener?.focus(); });
}
// подбор «Что нравится ребёнку?»
const pick = document.querySelector<HTMLElement>('[data-pick]');
if (pick) {
  const res = pick.querySelector<HTMLElement>('[data-pick-res]')!;
  const go = pick.querySelector<HTMLAnchorElement>('[data-pick-go]')!;
  const base = go.href;
  const update = () => {
    const on = $$<HTMLButtonElement>('[data-pick-b]', pick).filter((b) => b.getAttribute('aria-pressed') === 'true').map((b) => b.dataset.pickB);
    $$<HTMLLIElement>('[data-for]', pick).forEach((li) => { li.hidden = !on.includes(li.dataset.for); });
    res.hidden = on.length === 0;
    const chosen = $$<HTMLInputElement>('input[type=checkbox]', pick).filter((c) => c.checked && !c.closest<HTMLElement>('li')!.hidden).map((c) => c.value);
    go.href = chosen.length
      ? `https://wa.me/${base.split('wa.me/')[1].split('?')[0]}?text=${encodeURIComponent(`Здравствуйте! Пишу с сайта TD Club. Интересуют: ${chosen.join(', ')}. Подскажите, пожалуйста, возраст, расписание и стоимость.`)}`
      : base;
  };
  $$<HTMLButtonElement>('[data-pick-b]', pick).forEach((b) => b.addEventListener('click', () => {
    b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); update();
  }));
  pick.addEventListener('change', update);
}
