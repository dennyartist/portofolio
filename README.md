# 3D Artist Portfolio

A professional, clean portfolio website for freelance 3D artists. Built with vanilla HTML, CSS, and JavaScript. Perfect for GitHub Pages deployment.

## Features

- **Professional Design**: Studio-level aesthetic with clean white background
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Portfolio**: Click portfolio items to view in lightbox with image navigation
- **Smooth Animations**: Polished transitions and hover effects
- **Keyboard Navigation**: Use arrow keys to navigate images, ESC to close
- **About Section**: Showcase your skills and expertise
- **Contact Links**: Easy ways for clients to reach you
- **GitHub Pages Ready**: Deploy directly from this repository

## Structure

```
├── index.html          # Main portfolio page
├── css/
│   └── style.css       # All styling (1400+ lines, well-organized)
├── js/
│   └── main.js         # Interactive functionality
└── asset/              # Your 3D renders and images
    ├── img1.jpg
    ├── img1_b.jpg
    └── ... (more images)
```

## Setup Instructions

### 1. Add Your Images

Replace placeholder images in the `asset/` folder with your 3D renders:
- `img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`, `img5.jpg`, `img6.jpg` (main images)
- `img1_b.jpg`, `img2_b.jpg`, etc. (additional views for lightbox)

Update image paths in `index.html` if using different names.

### 2. Customize Content

Edit `index.html` to update:
- Portfolio item titles and descriptions
- About section text
- Contact links (email, LinkedIn, Twitter, etc.)
- Footer copyright year/name

### 3. Deploy to GitHub Pages

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: 3D artist portfolio"
```

2. Create a GitHub repository (e.g., `username.github.io`)

3. Push to GitHub:
```bash
git remote add origin https://github.com/username/repository.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)

5. Your portfolio will be live at: `https://username.github.io` or `https://username.github.io/repository`

## Customization

### Colors
All colors are defined as CSS variables in `:root`. Edit `style.css` to change:
- `--color-bg`: Background color
- `--color-text`: Main text color
- `--color-accent`: Accent/button color

### Typography
Font family can be changed in the `body` selector. Currently using system fonts for performance.

### Spacing
CSS variables control all spacing. Adjust `--spacing-*` values for different layouts.

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Performance

- Pure HTML/CSS/JS (no dependencies)
- Optimized images recommended (WebP format supported)
- Lazy loading on images
- No external CDN dependencies

## License

Feel free to use this template for your portfolio.
