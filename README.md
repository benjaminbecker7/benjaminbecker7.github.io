# Personal Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Smooth animations using Framer Motion
- Section-based layout for experience, education, and skills
- Easy to update content through a centralized data file
- Optimized for GitHub Pages deployment

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

To deploy manually:

1. Build the website:
```bash
npm run build
```

2. Push changes to the main branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

## Updating Content

To update the resume content, edit the `src/data/resume.ts` file. The website will automatically reflect the changes after rebuilding.
