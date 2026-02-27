import 'modern-normalize';
import './src/styles/main.css';

// Імпорт HTML секцій як рядків (Vite ?raw)
import headerHTML from './src/sections/header/header.html?raw';
import heroHTML from './src/sections/hero/hero.html?raw';
import servicesHTML from './src/sections/services/services.html?raw';
import footerHTML from './src/sections/footer/footer.html?raw';

// Вставка секцій в DOM
document.querySelector('#header').innerHTML = headerHTML;
document.querySelector('#hero').innerHTML = heroHTML;
document.querySelector('#services').innerHTML = servicesHTML;
document.querySelector('#footer').innerHTML = footerHTML;
