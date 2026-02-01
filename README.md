# Arumugam Panchatcharam - Resume Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/7ec8a3ec-363e-4482-b464-de44b50e6200/deploy-status)](https://app.netlify.com/projects/arumugam-panchatcharam-resume/deploys)

A modern, responsive resume website built with cutting-edge web technologies. This site showcases my professional experience, skills, and accomplishments as a Principle Engineer specializing in WiFi, embedded systems, and wireless software.

## 🚀 Live Demo

Visit the live site: [https://arumugam-panchatcharam-resume.netlify.app](https://arumugam-panchatcharam-resume.netlify.app)

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5, React, TypeScript, and Tailwind CSS
- **Dark Mode**: System-aware theme with manual toggle
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Astro's zero-JS architecture for blazing speed
- **PDF Download**: Download resume with one click
- **Smooth Animations**: Elegant transitions and hover effects
- **Auto-Deploy**: GitHub Actions automatically deploys to Netlify

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **UI Library**: [React](https://react.dev/) 18.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.x
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Hosting**: [Netlify](https://www.netlify.com/)
- **CI/CD**: GitHub Actions

## 📦 Project Structure

```
/
├── public/
│   ├── Resume-Arumugam-Panchatcharam.pdf
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/
│   │   ├── Accomplishments.astro
│   │   ├── DarkModeToggle.tsx
│   │   ├── DownloadButton.tsx
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Skills.astro
│   ├── data/
│   │   └── resume.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Arumugam-panchatcharam/Resume.git
cd Resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🌐 Deployment

This project is configured for automatic deployment to Netlify. Netlify automatically builds and deploys the site whenever you push changes to the `main` branch.

### Initial Setup

1. **Create a Netlify Account**:
   - Sign up at [netlify.com](https://www.netlify.com/)
   - Create a new site and connect it to your GitHub repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20.x (configured in `netlify.toml`)

3. **Auto-Deploy**:
   - Netlify automatically detects pushes to the `main` branch
   - Each commit triggers a new build and deployment
   - View deployment status via the badge at the top of this README

### Manual Deployment

You can also deploy manually using the Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Customization

### Update Resume Content

Edit the `src/data/resume.json` file to update your personal information, experience, skills, education, and accomplishments.

### Update PDF Resume

Replace `public/Resume-Arumugam-Panchatcharam.pdf` with your latest resume PDF.

### Customize Colors

Edit `tailwind.config.mjs` to change the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  },
  secondary: {
    // Your custom colors
  },
}
```

### Modify Layout

Components are located in `src/components/`. Each section is a separate component that can be customized independently.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security Headers

The site is configured with security headers in `netlify.toml`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Arumugam Panchatcharam**

- GitHub: [@Arumugam-panchatcharam](https://github.com/Arumugam-panchatcharam)
- LinkedIn: [Arumugam Panchatcharam](https://www.linkedin.com/in/arumugam-panchatcharam-b0677290)
- Email: arumugamece2013@gmail.com

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://www.netlify.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

⭐ If you found this project helpful, please give it a star!
