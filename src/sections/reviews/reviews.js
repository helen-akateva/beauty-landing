import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsItems = [
  { id: '01', name: 'Клієнт 1' },
  { id: '02', name: 'Клієнт 2' },
  { id: '03', name: 'Клієнт 3' },
  { id: '04', name: 'Клієнт 4' },
  { id: '05', name: 'Клієнт 5' },
  { id: '06', name: 'Клієнт 6' },
  { id: '07', name: 'Клієнт 7' },
  { id: '08', name: 'Клієнт 8' },
  { id: '09', name: 'Клієнт 9' },
  { id: '10', name: 'Клієнт 10' },
  { id: '11', name: 'Клієнт 11' },
  { id: '12', name: 'Клієнт 12' },
];

function renderReviewSlide({ id, name }, index) {
  return `
    <div class="swiper-slide reviews-slide">
      <picture>
        <source
          srcset="image_reviews/review-${id}.webp 1x, image_reviews/review-${id}@2x.webp 2x"
          type="image/webp"
        />
        <img
          class="reviews-img"
          src="image_reviews/review-${id}.webp"
          alt="Відгук від ${name}"
          loading="lazy"
          width="600"
          height="800"
        />
      </picture>
    </div>
  `;
}

export function renderReviews() {
  const slides = reviewsItems.map((item, index) => renderReviewSlide(item, index)).join('');

  return `
    <section class="section" id="reviews">
      <div class="container">
        <h2 class="section-title">Відгуки</h2>
        <div class="reviews-swiper-wrap">
          <div class="swiper reviews-swiper">
            <div class="swiper-wrapper">
              ${slides}
            </div>
            <div class="swiper-button-prev reviews-btn reviews-btn--prev"></div>
            <div class="swiper-button-next reviews-btn reviews-btn--next"></div>
          </div>
          <div class="swiper-pagination reviews-pagination"></div>
        </div>
      </div>
    </section>
  `;
}

export function initReviews() {
  new Swiper('.reviews-swiper', {
    modules: [EffectCoverflow, Navigation, Pagination, A11y],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 1.3,
      },
      1280: {
        slidesPerView: 1.5,
      },
    },
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    a11y: {
      prevSlideMessage: 'Попередній відгук',
      nextSlideMessage: 'Наступний відгук',
    },
    pagination: {
      el: '.reviews-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-btn--next',
      prevEl: '.reviews-btn--prev',
    },
  });
}
