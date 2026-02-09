# System Analyst / Business Analyst Portfolio

This is a professional portfolio website template built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It is designed to be clean, corporate-ready, and easy to deploy to GitHub Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm

### Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 How to Customize

All content is managed in a single file for easy updates: `src/data/portfolio.ts`.

### Updating Content
1.  Open `src/data/portfolio.ts`.
2.  Update the `personalInfo` object with your details.
3.  Add your skills, experience, and certifications.
4.  Add your projects to the `projects` array.
    - Each project needs a unique `id`.
    - You can include screenshots by adding image files to the `public/` folder and referencing them in the `images` array (e.g., `["/screenshot1.png"]`).

### Changing Colors
The site uses standard Tailwind CSS colors (slate, blue, gray). You can customize the theme in `src/app/globals.css` or by changing the classes in the components.

## 🌐 Deployment (GitHub Pages)

This project is configured for static export, making it perfect for GitHub Pages.

### Step 1: Push to GitHub
Create a new repository on GitHub and push this code to it.

### Step 2: Configure Repository Settings
1.  Go to your repository **Settings**.
2.  Click on **Pages** in the sidebar.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  GitHub will likely suggest a Next.js workflow. If not, create a file at `.github/workflows/nextjs.yml` with the standard Next.js deployment configuration.

### Alternative: Manual Deployment to `gh-pages` branch

1.  Update `next.config.ts`:
    If you are deploying to a user site (`username.github.io`), no change needed.
    If you are deploying to a project site (`username.github.io/repo-name`), uncomment the `basePath` line in `next.config.ts` and set it to your repository name:
    ```typescript
    basePath: "/your-repo-name",
    ```

2.  Build the project:
    ```bash
    npm run build
    ```

3.  The static site is generated in the `out/` folder. You can upload the contents of this folder to your hosting provider.

## 📂 Project Structure

- `src/app/`: Next.js App Router pages.
- `src/components/`: Reusable UI components (Navbar, Footer, Cards).
- `src/data/`: Content data file (`portfolio.ts`).
- `public/`: Static assets (images, resume PDF).
