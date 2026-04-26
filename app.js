/* =========================================================
   Mundial Marayui — app.js
   ========================================================= */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Countdown ---------- */
  const initCountdown = () => {
    const grid = document.querySelector('[data-countdown]');
    const liveMsg = document.querySelector('[data-countdown-live]');
    if (!grid) return;

    const slots = {
      days: grid.querySelector('[data-cd="days"]'),
      hours: grid.querySelector('[data-cd="hours"]'),
      minutes: grid.querySelector('[data-cd="minutes"]'),
      seconds: grid.querySelector('[data-cd="seconds"]'),
    };

    // Target: jueves 25 de junio de 2026, 18:00 ART (UTC-3)
    const target = new Date('2026-06-25T18:00:00-03:00').getTime();

    const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        if (liveMsg) liveMsg.hidden = false;
        grid.style.display = 'none';
        return false;
      }

      const days = Math.floor(diff / 86_400_000);
      const hours = Math.floor((diff % 86_400_000) / 3_600_000);
      const minutes = Math.floor((diff % 3_600_000) / 60_000);
      const seconds = Math.floor((diff % 60_000) / 1000);

      const update = (slot, value) => {
        if (!slot) return;
        const next = pad(value);
        if (slot.textContent !== next) {
          slot.textContent = next;
          if (!prefersReduced) {
            slot.classList.remove('pulse');
            void slot.offsetWidth;
            slot.classList.add('pulse');
          }
        }
      };

      update(slots.days, days);
      update(slots.hours, hours);
      update(slots.minutes, minutes);
      update(slots.seconds, seconds);
      return true;
    };

    if (tick()) {
      setInterval(tick, 1000);
    }
  };

  /* ---------- Reveal-on-scroll (IntersectionObserver) ---------- */
  const initReveal = () => {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay
              ? parseInt(entry.target.dataset.revealDelay, 10)
              : i * 70;
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((el) => observer.observe(el));
  };

  /* ---------- Fixture toggle ---------- */
  const initFixtureToggle = () => {
    const board = document.querySelector('[data-fixture]');
    const btn = document.querySelector('[data-fixture-toggle]');
    if (!board || !btn) return;

    const labelEl = btn.querySelector('[data-toggle-text]');
    const labels = {
      collapsed: 'Ver todos los partidos',
      expanded: 'Ocultar',
    };

    btn.addEventListener('click', () => {
      const expanded = board.classList.toggle('is-expanded');
      btn.setAttribute('aria-expanded', String(expanded));
      if (labelEl) labelEl.textContent = expanded ? labels.expanded : labels.collapsed;
    });
  };

  /* ---------- WhatsApp CTA fallback ---------- */
  const initWhatsAppCta = () => {
    const link = document.querySelector('[data-whatsapp-link]');
    const fallback = document.querySelector('[data-cta-fallback]');
    if (!link) return;

    const url = link.getAttribute('data-whatsapp-group-link') || '';
    const isPlaceholder = !url || url.startsWith('REEMPLAZAR_');

    if (isPlaceholder) {
      link.setAttribute('aria-disabled', 'true');
      link.removeAttribute('href');
      link.addEventListener('click', (e) => e.preventDefault());
      if (fallback) fallback.hidden = false;
    } else {
      link.setAttribute('href', url);
    }
  };

  /* ---------- Confirmados empty state ---------- */
  // The CSS handles it via :empty selector. No JS needed.

  /* ---------- Init on DOM ready ---------- */
  const init = () => {
    initCountdown();
    initReveal();
    initFixtureToggle();
    initWhatsAppCta();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
