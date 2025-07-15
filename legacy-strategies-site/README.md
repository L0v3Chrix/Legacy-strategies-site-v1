# 1322 Legacy Strategies Website

This project is a re-creation of the RetirementResearcher.com homepage, re-branded for 1322 Legacy Strategies. It is built with Next.js, React, and TailwindCSS, incorporating Framer Motion for animations.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd legacy-strategies-site
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Place Assets:**
    *   Upload `hero-family.png` and `brad-raschke.png` to `public/img/`.
    *   Upload `logo-shield.png` to `public/img/`.
    *   Upload `facebook.svg`, `linkedin.svg`, and `youtube.svg` to `public/icons/`.
    *   Upload `legacy-academy.mp4` to `public/videos/`.
    *   Place your markdown blog posts in `content/blog/`.
    *   Place your legal documents (privacy policy, terms, ADV) in `public/legal/`.

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To build the project for production:

```bash
npm run build
```

This will compile the Next.js application and generate `public/brand.css` with purged Tailwind classes.

## Deployment

The project is configured for deployment on Vercel. Simply connect your Git repository to Vercel, and it will automatically detect and deploy the Next.js application.

## Validation

After building the project, you can run the following commands to validate:

```bash
npm run lint
npm run test
npm run build
```

All commands should pass. For Lighthouse scores, you can run an audit in your browser's developer tools after deploying or running in development mode.