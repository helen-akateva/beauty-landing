import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';
import '../styles/course.css';

function renderBrowLashMaster() {
  return `
    <section class="section course-hero">
      <div class="container">
        <a href="/" class="back-link">← Назад</a>
        <div class="course-hero-content">
          <span class="badge badge-combo">Комбо • 3 дні</span>
          <h1 class="course-title">Basic Brow & Lash Master</h1>
          <p class="course-subtitle">Дві професії в одному навчанні — брови та ламінування вій</p>
          <div class="combo-price">
            <p class="price-card">10 000 грн</p>
            <p class="price-old">замість 12 000 грн</p>
          </div>
          <a
            href="https://www.instagram.com/oksana_lykhatska?igsh=Zng4ZTd5ZzhvZ3Zo"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn"
          >
            Записатися
          </a>
        </div>
      </div>
    </section>

    <section class="section course-about">
      <div class="container">
        <h2 class="section-title">Про курс</h2>
        <p class="course-text">Комплексний курс «Brow & Lash Master» — це повна підготовка майстра: брови та ламінування вій в одному навчанні. Ви опануєте архітектуру, колористику, сучасні техніки ламінування та навчитеся працювати комплексно, формуючи вищий середній чек.</p>
        <p class="course-text">Такий формат дозволяє одразу закривати більше запитів клієнтів і швидше вийти на стабільний дохід. Купуючи курс у комплексі, ви економите кошти та отримуєте дві затребувані професії за вигідною ціною.</p>

        <div class="course-info-block">
          <h3 class="course-subtitle-sm">Як побудоване навчання</h3>
          <p class="course-text">Програми обох курсів та відпрацювання повністю зберігаються. Ми економимо час на повторюваних блоках теорії та більше приділяємо уваги нюансам роботи.</p>
        </div>
      </div>
    </section>

    <section class="section course-program">
      <div class="container">
        <h2 class="section-title">Що входить у курс</h2>

        <h3 class="course-subtitle-sm">Brow Master — брови з нуля</h3>
        <ul class="list-program">
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Вступ у професію</h3>
              <p class="program-text">Роль бровиста, етика майстра, санітарія та безпека.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Анатомія, форма та корекція брів</h3>
              <p class="program-text">Будова брів, аналіз обличчя, побудова форми, техніка корекції без болю.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Фарбування та укладка</h3>
              <p class="program-text">Підбір відтінку, робота з оксидом, фіксація та доглянутий фінал.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Практика + фото для Instagram</h3>
              <p class="program-text">Відпрацювання на моделях, розбір робіт, як фотографувати брови.</p>
            </div>
          </li>
        </ul>

        <h3 class="course-subtitle-sm" style="margin-top: var(--space-lg)">Lamimaker з 0 — ламінування вій</h3>
        <ul class="list-program">
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Теорія — анатомія, матеріали, алгоритм</h3>
              <p class="program-text">Анатомія вій, підбір валиків, робота зі складами, контроль завитка, профілактика перепалу.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Демонстрація процедури</h3>
              <p class="program-text">Повна демонстрація на моделі з поясненням кожного етапу.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Практика (3–4 години)</h3>
              <p class="program-text">Самостійна робота на 2 моделях, корекція рухів, відпрацювання фарбування.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Бонус — як набрати клієнтів</h3>
              <p class="program-text">Позиціонування послуги, швидкий старт після курсу.</p>
            </div>
          </li>
        </ul>

        <p class="course-text" style="margin-top: var(--space-md)">Тривалість: 3 дні. Всі матеріали надаються.</p>
      </div>
    </section>

    <section class="section course-gallery">
      <div class="container">
        <h2 class="section-title">Роботи учнів</h2>
        <ul class="list-gallery">
          <li class="item-gallery"><div class="gallery-placeholder">Фото</div></li>
          <li class="item-gallery"><div class="gallery-placeholder">Фото</div></li>
          <li class="item-gallery"><div class="gallery-placeholder">Фото</div></li>
          <li class="item-gallery"><div class="gallery-placeholder">Фото</div></li>
        </ul>
      </div>
    </section>

    <section class="section course-cta">
      <div class="container">
        <h2 class="section-title">Після курсу ви отримаєте</h2>
        <ul class="list-course course-results">
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Дві затребувані професії — бровист та lamimaker
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Вищий середній чек завдяки комплексній роботі
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Готовність одразу приймати клієнтів
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Сертифікат про базове навчання
          </li>
        </ul>

        <div class="course-contact">
          <p class="contact-text">Всі матеріали надаються. Економія 2 000 грн порівняно з окремими курсами.</p>
          <a
            href="https://www.instagram.com/oksana_lykhatska?igsh=Zng4ZTd5ZzhvZ3Zo"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn"
          >
            Записатися в Instagram
          </a>
        </div>
      </div>
    </section>
  `;
}

document.querySelector('#header').innerHTML = renderHeader();
initHeader();
document.querySelector('#course-detail').innerHTML = renderBrowLashMaster();
