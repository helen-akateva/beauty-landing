// src/sections/header/header.js

export function renderHeader() {
  return `
    <div class="container header-container">
      <nav class="page-nav">
        <a href="./index.html" class="logo logo-nav">Оксана Лихацька</a>

        <ul class="list-nav">
          <li class="item-nav">
            <a href="#services" class="link-nav">Послуги</a>
          </li>
          <li class="item-nav">
            <a href="#about" class="link-nav">Про мене</a>
          </li>
          <li class="item-nav">
            <a href="" class="link-nav">Навчання для себе</a>
          </li>
          <li class="item-nav">
            <a href="" class="link-nav">Стати майстром</a>
          </li>
          <li class="item-nav">
            <a href="" class="link-nav">Майстрам</a>
          </li>
          <li class="item-nav">
            <a href="" class="link-nav">Контакти</a>
          </li>
        </ul>

        <button class="mobile-menu-btn" type="button" aria-label="Open mobile menu">
          <svg class="mobile-menu-icon" width="24" height="24">
            <use href="icons.svg#icon-menu"></use>
          </svg>
        </button>
        <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
            <button class="mobile-menu-close" aria-label="Закрити меню">
            <svg class="mobile-menu-icon" width="24" height="24">
            <use href="icons.svg#icon-x-close"></use>
            </svg>
            </button>
    <nav class="nav-mb">
        <a href="./index.html" class="logo logo-nav-mb">Оксана Лихацька</a>

        <ul class="list-nav-mb">
          <li class="item-nav-mb">
            <a href="#services" class="link-nav-mb">Послуги</a>
          </li>
          <li class="item-nav-mb">
            <a href="#about" class="link-nav-mb">Про мене</a>
          </li>
          <li class="item-nav-mb">
            <a href="" class="link-nav-mb">Навчання для себе</a>
          </li>
          <li class="item-nav-mb">
            <a href="" class="link-nav-mb">Стати майстром</a>
          </li>
          <li class="item-nav-mb">
            <a href="" class="link-nav-mb">Майстрам</a>
          </li>
          <li class="item-nav-mb">
            <a href="" class="link-nav-mb">Контакти</a>
          </li>
        </ul>
        </nav>
        </div>
    </nav>
    </div>
  `;
}

export function initHeader() {
  const btn = document.querySelector('.mobile-menu-btn');

  btn.addEventListener('click', () => {
    // логіка мобільного меню
  });
}
