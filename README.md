# Caterina B. Leimer Saglio — Academic Website

A responsive static academic website designed for GitHub Pages.

## Files

- `index.html` — website content
- `styles.css` — layout and design
- `script.js` — mobile menu and scroll animations
- `assets/profile-placeholder.svg` — temporary profile image
- `assets/CV.pdf` — add your CV with this exact name

## Personalise before publishing

Search inside `index.html` and replace:

1. `YOUR_EMAIL@polimi.it`
2. Placeholder links written as `href="#"`
3. The selected publications and news
4. `assets/profile-placeholder.svg` with your profile photo
5. Add your CV as `assets/CV.pdf`

For the profile picture, you can:
- place a file such as `profile.jpg` inside `assets/`;
- change the image line in `index.html` to:
  `<img src="assets/profile.jpg" alt="Portrait of Caterina B. Leimer Saglio" />`

## Publish with GitHub Pages

### Option A — personal website

Create a repository named exactly:

`YOUR-GITHUB-USERNAME.github.io`

Upload all the files from this folder to the repository root.  
The website will be available at:

`https://YOUR-GITHUB-USERNAME.github.io`

### Option B — project website

Create a repository with any name, for example:

`academic-website`

Upload the files, then open:

`Settings → Pages → Build and deployment`

Choose:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The website will be available at:

`https://YOUR-GITHUB-USERNAME.github.io/academic-website/`

## Local preview

Double-click `index.html`, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
