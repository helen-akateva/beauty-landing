import 'modern-normalize';
import './src/styles/main.css';

import { renderHeader, initHeader } from './src/sections/header/header.js';
import { renderHero } from './src/sections/hero/hero.js';
import { renderServices } from './src/sections/services/services.js';
import { renderAbout } from './src/sections/about/about.js';
import { renderLearning } from './src/sections/learning/learning.js';
import { renderMaster } from './src/sections/master/master.js';
import { renderPro } from './src/sections/pro/pro.js';
import { renderReviews } from './src/sections/reviews/reviews.js';
import { renderGallery } from './src/sections/gallery/gallery.js';

// Вставка секцій в DOM
document.querySelector('#header').innerHTML = renderHeader();
document.querySelector('#hero').innerHTML = renderHero();
document.querySelector('#services').innerHTML = renderServices();
document.querySelector('#about').innerHTML = renderAbout();
document.querySelector('#gallery').innerHTML = renderGallery();
document.querySelector('#learning').innerHTML = renderLearning();
document.querySelector('#master').innerHTML = renderMaster();
document.querySelector('#pro').innerHTML = renderPro();
document.querySelector('#reviews').innerHTML = renderReviews();

initHeader();
