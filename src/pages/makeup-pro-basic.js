import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';
import '../styles/course.css';

function renderCourseBasic() {
  return `
    <section class="section course-hero">
      <div class="container">
        <a href="/" class="back-link">← Назад</a>
        <div class="course-hero-content">
          <span class="badge badge-master">11 занять</span>
          <h1 class="course-title">Візажист PRO BASIC</h1>
          <p class="course-subtitle">Професійний макіяж від 0 до експертного рівня</p>
          <p class="price-card">15 000 грн</p>
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
        <p class="course-text">Якщо ви хочете отримати повноцінну професію, цей курс створений саме для цього. Програма з 11 занять — це глибоке та продумане навчання, де ми крок за кроком формуємо сильну базу майстра. Ви навчитесь не копіювати макіяжі, а розуміти обличчя, техніки та продукти, щоб впевнено працювати з будь-яким клієнтом.</p>
        <p class="course-text">Курс підходить навіть тим, хто ніколи не тримав пензлі в руках. Ми починаємо з фундаменту і поступово ускладнюємо техніки, щоб до кінця навчання ви могли виконувати популярні комерційні макіяжі та працювати самостійно.</p>

        <h3 class="course-subtitle-sm">У програмі:</h3>
        <ul class="list-course course-features">
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Сильна теоретична база — колористика, матеріаловедення, розбір пензлів
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Багато практики на моделях — 10 відпрацювань
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Розбір реальних клієнтських запитів та колористичних задач
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Сучасні техніки макіяжу
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Робота зі світлом та фотографією
          </li>
          <li class="item-course">
            <svg class="icon" width="18" height="18"><use href="/icons.svg#icon-check"></use></svg>
            Поради щодо просування та створення профілю майстра в Instagram
          </li>
        </ul>

        <div class="course-info-block">
          <h3 class="course-subtitle-sm">Комфортне навчання</h3>
          <p class="course-text">На курсі надається вся професійна косметика, пензлі та матеріали. Я також допоможу правильно зібрати ваш перший робочий кейс, щоб ви не витрачали гроші на зайві продукти.</p>
        </div>

        <div class="course-info-block">
          <h3 class="course-subtitle-sm">Підтримка під час навчання</h3>
          <p class="course-text">Моя задача — щоб у вас дійсно вийшло. Саме тому багато учениць починають брати клієнтів одразу після навчання та не бояться їх.</p>
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
              <p class="program-text">Робота з клієнтом, санітарія, інструменти, типи обличчя та шкіри, колористика, техніки макіяжу для різних форм очей. Практика на моделі.</p>
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
              <h3 class="program-title">Заняття 5 — Весільний макіяж</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 6 — Віковий макіяж та робота з віковою шкірою</h3>
            </div>
          </li>
          <li class="item-program">
            <span class="program-num">07</span>
            <div class="program-content">
              <h3 class="program-title">Заняття 7 — Темний смокі на кремовій основі</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 8 — Голівудський макіяж з червоними губами</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 9 — Макіяж з акцентом на нижнє повіко</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 10 — Розтушована стрілка та ідеальні інста губи</h3>
            </div>
          </li>
          <li class="item-program">
            <div class="program-content">
              <h3 class="program-title">Заняття 11 — Екзамен</h3>
              <p class="program-text">Самостійне виконання макіяжу на моделі за білетом.</p>
            </div>
          </li>
        </ul>
        <p class="course-text" style="margin-top: var(--space-md)">Таймінг занять 2–11: 2–3 години індивідуально. Тривалість курсу — 1–1,5 місяця (2–3 рази на тиждень).</p>
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
          <p class="contact-text">Всі матеріали надаються. Тривалість — 1–1,5 місяця.</p>
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
document.querySelector('#course-detail').innerHTML = renderCourseBasic();
