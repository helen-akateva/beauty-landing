import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';
import '../styles/course.css';

function renderBrowMaster() {
  return `
    <section class="section course-hero">
      <div class="container">
        <a href="/" class="back-link">← Назад</a>
        <div class="course-hero-content">
          <span class="badge badge-master">2 дні</span>
          <h1 class="course-title">Brow Master</h1>
          <p class="course-subtitle">Базовий курс бровиста з нуля</p>
          <p class="price-card">7 000 грн</p>
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
        <h3 class="course-subtitle-sm">Для кого:</h3>
        <p class="course-text">Для дівчат без досвіду або з мінімальною практикою, які хочуть впевнено почати працювати з бровами та робити брови професійно.</p>
        <p class="course-text">Базовий курс бровиста — це навчання професії з нуля з акцентом на техніку, безпеку та прогнозований результат. Ви опануєте архітектуру брів, алгоритм побудови форми з урахуванням анатомії обличчя, колористику та сучасні техніки фарбування.</p>
        <p class="course-text">Після навчання ви матимете чіткий алгоритм роботи, відпрацьовану практику та готовність приймати перших клієнтів.</p>
      </div>
    </section>

    <section class="section course-program">
      <div class="container">
        <h2 class="section-title">Програма курсу</h2>
        <ul class="list-program">
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Вступ у професію</h3>
              <p class="program-text">Роль бровиста в б'юті-сфері, етика майстра та робота з клієнтом, санітарія, гігієна, безпека.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Анатомія та будова брів</h3>
              <p class="program-text">Волос, шкіра, напрям росту, відмінності типів брів, протипокази до процедур.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Форма брів</h3>
              <p class="program-text">Аналіз обличчя, побудова форми без перевантаження схемами, як потрапляти в запит клієнта а не в тренд.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Корекція брів</h3>
              <p class="program-text">Пінцет як основний інструмент, техніка без болю та травм, часті помилки новачків.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Фарбування брів</h3>
              <p class="program-text">Огляд барвників, підбір відтінку під клієнта, робота з оксидом, чіткий та м'який результат.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Укладка та завершення образу</h3>
              <p class="program-text">Фіксація, косметика для брів, як зробити доглянутий фінал.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Практика</h3>
              <p class="program-text">Відпрацювання на моделях, розбір робіт, корекція помилок.</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Фото та відео робіт</h3>
              <p class="program-text">Як фотографувати брови, світло, ракурси, контент для Instagram.</p>
            </div>
          </li>
        </ul>
        <p class="course-text" style="margin-top: var(--space-md)">Тривалість: 2 дні з 10:00 до 17:00–17:30. За два дні відпрацьовуємо 5 моделей. Всі матеріали надаються.</p>
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
            Чіткий алгоритм роботи з бровами
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Відпрацьовану практику на 5 моделях
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Готовність приймати перших клієнтів
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
document.querySelector('#course-detail').innerHTML = renderBrowMaster();
