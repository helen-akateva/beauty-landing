import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';
import '../styles/course.css';

function renderCourseExpress() {
  return `
    <section class="section course-hero">
      <div class="container">
        <a href="/" class="back-link">← Назад</a>
        <div class="course-hero-content">
          <span class="badge badge-master">7 занять</span>
          <h1 class="course-title">Візажист PRO EXPRESS</h1>
          <p class="course-subtitle">Концентрована програма для швидкого старту в професії</p>
          <p class="price-card">10 000 грн</p>
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
        <p class="course-text">Хочете опанувати професію візажиста швидше, без втрати якості навчання? Я створила скорочений формат курсу, який включає лише найважливіше для старту в професії.</p>
        <p class="course-text">Це концентрована програма, у якій немає зайвої інформації — тільки ті знання та навички, які реально використовують майстри у роботі з клієнтами.</p>
        <p class="course-text">Важливо: скорочений формат не впливає на якість навчання. Я просто зібрала весь досвід і подала його більш інтенсивно, щоб ви могли швидше почати працювати.</p>

        <h3 class="course-subtitle-sm">Що ви отримаєте на курсі:</h3>
        <ul class="list-course course-features">
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Повну базу професії візажиста з нуля — колористика, техніки макіяжу
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Розуміння форм обличчя та правильних корекцій
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Знання продуктів, пензлів і формування власного кейсу
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Найпопулярніші техніки макіяжу для клієнтів
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            6 практичних відпрацювань на моделях
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Навички створення красивих фото своїх робіт
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Розуміння як просувати себе та знаходити клієнтів
          </li>
        </ul>

        <div class="course-info-block">
          <h3 class="course-subtitle-sm">Чому цей курс дає результат</h3>
          <p class="course-text">Моя задача — не просто показати макіяж, а навчити вас працювати самостійно. Кожне заняття — це поєднання теорії, демонстрації та практики, тому знання одразу закріплюються.</p>
        </div>

        <div class="course-info-block">
          <h3 class="course-subtitle-sm">Приємний бонус</h3>
          <p class="course-text">На навчання не потрібно купувати косметику чи інструменти. Все необхідне надається під час курсу. Я також допоможу правильно зібрати власний робочий кейс без зайвих витрат.</p>
        </div>
      </div>
    </section>

    <section class="section course-program">
      <div class="container">
        <h2 class="section-title">Програма курсу</h2>
        <ul class="list-program">
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 1 — Теорія + базовий Nude макіяж</h3>
              <p class="program-text">Теоретична та практична база — базовий макіяж nude на моделі.</p>
              <p class="program-duration">Тривалість: 10:00 – 17:00 (перерва 30 хв)</p>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 2 — Nude + стрілки</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 3 — Світлий кремовий смокі</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 4 — Святковий сяючий макіяж</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 5 — Весільний макіяж + червоні губи</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 6 — Віковий макіяж</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 7 — Екзамен</h3>
              <p class="program-text">Самостійне виконання макіяжу на моделі за білетом.</p>
            </div>
          </li>
        </ul>
        <p class="course-text" style="margin-top: var(--space-md)">Таймінг занять 2–7: 2–3 години індивідуально. Тривалість курсу — 2–3 тижні (2–3 рази на тиждень).</p>
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
            Професійну техніку макіяжу
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Розуміння логіки форм і текстур
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Стабільний результат на фото і відео
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Впевненість у роботі з будь-яким клієнтом
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Сертифікат про базове навчання професії
          </li>
        </ul>

        <div class="course-contact">
          <p class="contact-text">Всі матеріали надаються. Тривалість — 2–3 тижні.</p>
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
document.querySelector('#course-detail').innerHTML = renderCourseExpress();
