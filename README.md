# 😂 JokeDeck - Random Jokes Viewer

A responsive, interactive web application that fetches and displays random jokes from the FreeAPI. Built as part of the Web Dev Cohort 2026.

**Live Demo:** [https://jokes-viewer-chaicode.netlify.app/](https://jokes-viewer-chaicode.netlify.app/)

## 🌟 Features

- **Random Jokes Fetching**: Automatically loads random jokes via the FreeAPI endpoint.
- **Interactive Punchlines**: Two-part jokes keep the punchline hidden until you click "Reveal Punchline" for a better comedic effect.
- **Pagination Support**: Browse through pages of jokes seamlessly with smart page number generation.
- **Modern UI/UX**: Premium dark-themed design with smooth animations, glassmorphism effects, and a responsive full-width grid layout.
- **Loading & Error States**: Beautiful shimmer skeletons while loading and graceful error handling if the API fails.

## 🛠️ Tech Stack

- **Framework**: React (via Vite)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Variables
- **Data Fetching**: Custom React Hook (`useJokes`) using the native `fetch` API
- **Fonts**: Google Fonts (Inter)

## 📡 API Reference

This project uses the FreeAPI Random Jokes endpoint:
```http
GET https://api.freeapi.app/api/v1/public/randomjokes?page=1&limit=10
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-Madhukar/jokes-viewer.git
   ```
2. Navigate into the project directory:
   ```bash
   cd jokes-viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```text
jokes-viewer/
├── src/
│   ├── components/
│   │   ├── JokeCard.jsx      # Individual joke presentation and reveal logic
│   │   ├── SkeletonCard.jsx  # Loading state placeholder
│   │   ├── Pagination.jsx    # Smart pagination controls
│   │   └── ErrorState.jsx    # Error handling UI
│   ├── hooks/
│   │   └── useJokes.js       # Custom data-fetching hook
│   ├── App.jsx               # Main application layout and state management
│   ├── index.css             # Global styles and custom design tokens
│   └── main.jsx              # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 👨‍💻 Author

**Madhukar**
- GitHub: [@Mr-Madhukar](https://github.com/Mr-Madhukar)

## 📝 License

This project is open-source and available for educational purposes under the Web Dev Cohort 2026.