// src/sections/about/about.js

export function renderAbout() {
  return `
    <section class="section" id="about">
      <div class="container about">
        <div class="wrap-photo">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="image_about/master-ds.webp 1x, image_about/master-ds2x.webp 2x"
            />
            <source
              media="(min-width: 768px)"
              srcset="image_about/master-tb.webp 1x, image_about/master-tb2x.webp 2x"
            />
            <img
              class="img-about"
              src="image_about/master-mb.webp"
              srcset="image_about/master-mb.webp 1x, image_about/master-mb2x.webp 2x"
              alt="Оксана Лихацька — візажист"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="content-about">
          <p class="slogan-about">Візажист • Бровіст-ламімейкер • Викладач</p>
          <h2 class="title-about">Про мене</h2>
          <p class="text-bio">
            Мене звати <strong>Оксана Лихацька</strong> (можна Ксюша).
          </p>
          <p class="text-bio">
            У сферу beauty я прийшла через макіяж — і з часом поглибилась у напрямки брів та ламінування вій.
          </p>
          <p class="text-bio">
            Сьогодні я працюю як з клієнтами, так і з майстрами: проводжу базові курси та підвищення кваліфікації для тих, хто хоче зростати в професії.
          </p>
          <p class="text-bio">
            Для мене важливо не просто виконати процедуру, а підкреслити природну красу кожної дівчини — незалежно від віку та типу зовнішності.
          </p>
          <h3 class="subtitle">Чому мені довіряють</h3>
          <ul class="trust-list">
            <li class="trust-item">
              <svg class="icon" width="18" height="18">
                <use href="icons.svg#icon-check"></use>
              </svg>
              Спікер професійних заходів для майстрів
            </li>
            <li class="trust-item">
              <svg class="icon" width="18" height="18">
                <use href="icons.svg#icon-check"></use>
              </svg>
              Спікер PRO BEAUTY EXPO 2026 — всеукраїнська виставка індустрії краси
            </li>
            <li class="trust-item">
              <svg class="icon" width="18" height="18">
                <use href="icons.svg#icon-check"></use>
              </svg>
              З 2022 року в команді візажистів Ukrainian Fashion Week
            </li>
            <li class="trust-item">
              <svg class="icon" width="18" height="18">
                <use href="icons.svg#icon-check"></use>
              </svg>
              Тренер українського професійного бренду ОКО
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
