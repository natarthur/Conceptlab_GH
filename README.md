# ConceptLab Ghana

Version 1.0 — standalone Progressive Web App for interactive Mathematics and Science learning.

## Structure

- `index.html` — main application
- `manifest.json` — PWA installation settings
- `service-worker.js` — offline caching
- `css/style.css` — styling
- `js/app.js` — application navigation and PWA installation
- `js/fractions.js` — Fraction Builder
- `js/energy.js` — Energy Transformation Lab
- `js/assessment.js` — interactive assessment
- `icons/` — PWA icons

## Publish with GitHub Pages

1. Create a new GitHub repository named `ConceptLab-Ghana`.
2. Upload all files while preserving the folders.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save and wait for GitHub Pages to publish.
7. Open the published site on a phone.
8. Use the browser's install/add-to-home-screen option.

The first visit requires an internet connection so the application shell can be cached. After successful caching, the Version 1 application can open offline.

## Future expansion

The structure is designed for videos, animations, additional simulations, curriculum-aligned activities, and richer assessments.


## Version 1.1 — Learning-first prototype

The Fraction Builder now demonstrates the ConceptLab learning model:
**See it → Understand it → Connect representations → Practise → Get explanatory feedback → Try another method.**

Students can switch between Visual, Number & Place Value, Step-by-Step Division, and Real-Life explanations.
