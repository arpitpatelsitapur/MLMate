# 🤖 MLMate

**A quiz app built for AI/ML folks — no timers, no login, no fluff.**

Pick a skill → select a section → attempt MCQs → see the answer + explanation instantly.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-MLMate-2563eb?style=for-the-badge)](https://mlmate.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)](#-contributing)

---

## 📸 Preview

> Sidebar navigation on the left, MCQ quiz on the right — clean and distraction-free.

---

## ✨ Features

- ⚡ **Instant feedback** — correct answer + explanation shown right after you click
- 🗂️ **Sidebar layout** — all sections visible at a glance, switch anytime
- 📊 **Score summary** — see your result at the end of every section
- 📱 **Mobile friendly** — collapsible sidebar works on small screens
- 🔓 **Zero friction** — no login, no account, no timer
- 🆓 **Free forever** — fully open source

---

## 🗂️ Skills & Sections

| Skill | Sections | Questions | Status |
|---|---|---|---|
| 🤖 Machine Learning | Data Preprocessing & EDA, Model Evaluation & Bias-Variance | 5 | ✅ Active |
| 🐳 Docker | Dockerfile, CLI Commands, Config Files, Cleanup & Deletion | 18 | ✅ Active |
| 🧬 Deep Learning | — | — | 🔜 Coming Soon |
| 💬 LLMs & Transformers | — | — | 🔜 Coming Soon |
| 📝 NLP | — | — | 🔜 Coming Soon |
| 🐍 Python | — | — | 🔜 Coming Soon |
| 🗄️ MySQL | — | — | 🔜 Coming Soon |
| 🐙 GitHub & Git | — | — | 🔜 Coming Soon |
| 🕵️ Agentic AI | — | — | 🔜 Coming Soon |
| ⚙️ MLOps | — | — | 🔜 Coming Soon |
| 🔍 Vector DBs | — | — | 🔜 Coming Soon |

---

## 🛠️ Tech Stack

- Pure **HTML + CSS + JavaScript** — zero dependencies, zero build step
- All questions stored in a single `questions.js` file
- Runs locally or on any static host (GitHub Pages, Netlify, Vercel)

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/arpitpatelsitapur/MLMate.git

# 2. Open in your browser — no install needed
cd MLMate
open index.html
```

That's it. No `npm install`, no build tools.

---

## 🤝 Contributing

Contributions are the best way to grow MLMate. You can help by:

- **Adding questions** to an existing skill/section
- **Adding a new section** inside an existing skill
- **Adding a brand new skill** (Deep Learning, Python, NLP, etc.)

### How to add questions

All questions live in `questions.js`. Each question follows this structure:

```js
{
  q: "Your question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1,            // 0-indexed: 0 = A, 1 = B, 2 = C, 3 = D
  explanation: "Why this answer is correct — keep it clear and concise."
}
```

### Steps

1. **Fork** this repo
2. Edit `questions.js` — add your questions to the right section, or create a new skill/section
3. Test locally by opening `index.html` in a browser
4. Open a **Pull Request** with a short description of what you added

> Please keep explanations factual, concise, and beginner-friendly.

---

## 📁 Project Structure

```
MLMate/
├── index.html        # Main app — all UI and logic
├── questions.js      # All skills, sections, and questions
├── LICENSE
└── README.md
```

---

## 👤 Author

Made with ❤️ by [Arpit Patel](https://github.com/arpitpatelsitapur)

---

## ⭐ Support

If MLMate helped you prep for an interview or revise a concept, consider giving it a star — it helps others find the project!

[![Star on GitHub](https://img.shields.io/github/stars/arpitpatelsitapur/MLMate?style=social)](https://github.com/arpitpatelsitapur/MLMate)

---

## 📄 License

[MIT](./LICENSE) — free to use, fork, and build upon.
