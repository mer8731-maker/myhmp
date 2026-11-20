// 공연 상세 내용을 각 티켓에 채워 넣기
const tpl = document.getElementById('details-tpl');
document.querySelectorAll('.details').forEach((box) => {
  box.appendChild(tpl.content.cloneNode(true));
});

// "공연 상세" 버튼으로 펼치기 / 접기
document.querySelectorAll('.detail-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const ticket = btn.closest('.ticket-scroll');
    const box = ticket.querySelector('.details');
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    box.hidden = open;
    if (!open) ticket.scrollTo({ top: box.offsetTop - 120, behavior: 'smooth' });
  });
});

// 좌우로 넘길 때 아래 점 표시 바꾸기
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
slider.addEventListener('scroll', () => {
  const i = Math.round(slider.scrollLeft / slider.clientWidth);
  dots.forEach((d, n) => d.classList.toggle('active', n === i));
}, { passive: true });
