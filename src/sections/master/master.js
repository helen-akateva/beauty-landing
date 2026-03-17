export function renderMaster() {
  return `
    <section class="section" id="master">
      <div class="container">
        <h2 class="section-title">Стати майстром</h2>
        <ul class="list-master">

          <li class="item-master">
            <article class="content-card">
              <div class="card-body">
                <span class="badge-master">11 занять</span>
                <h3 class="title-card">Візажист PRO BASIC</h3>
                <p class="text-card">Професійний макіяж від 0 до експертного рівня. Повна підготовка майстра з практикою на моделях.</p>
                <strong class="price-card">15 000 грн</strong>
                <a href="./makeup-pro-basic.html" class="btn-more">Детальніше</a>
              </div>
            </article>
          </li>

          <li class="item-master">
            <article class="content-card">
              <div class="card-body">
                <span class="badge-master">7 занять</span>
                <h3 class="title-card">Візажист PRO EXPRESS</h3>
                <p class="text-card">Концентрована програма для швидкого старту в професії без втрати якості навчання.</p>
                <strong class="price-card">10 000 грн</strong>
                <a href="./makeup-pro-express.html" class="btn-more">Детальніше</a>
              </div>
            </article>
          </li>

          <li class="item-master">
            <article class="content-card">
              <div class="card-body">
                <span class="badge-master">2 дні</span>
                <h3 class="title-card">Brow Master</h3>
                <p class="text-card">Базовий курс бровиста з нуля — архітектура, колористика, техніки фарбування.</p>
                <strong class="price-card">7 000 грн</strong>
                <a href="./brow-master.html" class="btn-more">Детальніше</a>
              </div>
            </article>
          </li>

          <li class="item-master">
            <article class="content-card">
              <div class="card-body">
                <span class="badge-master">1 день</span>
                <h3 class="title-card">Lamimaker з 0</h3>
                <p class="text-card">Базовий курс ламінування вій — техніка, хімічні процеси, безпека та практика.</p>
                <strong class="price-card">5 000 грн</strong>
                <a href="./lamimaker.html" class="btn-more">Детальніше</a>
              </div>
            </article>
          </li>

          <li class="item-master item-master--combo">
            <article class="content-card">
              <div class="card-body">
                <span class="badge-combo">КОМБО 3 дні</span>
                <h3 class="title-card">Basic Brow & Lash Master</h3>
                <p class="text-card">Дві професії в одному навчанні — брови та ламінування вій. Вигідна ціна замість 12 000 грн.</p>
                <strong class="price-card">10 000 грн</strong>
                <a href="./brow-lash-master.html" class="btn-more">Детальніше</a>
              </div>
            </article>
          </li>

        </ul>

        <div class="master-contact">
          <p class="contact-text">Є питання або хочеш записатись?</p>
          <a
            href="https://www.instagram.com/oksana_lykhatska?igsh=Zng4ZTd5ZzhvZ3Zo"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn"
          >
            Зв'язатися в Instagram
            <svg class="icon" width="18" height="18" aria-hidden="true">
              <use href="icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `;
}
