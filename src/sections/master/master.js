export function renderMaster() {
  return `
    <section class="section" id="master">
      <div class="container">
        <h2 class="section-title">Стати майстром</h2>
        <ul class="list-master">

          <li class="item-master">
            <div class="content-card">
              <span class="badge badge-master">11 занять</span>
              <h3 class="title-card">Візажист PRO BASIC</h3>
              <p class="text-card">Професійний макіяж від 0 до експертного рівня. Повна підготовка майстра з практикою на моделях.</p>
              <p class="price-card">15 000 грн</p>
              <a href="./makeup-pro-basic.html" class="hero-btn">Детальніше</a>
            </div>
          </li>

          <li class="item-master">
            <div class="content-card">
              <span class="badge badge-master">7 занять</span>
              <h3 class="title-card">Візажист PRO EXPRESS</h3>
              <p class="text-card">Концентрована програма для швидкого старту в професії без втрати якості навчання.</p>
              <p class="price-card">10 000 грн</p>
              <a href="./makeup-pro-express.html" class="hero-btn">Детальніше</a>
            </div>
          </li>

          <li class="item-master">
            <div class="content-card">
              <span class="badge badge-master">2 дні</span>
              <h3 class="title-card">Brow Master</h3>
              <p class="text-card">Базовий курс бровиста з нуля — архітектура, колористика, техніки фарбування.</p>
              <p class="price-card">7 000 грн</p>
              <a href="./brow-master.html" class="hero-btn">Детальніше</a>
            </div>
          </li>

          <li class="item-master">
            <div class="content-card">
              <span class="badge badge-master">1 день</span>
              <h3 class="title-card">Lamimaker з 0</h3>
              <p class="text-card">Базовий курс ламінування вій — техніка, хімічні процеси, безпека та практика.</p>
              <p class="price-card">5 000 грн</p>
              <a href="./lamimaker.html" class="hero-btn">Детальніше</a>
            </div>
          </li>

          <li class="item-master item-master--combo">
            <div class="content-card">
              <span class="badge badge-combo">Комбо • 3 дні</span>
              <h3 class="title-card">Basic Brow & Lash Master</h3>
              <p class="text-card">Дві професії в одному навчанні — брови та ламінування вій. Вигідна ціна замість 12 000 грн.</p>
              <p class="price-card">10 000 грн</p>
              <a href="./brow-lash-master.html" class="hero-btn">Детальніше</a>
            </div>
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
            <svg class="icon" width="18" height="18">
              <use href="icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>

      </div>
    </section>
  `;
}
