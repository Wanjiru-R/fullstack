# Stayhaven frontend

React + Vite + Tailwind CSS 4 frontend prototype for a houses and lodges booking platform.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Project structure

```text
src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    Sections.jsx
  pages/
    PublicPages.jsx
    AccountPages.jsx
  data.js
  App.jsx
  main.jsx
  index.css
```

Related UI components are grouped together to avoid unnecessary tiny files.

## Prototype notes

- Property listings, guest reviews and dashboard bookings use sample data.
- Login and registration are demonstration flows using browser localStorage. They are not real authentication.
- M-Pesa payments are not initiated by this frontend. Django and the payment gateway must handle real authentication, bookings and payments.
- Replace sample contact details, property data and remote images before launch.
