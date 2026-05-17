# 🌌 VISHNURAJ D | Immersive Web3 & AI Developer Portfolio

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD627)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ThreeJS](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-green?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A high-end, immersive, and fully responsive 3D developer portfolio showcasing cutting-edge Web3 and Full-Stack Engineering capabilities. Built using Three.js (WebGL) for 3D room rendering, GSAP animations, a custom-designed breathing neon-pink loading screen, and a real-time AI room chat assistant powered by Llama 3.3 via Groq serverless APIs on Vercel.

---

## ✨ Features

- **🎮 Immersive 3D Experience:** Implements Three.js (WebGL), responsive resize controllers, interactive mouse look controls, and premium lighting configurations.
- **🤖 Dynamic AI Chat Assistant:** An interactive 3D command room featuring a live chat powered by Llama-3.3-70b and Vercel serverless edge functions.
- **⚡ Fluid GSAP Motion Engine:** Scroll-driven horizontal project slides, magnetic buttons, and tactile physical lift hover micro-interactions.
- **💖 Custom Neon-Pink Loader:** A dark-theme welcome interface featuring electric neon-pink Outfit typography and pulsing text shadows.
- **⚙️ Clean & High-Performance:** Ultra-polished lightweight footprint, using CDN-based dynamic icon rendering for instant loading.

---

## 🛠️ Tech Stack

* **Core Framework:** React 18 & TypeScript
* **Build System:** Vite
* **3D Visuals:** Three.js (WebGL) & GLTFLoader
* **Animations:** GreenSock (GSAP), ScrollTrigger, SplitText
* **AI Engine:** Llama-3.3-70b-versatile (via Groq Cloud APIs)
* **Backend Edge Functions:** Node.js serverless handlers on Vercel
* **Styling:** Custom Modular Vanilla CSS (with glassmorphism and custom animation keyframes)

---

## 📂 Project Structure

```bash
├── api/                  # Serverless Edge Functions (AI API proxy)
│   └── chat.js
├── public/               # Static assets & 3D models
│   ├── models/           # Encrypted 3D room GLTF models
│   ├── images/           # High-resolution optimized project showcases
│   └── resume.pdf        # In-browser viewable PDF Resume
├── src/
│   ├── components/       # Interactive layout components
│   │   ├── Character/    # Three.js 3D character & scene controllers
│   │   ├── styles/       # Modular styling systems
│   │   └── utils/        # Scroll engines & animation helpers
│   ├── pages/            # Page layouts (Home, Play, Works)
│   ├── config.ts         # Centralized developer biography & social config
│   ├── main.tsx          # Application entrypoint
│   └── index.css         # Global styling system
├── vercel.json           # Vercel routing configurations
└── vite.config.ts        # Vite compiler settings
```

---

## 🔧 Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/vi5hnuraj/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser!

---

## 🚀 Production Deployment (Vercel)

This repository is optimized for one-click deployment to Vercel:

1. Import your GitHub repository to **Vercel**.
2. Vercel will automatically detect **Vite** and configure the root directory.
3. In the Vercel project settings, add your **`GROQ_API_KEY`** to the **Environment Variables** tab.
4. Click **Deploy**, and you are live!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with 💜 by <a href="mailto:vishnurjd@gmail.com">VISHNURAJ D</a></p>
