export function renderLearning() {
  return `
    <section class="section" id="learning">
      <div class="container">
        <h2 class="section-title learning-title">Навчання для себе</h2>

        <div class="learning-group">
          <h3 class="learning-subtitle">Онлайн-курси</h3>
          <ul class="list-online">
            <li class="item-online">
              <img
                class="img-course"
                srcset="/image_learning/arrow.webp 1x, /image_learning/arrow2x.webp 2x"
                src="/image_learning/arrow.webp"
                width="400"
                height="300"
                alt="Курс стрілки на Easy"
                loading="lazy"
              />
              <div class="content-card">
                <span class="badge badge-online">Online</span>
                <h3 class="title-card">Курс "Стрілки на Easy"</h3>
                <p class="text-card">
                  Покрокове навчання для тих, хто хоче малювати стрілки
                  впевнено — без страху і перемальовувань.
                </p>
                <ul class="list-course">
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Підбір форми під тип ока та повіки
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Класична стрілка та варіант для навислої повіки
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Проста схема яку легко повторити
                  </li>
                </ul>
                <div class="card-footer">
                <p class="price-card">349 грн</p>
                <a
                  href="https://secure.wayforpay.com/button/b1da79a682e60"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hero-btn"
                >
                  Купити
                </a>
                </div>
              </div>
            </li>

            <li class="item-online">
              <img
                class="img-course"
                srcset="/image_learning/nud.webp 1x, /image_learning/nud2x.webp 2x"
                src="/image_learning/nud.webp"
                width="400"
                height="300"
                alt="Курс Nude makeup"
                loading="lazy"
              />
              <div class="content-card">
                <span class="badge badge-online">Online</span>
                <h3 class="title-card">Курс "Nude makeup"</h3>
                <p class="text-card">
                  Онлайн-заняття для тих, хто хоче зрозуміти макіяж і
                  косметику саме для свого обличчя.
                </p>
                <ul class="list-course">
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Підготовка шкіри та підбір тону
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Корекція обличчя з ліфтинг-ефектом
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Макіяж очей та брів на кожен день
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Бонус: гайд по типу шкіри + список косметики
                  </li>
                </ul>
                <div class="card-footer">
                <p class="price-card">349 грн</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hero-btn"
                >
                  Купити
                </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="learning-group">
          <h3 class="learning-subtitle">Офлайн-курси</h3>
          <ul class="list-offline">
            <li class="item-offline">
              <div class="content-card">
                <span class="badge badge-offline">Offline • 3 заняття</span>
                <h3 class="title-card">Макіяж для себе</h3>
                <p class="text-card">
                  Навчишся фарбувати себе легко і красиво — зрозумієш свою косметику і свій тип обличчя.
                </p>
                <ul class="list-course">
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Nude макіяж на кожен день
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Денний → святковий за 5 хвилин
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Самостійний макіяж під контролем майстра
                  </li>
                </ul>
                <p class="price-card">4000 грн</p>
              </div>
            </li>

            <li class="item-offline">
              <div class="content-card">
                <span class="badge badge-offline">Offline • 1 заняття</span>
                <h3 class="title-card">Базовий макіяж Nude</h3>
                <p class="text-card">
                  Фундамент після якого ти по-іншому подивишся на макіяж і косметику.
                </p>
                <ul class="list-course">
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Підготовка шкіри та підбір тону
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Корекція, брови, макіяж очей
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Нюанси які роблять макіяж "дорогим"
                  </li>
                </ul>
                <p class="price-card">1500 грн</p>
              </div>
            </li>

            <li class="item-offline">
              <div class="content-card">
                <span class="badge badge-offline">Offline • 1 заняття</span>
                <h3 class="title-card">Макіяж для виступу дитини</h3>
                <p class="text-card">
                  Для мам які хочуть самостійно готувати дитину до виступів впевнено і красиво.
                </p>
                <ul class="list-course">
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Сценічний макіяж з урахуванням віку
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Розбір вашої косметики
                  </li>
                  <li class="item-course">
                    <svg class="icon" width="18" height="18">
                      <use href="icons.svg#icon-check"></use>
                    </svg>
                    Алгоритм зборів перед виступом
                  </li>
                </ul>
                <p class="price-card">1500 грн</p>
              </div>
            </li>
          </ul>

          <div class="learning-contact">
            <p class="contact-text">Запис на навчання здійснюється через Instagram</p>
            <a
              href="https://www.instagram.com/oksana_lykhatska?igsh=Zng4ZTd5ZzhvZ3Zo"
              target="_blank"
              rel="noopener noreferrer"
              class="hero-btn"
            >
              Записатися на курс
              <svg class="card-icon" width="18" height="18">
                <use href="icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
