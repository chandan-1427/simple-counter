# Counter App

A modern, interactive counter application built with **React**, **Vite**, **TailwindCSS**, and **Lucide** icons. This project demonstrates a clean UI, persistent state, and modular component structure, making it a great starting point for learning or extending React apps.

## Features

- **Interactive Counter**: Increment, decrement, and reset the counter.
- **Persistent State**: Counter value is saved in `localStorage` and restored on reload.
- **Responsive Design**: Mobile-friendly layout using TailwindCSS.
- **About Modal**: Click the info icon to view an animated modal with author info and a portfolio link.
- **Custom Fonts**: Multiple Google Fonts for accent and body text.
- **Accessible**: Buttons have ARIA labels for improved accessibility.

## Project Structure

```
us-test/
├── public/
│   └── CJ.png
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Counter.jsx
│   │   └── Nav.jsx
│   └── layouts/
│       └── MainLayout.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

### Key Files

- [`src/App.jsx`](src/App.jsx): Main app entry, renders the layout and counter.
- [`src/main.jsx`](src/main.jsx): React root setup.
- [`src/components/Counter.jsx`](src/components/Counter.jsx): Counter logic and UI.
- [`src/components/Nav.jsx`](src/components/Nav.jsx): Info icon and About modal.
- [`src/layouts/MainLayout.jsx`](src/layouts/MainLayout.jsx): Page layout, header, footer, and navigation.
- [`src/index.css`](src/index.css): TailwindCSS and custom font imports.
- [`vite.config.js`](vite.config.js): Vite and TailwindCSS plugin configuration.
- [`eslint.config.js`](eslint.config.js): ESLint setup for code quality.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/us-test.git
   cd us-test
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Linting

```sh
npm run lint
```

## Customization

- **Fonts**: Edit [`src/index.css`](src/index.css) to change or add fonts.
- **Icons**: Uses [Lucide](https://lucide.dev/) for SVG icons.
- **Styling**: TailwindCSS utility classes for rapid UI changes.

## Author

**Chandan**  
Portfolio: [Visit My Page](https://portfolio-vite-orcin.vercel.app/)

## License

This project is licensed under the MIT License.

---

> Built with React, Vite, TailwindCSS, and Lucide.  
> For learning, showcasing, and extending modern