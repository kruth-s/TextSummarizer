# ✨ TextSummarize.AI – Smart Text Summarizer

> 📚 Instantly summarize long articles, documents, or essays using AI.

![TextSummarizer Banner](./assets/banner.png)

## 🚀 Overview

TextSummarize.AI is a modern web application built for students and content creators to quickly shorten lengthy text into concise summaries using cutting-edge natural language processing (NLP) models.

Whether you're studying for exams, researching, or just want TL;DRs, this tool helps you save time and boost productivity.

---

## 🛠 Tech Stack

### 💻 Frontend
- **React** with **Vite** – blazing fast UI development
- **TailwindCSS** – modern utility-first styling
- **Framer Motion** – smooth animations and transitions

### 🧠 Backend
- **Node.js** + **Express** – RESTful API for handling requests
- **OpenAI GPT API** or **HuggingFace Transformers** – for generating text summaries
- **dotenv** – manage API keys securely

### 🔐 Others
- **Axios** – API calls from client to server
- **React Toastify** – beautiful and non-blocking toast messages
- **Vercel / Netlify** – frontend deployment
- **Render / Railway / Cyclic** – backend deployment

---

## 🔍 Features

- ✏️ Paste or upload text to summarize
- 🧠 AI-powered summary generation
- 🌗 Dark mode toggle
- 📋 Copy summary with one click
- 🔄 Reset and retry functionality
- 📱 Fully responsive design

---

## 🧪 Installation (Dev Mode)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/textsummarize-ai.git
cd textsummarize-ai
```

### 2. Install dependencies

```bash
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```

### 3. Set up API keys

- Create a `.env` file in the `/server` directory:

```env
OPENAI_API_KEY=your_openai_key_here
PORT=5000
```

### 4. Run the project

```bash
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm run dev
```

Now go to `http://localhost:5173`

---

## 📸 Screenshots

| Input Page | Output Summary |
|------------|----------------|
| ![Input](./assets/input.png) | ![Output](./assets/output.png) |

---

## 📌 Roadmap

- [ ] Add file upload support (PDF, DOCX)
- [ ] Support multiple languages
- [ ] Enable login + save history
- [ ] Mobile PWA support

---

## 🙋‍♂️ Made With Love by a Student

Built as a learning project to explore modern web development and AI integration. Open to contributions, suggestions, or collaborations!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

