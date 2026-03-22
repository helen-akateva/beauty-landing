const navLinks = [
  { href: '/#services', label: 'Послуги' },
  { href: '/#about', label: 'Про мене' },
  { href: '/#gallery', label: 'Галерея' },
  { href: '/#learning', label: 'Навчання для себе' },
  { href: '/#master', label: 'Стати майстром' },
  { href: '/#pro', label: 'Майстрам' },
  { href: '/#reviews', label: 'Відгуки' },
];

export function renderFooter() {
  const links = navLinks
    .map(
      ({ href, label }) => `
<li><a class="footer-nav-link" href="${href}">${label}</a></li>
`
    )
    .join('');
  return `
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <a class="footer-logo" href="/" aria-label="Оксана Лихацька — на головну"> Оксана Лихацька </a>

      <nav class="footer-nav" aria-label="Навігація у футері">
        <ul class="footer-nav-list">
          ${links}
        </ul>
      </nav>

      <a
        class="footer-social"
        href="https://www.instagram.com/oksana_lykhatska?igsh=Zng4ZTd5ZzhvZ3Zo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ми в Instagram"
      >
        <svg
          class="footer-social-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.8" />
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
        <span class="footer-social-label">Instagram</span>
      </a>
    </div>

    <div class="footer-bottom">
      <small class="footer-copy"><span>&#169;</span>2026 Оксана Лихацька. Усі права захищені.</small>
    </div>
  </div>
</footer>
`;
}
