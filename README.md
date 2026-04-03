# Beauty Landing 

Landing page and course pages project for professional makeup artist Oksana Lykhatska.

## 🚀 Technologies

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Markup and Styling:** HTML5, Vanilla CSS
- **Logic:** Vanilla JavaScript (ESModules)
- **Carousels/Sliders:** [Swiper.js](https://swiperjs.com/)
- **Optimization:** WebP format, responsive images (`srcset`), `lazy loading`, high priority for the first screen (`fetchpriority="high"`).

## 📂 Project Structure

The project is built with an MPA (Multi-Page Application) architecture using Vite. 

- `index.html` — Main page (services, reviews, portfolio).
- `brow-lash-master.html`, `brow-master.html`, `lamimaker.html`, `makeup-pro-basic.html`, `makeup-pro-express.html` — Detailed pages for individual courses.
- `src/` — Main project code:
  - `pages/` — initialization and logic for additional pages.
  - `sections/` — independent section components (Header, Footer, Gallery, Hero, etc.), each with its own JS and CSS for modularity.
  - `styles/` — global styles, variables (`:root`), and utilities.
- `public/` — static assets (e.g., favicon).

## 🛠️ Getting Started

To run the project locally, make sure you have Node.js installed on your computer.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
   *The build process generates optimized files in the `dist` folder, minimizing the bundle sizes and HTML code.*

## ✨ Features

- Mobile-responsive design (Mobile First approach).
- Modular architecture: each section of the page is isolated in its own folder (`/src/sections/`).
- Zero heavy frameworks or libraries, guaranteeing high performance.

---

## 📫 Developer Contacts

- **LinkedIn:** [Olena Akatieva](https://www.linkedin.com/in/olenaakatieva/)
- **GitHub:** [helen-akateva](https://github.com/helen-akateva)
