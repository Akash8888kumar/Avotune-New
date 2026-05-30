/* ═══════════════════════════════════════════════════════════════
   AVOTUNE STUDIO — components.js
   Injects the SAME header, footer, and floating player
   into EVERY page automatically.

   HOW IT WORKS:
   Each HTML page has:
     <div id="av-header-inject"></div>   ← header goes here
     <div id="av-footer-inject"></div>   ← footer goes here
     <div id="av-player-inject"></div>   ← floating player goes here

   This script fills them all. To update the nav or footer
   across the ENTIRE site, edit ONLY this file.
   ═══════════════════════════════════════════════════════════════ */

(function () {

  /* ── ACTIVE PAGE DETECTION ─────────────────────────────────── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  function isActive(href) {
    if (href === 'index.html' && (path === '' || path === 'index.html')) return 'active';
    if (href !== 'index.html' && path === href) return 'active';
    return '';
  }

  /* ── ENROLL BUTTON: point to index enroll on all non-home pages */
  const enrollHref = path === 'index.html' || path === '' ? '#enroll' : 'index.html#enroll';

  /* ═══════════════════════════════════════════════════════════════
     HEADER HTML
     Logo: <img src="assets/logo.png"> — replace logo.png with
     your actual file. The onerror fallback shows the text logo
     so the site never breaks even without the image file.
  ═══════════════════════════════════════════════════════════════ */
  const headerHTML = `
<div class="cursor-dot"></div>
<div class="cursor-ring"></div>
<canvas id="av-particles"></canvas>
<div class="nav-overlay"></div>

<!-- Reading progress bar (used by blog-detail, legal pages) -->
<div id="read-progress" style="position:fixed;top:0;left:0;height:3px;background:var(--grad-main);z-index:1001;width:0;transition:width .15s linear;pointer-events:none;"></div>

<nav id="av-nav">
  <div class="container">
    <div class="d-flex align-items-center justify-content-between">

      <!-- ═══ LOGO ═══════════════════════════════════════════════
           Replace  images/logo.png  with your actual logo file.
           Recommended size: height 52px, transparent background.
           The onerror shows the text fallback if image is missing.
      ════════════════════════════════════════════════════════════ -->
      <a href="index.html" class="nav-logo text-decoration-none d-flex align-items-center gap-2">
        <img
          src="images/logo.png"
          alt="Avotune Studio Logo"
          class="nav-logo-img"
          onerror="this.style.display='none'; document.getElementById('nav-logo-fallback').style.display='block';"
        />
        <span id="nav-logo-fallback" style="display:none;">
          <span class="nav-logo-text">Avotune</span>
          <span class="nav-logo-sub">Studio</span>
        </span>
      </a>

      <!-- Desktop navigation -->
      <div class="nav-links-wrap d-flex align-items-center gap-3">
        <ul class="nav-links">
          <li><a href="index.html"   class="${isActive('index.html')}">Home</a></li>
          <li><a href="about.html"   class="${isActive('about.html')}">About</a></li>
          <li><a href="courses.html" class="${isActive('courses.html')}">Courses</a></li>
          <li><a href="blog.html"    class="${isActive('blog.html')} ${isActive('blog-detail.html')}">Blog</a></li>
          <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
        </ul>
        <a href="${enrollHref}" class="btn-av btn-primary ms-2">
          <i class="fas fa-graduation-cap me-1"></i>Enroll Now
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button class="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>`;

  /* ═══════════════════════════════════════════════════════════════
     FOOTER HTML
     Logo image same as header — replace assets/logo.png
  ═══════════════════════════════════════════════════════════════ */
  const footerHTML = `
<footer id="av-footer">
  <div class="container">
    <div class="row g-5">

      <!-- Brand column -->
      <div class="col-lg-4">
        <a href="index.html" class="text-decoration-none d-inline-block mb-3">
          <img
            src="images/logo.png"
            alt="Avotune Studio Logo"
            class="footer-logo-img"
            onerror="this.style.display='none'; document.getElementById('footer-logo-fallback').style.display='block';"
          />
          <span id="footer-logo-fallback" style="display:none;">
            <div class="footer-logo-text">Avotune</div>
            <div class="footer-sub">Studio</div>
          </span>
        </a>
        <p class="footer-desc">
          Delhi's premier music production studio and training institute —
          building the next generation of Indian music producers.
        </p>
        <div class="social-row">
          <a href="https://instagram.com"   target="_blank" rel="noopener" class="soc-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com"     target="_blank" rel="noopener" class="soc-btn" title="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://spotify.com"     target="_blank" rel="noopener" class="soc-btn" title="Spotify"><i class="fab fa-spotify"></i></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener" class="soc-btn" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="https://facebook.com"    target="_blank" rel="noopener" class="soc-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>

      <!-- Navigate -->
      <div class="col-6 col-sm-3 col-lg-2">
        <div class="footer-col-title">Navigate</div>
        <a href="index.html"   class="footer-link">Home</a>
        <a href="about.html"   class="footer-link">About Us</a>
        <a href="courses.html" class="footer-link">Courses</a>
        <a href="blog.html"    class="footer-link">Blog</a>
        <a href="contact.html" class="footer-link">Contact Us</a>
      </div>

      <!-- Courses -->
      <div class="col-6 col-sm-3 col-lg-2">
        <div class="footer-col-title">Courses</div>
        <a href="courses.html" class="footer-link">MMPM Flagship</a>
        <a href="courses.html" class="footer-link">Mixing Bootcamp</a>
        <a href="courses.html" class="footer-link">Sound Design</a>
        <a href="courses.html" class="footer-link">DJ Masterclass</a>
        <a href="courses.html" class="footer-link">1-on-1 Mentorship</a>
      </div>

      <!-- Legal -->
      <div class="col-6 col-sm-3 col-lg-2">
        <div class="footer-col-title">Legal</div>
        <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
        <a href="disclaimer.html"     class="footer-link">Disclaimer</a>
        <a href="terms.html"          class="footer-link">Terms of Use</a>
      </div>

      <!-- Contact info -->
      <div class="col-lg-2 col-sm-3">
        <div class="footer-col-title">Contact</div>
        <p class="footer-contact">
          <i class="fas fa-map-marker-alt"></i>42, Music Lane,<br>Lajpat Nagar,<br>New Delhi – 110024<br>
          <i class="fas fa-envelope"></i><a href="mailto:hello@avotunesudio.in" style="color:inherit;text-decoration:none;">hello@avotunesudio.in</a><br>
          <i class="fas fa-phone"></i><a href="tel:+919876543210" style="color:inherit;text-decoration:none;">+91 98765 43210</a><br>
          <i class="fas fa-clock"></i>Mon–Sat · 10 AM – 8 PM
        </p>
      </div>

    </div>

    <!-- Footer bottom bar -->
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Avotune Studio. All rights reserved.</span>
      <span class="footer-copy" style="display:flex;gap:18px;flex-wrap:wrap;align-items:center;">
        <a href="privacy-policy.html" class="footer-legal-link">Privacy Policy</a>
        <a href="disclaimer.html"     class="footer-legal-link">Disclaimer</a>
        <a href="terms.html"          class="footer-legal-link">Terms of Use</a>
      </span>
    </div>
  </div>
</footer>`;

  /* ═══════════════════════════════════════════════════════════════
     FLOATING MUSIC PLAYER HTML
  ═══════════════════════════════════════════════════════════════ */
  const playerHTML = `
<div id="float-player">
  <div class="fp-vinyl" id="fp-vinyl"><i class="fas fa-music"></i></div>
  <div class="fp-meta">
    <div class="fp-song"   id="fp-title">Avotune Vibe Mix</div>
    <div class="fp-artist" id="fp-artist">Avotune Beats</div> 
  </div>
  <div class="fp-progress-wrap">
    <div class="fp-progress"><div class="fp-bar" id="fp-bar"></div></div>
    <div class="fp-time"   id="fp-time">0:00 / 3:00</div>
  </div>
  <div class="fp-controls">
    <button class="fp-btn"      id="fp-prev" title="Previous"><i class="fas fa-backward-step"></i></button>
    <button class="fp-play-btn" id="fp-play" title="Play / Pause"><i class="fas fa-play" id="fp-icon"></i></button>
    <button class="fp-btn"      id="fp-next" title="Next"><i class="fas fa-forward-step"></i></button>
  </div>
</div>`;

  /* ═══════════════════════════════════════════════════════════════
     INJECT INTO PAGE
  ═══════════════════════════════════════════════════════════════ */
  const headerSlot = document.getElementById('av-header-inject');
  const footerSlot = document.getElementById('av-footer-inject');
  const playerSlot = document.getElementById('av-player-inject');

  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.innerHTML = footerHTML;
  if (playerSlot) playerSlot.innerHTML = playerHTML;

})();
