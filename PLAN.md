# PLAN.md

## Bean Tzu - The Art of Deal: Static Website Build Plan

### 1. Project Setup
- Create a new directory structure for the static site (e.g., `/src`, `/assets`).
- Initialize a basic README.md describing the project.
- Set up a basic `index.html` file with a placeholder title.
- Add a favicon and placeholder logo (optional).
- Commit changes to git with a conventional commit message (e.g., `feat: initial project structure`).
- Kill any existing nginx Docker container for the site before launching a new one.
- Launch the site using an nginx Docker container and open it in the browser for review.

### 2. GitHub Pages Configuration
- Create a `.github` directory and add a workflow for GitHub Pages deployment (if using Actions).
- Add or update `CNAME` if using a custom domain.
- Update repository settings for GitHub Pages (branch, folder).
- Commit changes to git with a conventional commit message (e.g., `chore: add GitHub Pages workflow`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 3. Basic Site Layout
- Design a simple, modern layout using HTML and CSS.
- Add a header with the site title: "Bean Tzu - The Art of Deal".
- Add a main content area for the quote and call to action.
- Add a section for reviews.
- Commit changes to git with a conventional commit message (e.g., `feat: add basic site layout`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 4. Random Quote Feature
- Create a JavaScript file to handle random quote selection.
- Write a list of modified Sun Tzu quotes with accounting references.
- Display a random quote on page load.
- Add a button to refresh the quote.
- Test quote refresh functionality.
- Commit changes to git with a conventional commit message (e.g., `feat: add random quote feature`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 5. Call to Action
- Add a prominent button or link to "Buy the Book".
- Link to a placeholder or external site for purchase.
- Style the call to action for visibility.
- Commit changes to git with a conventional commit message (e.g., `feat: add call to action`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 6. Reviews Section
- Write several reviews from major newspapers, altering names to include "Mew" (e.g., "The Mew York Times").
- Display reviews in a visually appealing format (cards, list, etc.).
- Test review display on different screen sizes.
- Commit changes to git with a conventional commit message (e.g., `feat: add reviews section`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 7. Styling and Responsiveness
- Refine CSS for a clean, modern look.
- Ensure the site is mobile-friendly and responsive.
- Test layout and features on multiple devices/screen sizes.
- Commit changes to git with a conventional commit message (e.g., `style: improve site styling and responsiveness`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 8. Final Touches
- Add meta tags for SEO and social sharing.
- Add accessibility features (alt text, ARIA labels).
- Proofread all text for clarity and humor.
- Commit changes to git with a conventional commit message (e.g., `chore: add SEO and accessibility improvements`).
- Launch the site using an nginx Docker container and open it in the browser for review.

### 9. Deployment
- Commit all changes and push to GitHub with a conventional commit message (e.g., `chore: deploy to GitHub Pages`).
- Verify GitHub Pages deployment.
- Test live site for all features.
- Launch the site using an nginx Docker container and open it in the browser for review.

### 10. Maintenance
- Document how to update quotes, reviews, and site content.
- Add instructions for future updates in README.md.
- Commit changes to git with a conventional commit message (e.g., `docs: update maintenance instructions`).
- Launch the site using an nginx Docker container and open it in the browser for review.

---
Each step should be tested before moving to the next. Commit frequently and verify changes on GitHub Pages as you go.
 