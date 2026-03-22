import 'modern-normalize';
import './src/styles/main.css';

import { renderHeader, initHeader } from './src/sections/header/header.js';
import { renderHero } from './src/sections/hero/hero.js';
import { renderServices } from './src/sections/services/services.js';
import { renderAbout } from './src/sections/about/about.js';
import { renderGallery, initGallery } from './src/sections/gallery/gallery.js';
import { renderLearning } from './src/sections/learning/learning.js';
import { renderMaster } from './src/sections/master/master.js';
import { renderPro } from './src/sections/pro/pro.js';
import { renderReviews, initReviews } from './src/sections/reviews/reviews.js';
import { renderFooter } from './src/sections/footer/footer.js';

document.querySelector('#header').innerHTML = renderHeader();
document.querySelector('#hero').innerHTML = renderHero();
document.querySelector('#services').innerHTML = renderServices();
document.querySelector('#about').innerHTML = renderAbout();
document.querySelector('#gallery').innerHTML = renderGallery();
document.querySelector('#learning').innerHTML = renderLearning();
document.querySelector('#master').innerHTML = renderMaster();
document.querySelector('#pro').innerHTML = renderPro();
document.querySelector('#reviews').innerHTML = renderReviews();
document.querySelector('#footer').innerHTML = renderFooter();

initHeader();
initGallery();
initReviews();
