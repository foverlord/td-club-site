const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)] as T[];
// шапка с тенью и мобильная кнопка после героя
const hdr = document.querySelector<HTMLElement>('[data-hdr]');
const sticky = document.querySelector<HTMLElement>('[data-sticky]');
const hero = document.getElementById('top');
const onScroll = () => {
  hdr?.classList.toggle('is-scrolled', scrollY > 8);
  const ct = document.getElementById('kontakty');
  if (sticky && hero && ct) sticky.classList.toggle('is-on', hero.getBoundingClientRect().bottom < 0 && ct.getBoundingClientRect().top > innerHeight);
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
