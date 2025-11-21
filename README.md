# CoreLoop Technologies

A modern, single-page website for a technology company specializing in hardware, software, wholesale, retail, and general IT services.

## Features

- Modern, responsive design built with Next.js 14 and TypeScript
- Beautiful UI components from shadcn/ui
- Tailwind CSS for styling
- Smooth scrolling navigation
- Mobile-responsive layout
- Professional sections: Hero, Services, About, Contact

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: GitHub + Vercel Dashboard

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit: CoreLoop Technologies website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure the build settings
6. Click "Deploy"

Your site will be live in minutes!

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React Icons
- React 18

## Project Structure

```
coreloop/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── [images]
└── package.json
```

## License

© 2024 CoreLoop Technologies. All rights reserved.
