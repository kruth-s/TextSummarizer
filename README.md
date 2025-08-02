# TextSummarize.AI – AI-Powered Text Summarizer

**TextSummarize.AI** is a modern web application designed to help students, researchers, and content creators quickly generate concise summaries of long-form text using advanced natural language processing (NLP) models.

Whether you're preparing for exams, reviewing articles, or simply need a brief overview of content, TextSummarize.AI enables faster comprehension and improved productivity.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

TextSummarize.AI streamlines the process of summarizing large blocks of text into clear and readable formats. Built with modern frontend and backend technologies, it integrates AI models such as OpenAI's GPT or HuggingFace Transformers to deliver reliable and coherent summaries.

---

## Tech Stack

### Frontend
- **React** (with Vite) – for fast and modern UI development
- **Tailwind CSS** – utility-first CSS framework
- **Framer Motion** – for smooth UI animations

### Backend
- **Node.js** with **Express** – for API routing and server logic
- **OpenAI GPT API** or **HuggingFace Transformers** – used for generating text summaries
- **dotenv** – for managing environment variables securely

### Additional Tools
- **Axios** – to manage client-server API communication
- **React Toastify** – for non-blocking, user-friendly notifications
- **Deployment Platforms**:
  - Frontend: Vercel / Netlify
  - Backend: Render / Railway / Cyclic

---

## Features

- Input large blocks of text or paste directly
- AI-generated summaries using modern NLP models
- Clean and responsive user interface
- Dark mode toggle for accessibility
- One-click copy-to-clipboard for results
- Reset and regenerate functionality

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/textsummarize-ai.git
cd textsummarize-ai
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3. Configure Environment Variables

In the `/server` directory, create a `.env` file with the following content:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```

### 4. Run the Application

```bash
# Start backend server
cd server
npm run dev

# Start frontend development server
cd ../client
npm run dev
```

Navigate to `http://localhost:5173` in your browser to access the application.

---

## Screenshots

| Input Page | Summary Output |
|------------|----------------|
| ![Input Page](./assets/input.png) | ![Summary Output](./assets/output.png) |

---

## Roadmap

- [ ] Add file upload support (PDF, DOCX)
- [ ] Multi-language summary support
- [ ] User authentication and summary history
- [ ] Progressive Web App (PWA) support

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## About

Developed as a learning project to explore modern web development practices and AI integration. Contributions, suggestions, and collaborations are welcome.
