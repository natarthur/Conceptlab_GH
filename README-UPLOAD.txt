# ConceptLab Ghana — Beta 1.1 Updated Missing Files

These files complete the re-engineered 1.1 architecture.

Upload/replace:
- js/data.js — ADD
- js/engine.js — ADD
- js/simulations.js — ADD
- js/games.js — REPLACE with this version
- js/assessment.js — REPLACE with this version
- service-worker.js — REPLACE with this version

Keep the existing:
- index.html
- css/style.css
- manifest.json

Important:
The current re-engineered index.html must also load data.js, engine.js and simulations.js before app.js.
If your current index.html does not contain those three script tags, replace index.html with the index.html from the full re-engineered package.

Do not upload this ZIP file itself into the repository. Extract it and upload the individual files to their matching locations.
