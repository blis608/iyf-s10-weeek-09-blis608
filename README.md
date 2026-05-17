
# Week 09: SocialLink

## 🧑‍💻 Author
- **Name:** Irene Njoki
- **GitHub:** [@blis608](https://github.com/blis608)
- **Date:** May 17, 2026

---

## 📌 Project Description
SocialLink is a React-based web application built as part of the IYF Season 10 Week 09 challenge. The project focuses on connecting people through a clean, component-driven interface while exploring advanced React patterns including Effects, Data Fetching, Routing, and Styling.

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript
- React
- Vite
- React Router

---

## ✨ Features
- Client-side routing with React Router
- Data fetching using custom `useFetch` hook
- Local storage persistence via `useLocalStorage` hook
- Reusable shared component library under `src/components/shared/`
- Loading and error state handling with `LoadingSpinner` and `ErrorMessage` components
- Toggle and form state management with custom hooks

---

## 🚀 How to Run
1. Clone this repository
   ```bash
   git clone https://github.com/blis608/iyf-s10-weeek-09-blis608.git
   ```
2. Navigate into the project folder
   ```bash
   cd iyf-s10-weeek-09-blis608
   ```
3. Install dependencies and start the dev server
   ```bash
   npm install
   npm start
   ```
   OR open `index.html` directly in your browser.

---

## 📚 Lessons Learned
- How to implement and compose custom React hooks for reusable logic
- Managing side effects with `useEffect` for data fetching
- Setting up client-side routing across multiple pages
- Handling loading and error states gracefully in the UI
- Structuring a scalable React project with shared components

---

## 🧩 Challenges Faced
- Coordinating multiple custom hooks without causing unnecessary re-renders required careful dependency management in `useEffect`.
- Setting up React Router with nested routes and ensuring navigation worked correctly across page refreshes on GitHub Pages.

---

## 📸 Screenshots
![SocialLink App Screenshot](path/to/screenshot.png)

---

## 🌐 Live Demo
[View Live Demo](https://blis608.github.io/iyf-s10-weeek-09-blis608/)
