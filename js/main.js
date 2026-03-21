/* ============================================
   Top Haircut – Fariba Ranaey
   JavaScript – Neon Noir Edition
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- Mobile Navigation ---
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('active');
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  }

  // --- Scroll Animations ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
  }

  // --- Gallery Lightbox ---
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');

  if (galleryItems.length > 0 && lightbox) {
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;

    function getVisibleItems() {
      return [...galleryItems].filter(item => item.style.display !== 'none');
    }

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightbox() {
      const visibleItems = getVisibleItems();
      const item = visibleItems[currentIndex];
      if (!item) return;

      const img = item.querySelector('img');
      const placeholder = item.querySelector('.placeholder-img');

      const existingImg = lightboxContent.querySelector('img');
      const existingPlaceholder = lightboxContent.querySelector('.placeholder-img');
      if (existingImg) existingImg.remove();
      if (existingPlaceholder) existingPlaceholder.remove();

      if (img) {
        const clone = img.cloneNode(true);
        lightboxContent.insertBefore(clone, lightboxClose);
      } else if (placeholder) {
        const clone = placeholder.cloneNode(true);
        clone.style.width = '600px';
        clone.style.height = '450px';
        clone.style.maxWidth = '90vw';
        clone.style.filter = 'none';
        lightboxContent.insertBefore(clone, lightboxClose);
      }
    }

    function navigate(direction) {
      const visibleItems = getVisibleItems();
      currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
      updateLightbox();
    }

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        const visibleIndex = visibleItems.indexOf(item);
        openLightbox(visibleIndex >= 0 ? visibleIndex : 0);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigate(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigate(1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  // --- Gallery Category Filter ---
  const filterButtons = document.querySelectorAll('.gallery-filters .category-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        document.querySelectorAll('.gallery-item').forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Services Category Filter ---
  const serviceBtns = document.querySelectorAll('.services-categories .category-btn');
  if (serviceBtns.length > 0) {
    serviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        serviceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        document.querySelectorAll('.price-table').forEach(table => {
          if (category === 'all' || table.dataset.category === category) {
            table.style.display = '';
          } else {
            table.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Contact Form ---
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Wird gesendet...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Gesendet!';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }

});
