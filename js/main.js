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
    software: 'Blender',
    engine: 'Cycles',
    topology: 'Clean / Production Ready',
    textures: 'PBR 4K'
  },
  project2: {
    title: 'Mechanical Component',
    domain: 'Mechanical',
    year: '2025',
    status: 'Completed',
    context: 'Detailed hard-surface mechanical component with complex geometry. Engineered for accuracy and visual clarity.',
    scope: [
      'Complex hard-surface modeling',
      'Technical accuracy and detail',
      'Wireframe visualization',
      'Multiple viewing angles'
    ],
    images: [
      'asset/img2.jpg',
      'asset/img2_b.jpg'
    ],
    software: 'Blender',
    engine: 'Cycles',
    topology: 'High Poly / Optimized',
    textures: 'PBR 2K'
  },
  project3: {
    title: 'Product Visualization',
    domain: 'Visualization',
    year: '2025',
    status: 'Completed',
    context: 'Product showcase with professional lighting setup and material studies. Designed for client presentation and marketing materials.',
    scope: [
      'Product modeling and refinement',
      'Advanced lighting design',
      'Material and texture exploration',
      'Detail close-ups and variations'
    ],
    images: [
      'asset/img3.jpg',
      'asset/img3_b.jpg'
    ],
    software: 'Blender',
    engine: 'Cycles',
    topology: 'Optimized',
    textures: 'PBR 4K'
  },
  project4: {
    title: 'Architectural Elements',
    domain: 'Architecture',
    year: '2025',
    status: 'Completed',
    context: 'Environmental and architectural modeling for game assets and architectural visualization. Designed for real-time engine integration.',
    scope: [
      'Architectural modeling',
      'Environment design',
      'Game-ready optimization',
      'Modular asset structure'
    ],
    images: [
      'asset/img4.jpg'
    ],
    software: 'Blender',
    engine: 'Eevee',
    topology: 'Game Ready',
    textures: 'Diffuse + Normal'
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
