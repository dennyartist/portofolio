// Project data structure
const projectsData = {
  project1: {
    title: 'Climbing Carabiner - Hard-Surface Product Modeling',
    domain: 'Product Design',
    year: '2025',
    status: 'Completed',
    context: 'Personal hard-surface modeling project focusing on accurate mechanical proportions and clean, production-ready topology. Designed as a realistic product asset suitable for visualization, presentation, and downstream pipeline use.',
    scope: [
      'Full pipeline: hard-surface modeling, retopology, and final rendering',
      'Emphasis on clean topology, edge control, and dimensional accuracy',
      'High-detail asset prepared for professional product visualization workflows'
    ],
    images: [
      'assets/modeling/carabiner/carabiner-1.webp',
      'assets/modeling/carabiner/carabiner-2.webp',
      'assets/modeling/carabiner/carabiner-3.webp'
    ],
    software: 'Blender & Substance Painter',
    engine: 'Cycles',
    topology: 'Clean / Production Ready',
    textures: 'PBR 4K'
  },
  project2: {
    title: 'Hand Fan | Consumer Product Hard-Surface Modeling',
    domain: 'Product Design',
    year: '2025',
    status: 'Completed',
    context: 'Personal study focused on translating compact consumer electronics into a production-ready 3D asset. The project emphasizes mechanical plausibility, proportion accuracy, and efficient topology suitable for real-time visualization or product presentation.',
    scope: [
      'End-to-end 3D modeling based on functional product logic',
      'Hard-surface modeling with clean subdivision workflow',
      'UV layout preparation for texture or render pipelines',
      'Asset readiness for web, real-time, or marketing renders'
    ],
    images: [
      'assets/modeling/hand_fan/hand_fan-1.webp',
      'assets/modeling/hand_fan/hand_fan-2.webp',
      'assets/modeling/hand_fan/hand_fan-3.webp'
    ],
    software: 'Blender & Substance Painter',
    engine: 'Cycles',
    topology: 'Clean / Production Ready',
    textures: 'PBR 4K'
  },
  project3: {
    title: 'Neck Fan | Wearable Product 3D Modeling with Structural Accuracy',
    domain: 'Product Design',
    year: '2025',
    status: 'Completed',
    context: 'Personal project exploring wearable consumer product design with asymmetric and curved forms. The focus is on maintaining ergonomic proportions while ensuring clean geometry and manufacturable detailing for visualization or prototyping purposes.',
    scope: [
      'Detailed hard-surface modeling of a wearable product',
      'Emphasis on curvature continuity and surface cleanliness',
      'Material and texture exploration',
      'Prepared for presentation renders, real-time engines, or e-commerce visualization'
    ],
    images: [
      'assets/modeling/neck_fan/neck_fan-1.webp',
      'assets/modeling/neck_fan/neck_fan-2.webp'
    ],
    software: 'Blender & Substance Painter',
    engine: 'Cycles',
    topology: 'Clean / Production Ready',
    textures: 'PBR 4K'
  },
  project4: {
    title: 'Macroboard | Product Visualization',
    domain: 'Product Visualization',
    year: '2026',
    status: 'Completed',
    context: 'End-to-end macroboard product visualization, fully modeled, textured, and rendered by a single artist, featuring a clean product render, dual variants with exposed switches, and an exploded view to highlight internal structure in a minimal, industrial style.',
    scope: [
      'Hard-surface modeling',
      'Texturing and material setup',
      'Lighting and render composition',
      'Exploded-view visualization'
    ],
    images: [
      'assets/modeling/macroboard/macroboard-1.webp',
      'assets/modeling/macroboard/macroboard-2.webp',
      'assets/modeling/macroboard/macroboard-3.webp'
    ],
    software: 'Blender',
    engine: 'Cycles',
    topology: 'Render-oriented',
    textures: 'Procedural'
  },
  project5: {
    title: 'Technical Rendering',
    domain: 'Technical',
    year: '2025',
    status: 'Completed',
    context: 'Complex technical asset with advanced PBR texturing and material workflow. Showcasing realistic rendering and surface detail.',
    scope: [
      'PBR material development',
      'Technical texture mapping',
      'Complex geometry handling',
      'Detail and close-up documentation'
    ],
    images: [
      'asset/img5.jpg',
      'asset/img5_b.jpg'
    ],
    software: 'Blender',
    engine: 'Cycles',
    topology: 'Production Ready',
    textures: 'PBR 8K'
  },
  project6: {
    title: 'Studio Lighting Setup',
    domain: 'Studio',
    year: '2025',
    status: 'Completed',
    context: 'Professional studio setup demonstrating advanced lighting techniques and material presentation. Client-ready visualization.',
    scope: [
      'Studio lighting design',
      'Material showcase',
      'Professional render setup',
      'Multiple lighting variations'
    ],
    images: [
      'asset/img6.jpg'
    ],
    software: 'Blender',
    engine: 'Cycles',
    topology: 'Optimized',
    textures: 'PBR 4K'
  }
};

// DOM Elements
const portfolioItems = document.querySelectorAll('.portfolio-item');
const projectModal = document.querySelector('.project-modal');
const modalClose = document.querySelector('.modal-close');
const galleryImg = document.querySelector('.gallery-img');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');
const galleryThumbs = document.querySelector('.gallery-thumbs');

let currentProjectId = null;
let currentImageIndex = 0;
let currentImages = [];

// Open project modal
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectId = item.dataset.project;
    openProjectModal(projectId);
  });
});

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  currentProjectId = projectId;
  currentImages = project.images;
  currentImageIndex = 0;

  // Update header
  document.querySelector('.project-title').textContent = project.title;
  document.querySelector('.identifier-item .domain').textContent = project.domain;
  document.querySelector('.identifier-item .year').textContent = project.year;
  document.querySelector('.identifier-item .status').textContent = project.status;

  // Update sections
  document.querySelector('.project-section .context').textContent = project.context;

  const scopeList = document.querySelector('.scope-list');
  scopeList.innerHTML = project.scope
    .map(item => `<li>${item}</li>`)
    .join('');

  // Update specs
  document.querySelector('.spec-value.software').textContent = project.software;
  document.querySelector('.spec-value.engine').textContent = project.engine;
  document.querySelector('.spec-value.topology').textContent = project.topology;
  document.querySelector('.spec-value.textures').textContent = project.textures;

  // Update gallery
  renderGalleryThumbs();
  showImage(0);

  // Show modal
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
  currentProjectId = null;
}

function renderGalleryThumbs() {
  galleryThumbs.innerHTML = currentImages
    .map((img, idx) => {
      const thumbClass = idx === 0 ? 'thumb active' : 'thumb';
      return `<div class="${thumbClass}" data-index="${idx}">
        <img src="${img}" alt="Image ${idx + 1}" loading="lazy">
      </div>`;
    })
    .join('');

  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.index);
      showImage(idx);
    });
  });
}

function showImage(index) {
  currentImageIndex = index;
  galleryImg.src = currentImages[index];

  // Update active thumbnail
  document.querySelectorAll('.thumb').forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentImageIndex);
}

// Event listeners
modalClose.addEventListener('click', closeProjectModal);
galleryNext.addEventListener('click', nextImage);
galleryPrev.addEventListener('click', prevImage);

projectModal.addEventListener('click', e => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!projectModal.classList.contains('active')) return;

  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeProjectModal();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target && link.getAttribute('href') !== '#') {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
