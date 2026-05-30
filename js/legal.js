/* ═══════════════════════════════════════════════════════════════
   AVOTUNE STUDIO — legal.js
   Shared across privacy-policy, disclaimer, terms pages
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── READING PROGRESS ───────────────────────────────────────── */
  const bar = document.getElementById('read-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? Math.min((window.scrollY / total) * 100, 100) + '%' : '0';
    }, { passive: true });
  }

  /* ── TOC ACTIVE HIGHLIGHT ───────────────────────────────────── */
  const sections = document.querySelectorAll('.legal-section[id]');
  const tocLinks  = document.querySelectorAll('.legal-toc-item');

  if (sections.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          tocLinks.forEach(li => {
            const a = li.querySelector('a');
            li.classList.toggle('active', a && a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-15% 0% -70% 0%' });
    sections.forEach(s => obs.observe(s));
  }

  /* ── SMOOTH ANCHOR SCROLL (accounts for fixed nav) ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── LAST UPDATED DATE ──────────────────────────────────────── */
  const dateEl = document.getElementById('last-updated');
  if (dateEl) dateEl.textContent = 'May 30, 2025';

});
