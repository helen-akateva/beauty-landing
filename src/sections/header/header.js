export function renderHeader() {
  return `
    <div class="container header-container">
      <nav class="page-nav">
        <a href="./index.html" class="logo logo-nav">Оксана Лихацька</a>

        <ul class="list-nav">
          <li class="item-nav">
            <a href="/#services" class="link-nav">Послуги</a>
          </li>
          <li class="item-nav">
            <a href="/#about" class="link-nav">Про мене</a>
          </li>
          <li>
             <a href="/#gallery" class="link-nav">Галерея</a>
          </li>
          <li class="item-nav">
            <a href="/#learning" class="link-nav">Навчання для себе</a>
          </li>
          <li class="item-nav">
            <a href="/#master" class="link-nav">Стати майстром</a>
          </li>
          <li class="item-nav">
            <a href="/#pro" class="link-nav">Майстрам</a>
          </li>
          <li class="item-nav">
            <a href="/#reviews" class="link-nav">Відгуки</a>
          </li>
        </ul>

        <button class="mobile-menu-btn" type="button" aria-label="Open mobile menu">
          <svg class="mobile-menu-icon" width="24" height="24">
            <use href="icons.svg#icon-menu"></use>
          </svg>
        </button>
      </nav>

      <div class="mobile-menu" aria-hidden="true">
        <button class="mobile-menu-close" aria-label="Закрити меню">
          <svg class="mobile-menu-icon" width="18" height="18">
            <use href="icons.svg#icon-x-close"></use>
          </svg>
        </button>
        <nav class="nav-mb">
         <a href="./index.html" class="logo logo-nav-mb">Оксана Лихацька</a>
          <ul class="list-navmb">
            <li class="item-navmb">
              <a href="/#services" class="link-navmb">Послуги</a>
            </li>
            <li class="item-navmb">
              <a href="/#about" class="link-navmb">Про мене</a>
            </li>
             <li>
             <a href="/#gallery" class="link-nav">Галерея</a>
            </li>
            <li class="item-navmb">
              <a href="/#learning" class="link-navmb">Навчання для себе</a>
            </li>
            <li class="item-navmb">
              <a href="/#master" class="link-navmb">Стати майстром</a>
            </li>
            <li class="item-navmb">
              <a href="/#pro" class="link-navmb">Майстрам</a>
            </li>
            <li class="item-navmb">
              <a href="/#reviews" class="link-navmb">Відгуки</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `;
}

export function initHeader() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navList = document.querySelector('.list-navmb');
  const openMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.mobile-menu-close');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    const isOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  };

  navList?.addEventListener('click', event => {
    if (event.target.closest('a[href^="#"]')) {
      toggleMenu();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
}
