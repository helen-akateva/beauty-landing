import { renderHeader, initHeader } from '../sections/header/header.js';
import '../sections/header/header.css';
import '../styles/main.css';

document.querySelector('#header').innerHTML = renderHeader();
initHeader();
