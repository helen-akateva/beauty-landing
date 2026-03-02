import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';
import '../styles/course.css';

function renderLamimaker() {
  return `
    <section class="section course-hero">
      <div class="container">
        <a href="/" class="back-link">← Назад</a>
        <div class="course-hero-content">
          <span class="badge badge-master">1 день</span>
          <h1 class="course-title">Lamimaker з 0</h1>
          <p class="course-subtitle">Базовий курс ламінування вій</p>
          <p class="price-card">5 000 грн</p>
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
        <p class="course-text">Базовий курс ламінування вій — це професійне навчання сучасній техніці з глибоким розумінням хімічних процесів і безпеки процедури. Ви опануєте анатомію росту вій, підбір валиків, роботу зі складами, контроль завитка та алгоритм безпечного фарбування.</p>
        <p class="course-text">Великий акцент — на практиці та відпрацюванні чистої техніки без перевитрати матеріалів. Після курсу ви матимете чіткий протокол роботи, впевненість у результаті та готовність одразу приймати клієнтів.</p>
      </div>
    </section>

    <section class="section course-program">
      <div class="container">
        <h2 class="section-title">Програма курсу</h2>
        <ul class="list-program">
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Блок 1 — Теорія</h3>
              <p class="program-text">Вступ у професію, анатомія та фізіологія вій, матеріали та інструменти, алгоритм процедури. Різниця між класичною та корейською технікою, показання та протипоказання, профілактика перепалу.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Блок 2 — Демонстрація</h3>
              <p class="program-text">Повна демонстрація процедури на моделі, пояснення кожного етапу, розбір типових помилок, як працювати швидко без перевитрати матеріалів.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Блок 3 — Практика (3–4 години)</h3>
              <p class="program-text">Самостійна робота на 2 моделях, контроль викладки, корекція рухів, відпрацювання фарбування, фото результату.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Блок 4 — Бонус-модуль</h3>
              <p class="program-text">Позиціонування послуги, як швидко набрати перших клієнтів.</p>
            </div>
          </li>
        </ul>
        <p class="course-text" style="margin-top: var(--space-md)">Всі матеріали надаються. З собою лише гарний настрій.</p>
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
            Чіткий протокол роботи
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Рекомендації по матеріалах
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Методичний конспект
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
          <p class="contact-text">Всі матеріали надаються. З собою лише гарний настрій.</p>
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
document.querySelector('#course-detail').innerHTML = renderLamimaker();
