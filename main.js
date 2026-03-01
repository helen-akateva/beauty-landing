import 'modern-normalize';
import './src/styles/main.css';

import { renderHeader, initHeader } from './src/sections/header/header.js';
import { renderHero } from './src/sections/hero/hero.js';
import { renderServices } from './src/sections/services/services.js';
import { renderAbout } from './src/sections/about/about.js';
import { renderLearning } from './src/sections/learning/learning.js';

// Вставка секцій в DOM
document.querySelector('#header').innerHTML = renderHeader();
document.querySelector('#hero').innerHTML = renderHero();
document.querySelector('#services').innerHTML = renderServices();
document.querySelector('#about').innerHTML = renderAbout();
document.querySelector('#learning').innerHTML = renderLearning();

initHeader();
