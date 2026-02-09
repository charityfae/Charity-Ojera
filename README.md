# Ojera Charity Faith - Portfolio Website

A modern, tech-focused portfolio website built with React and Tailwind CSS featuring glassmorphism design, smooth animations, and interactive elements.

## Features

- 🎨 Glassmorphism UI with gradient accents
- ✨ Animated particle background
- 🚀 Smooth scroll animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive skill cards
- 💼 Timeline-based experience section
- 📧 Contact form with modern styling
- 🌈 Custom gradient color scheme

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Customization Guide

### 1. Personal Information
Edit `src/components/Hero.jsx`:
- Update your name, role, and bio
- Add your social media links (GitHub, LinkedIn, Email)

### 2. Skills
Edit `src/components/Skills.jsx`:
- Add/remove technologies
- Update skill icons and colors

### 3. Projects
Edit `src/components/Projects.jsx`:
- Add your projects with descriptions
- Update GitHub and live demo links
- Modify tech stack badges

### 4. Experience
Edit `src/components/Experience.jsx`:
- Add your work experience and education
- Update company names, roles, and dates

### 5. Contact Information
Edit `src/components/Contact.jsx`:
- Update email, phone, and location
- Configure form submission (add backend endpoint)

### 6. Colors & Theme
Edit `tailwind.config.js`:
- Modify primary color (default: cyan #00f5ff)
- Modify secondary color (default: magenta #ff00ff)
- Adjust animations and effects

### 7. Navbar Logo
Edit `src/components/Navbar.jsx`:
- Change the logo text from `<OCF />` to your initials

## Deployment

### Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

## License

MIT License - Feel free to use this template for your own portfolio!
