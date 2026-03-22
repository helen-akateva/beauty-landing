import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryItems = [
  { id: '01', alt: 'Робота майстра 1' },
  { id: '02', alt: 'Робота майстра 2' },
  { id: '03', alt: 'Робота майстра 3' },
  { id: '04', alt: 'Робота майстра 4' },
  { id: '05', alt: 'Робота майстра 5' },
  { id: '06', alt: 'Робота майстра 6' },
  { id: '07', alt: 'Робота майстра 7' },
  { id: '08', alt: 'Робота майстра 8' },
  { id: '09', alt: 'Робота майстра 9' },
  { id: '10', alt: 'Робота майстра 10' },
  { id: '11', alt: 'Робота майстра 11' },
  { id: '12', alt: 'Робота майстра 12' },
];

function renderSlide({ id, alt }) {
  return `
    <div class="swiper-slide gallery-slide">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcset="image_gallery/work-${id}ds.webp 1x, image_gallery/work-${id}ds2x.webp 2x"
        />
        <source
          media="(min-width: 768px)"
          srcset="image_gallery/work-${id}tb.webp 1x, image_gallery/work-${id}tb2x.webp 2x"
        />
        <img
          class="gallery-img"
          src="image_gallery/work-${id}mb.webp"
          srcset="image_gallery/work-${id}mb.webp 1x, image_gallery/work-${id}mb2x.webp 2x"
          alt="${alt}"
          loading="${index < 4 ? 'eager' : 'lazy'}"
        />
      </picture>
    </div>
  `;
}

// Повертає лише вміст — без <section>, бо секція вже є в index.html
export function renderGallery() {
  const slides = galleryItems.map(renderSlide).join('');

  return `
    <div class="section gallery-section">
      <div class="container">
        <h2 class="section-title">Галерея робіт</h2>
        <div class="gallery-swiper-wrap">
          <div class="swiper gallery-swiper">
            <div class="swiper-wrapper">
              ${slides}
            </div>
            <div class="swiper-button-prev gallery-btn gallery-btn--prev"></div>
            <div class="swiper-button-next gallery-btn gallery-btn--next"></div>
          </div>
          <div class="swiper-pagination gallery-pagination"></div>
        </div>
      </div>
    </div>
  `;
}

export function initGallery() {
  new Swiper('.gallery-swiper', {
    modules: [EffectCoverflow, Navigation, Pagination, A11y],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },
    a11y: {
      prevSlideMessage: 'Попередній слайд',
      nextSlideMessage: 'Наступний слайд',
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.gallery-btn--next',
      prevEl: '.gallery-btn--prev',
    },
  });
}
