document.addEventListener('DOMContentLoaded', function() {
  // Year in footer
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('#year, #year2');
  yearElements.forEach(el => {
    if (el) el.textContent = currentYear;
  });

  // Mobile hamburger menu
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.hamburger');
  
  if (menuToggle && siteNav && hamburger) {
    menuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.site-nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        siteNav.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !siteNav.contains(e.target)) {
        siteNav.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }

  // Menu filters with smooth animation
  const filterButtons = document.querySelectorAll('.chip');
  const menuCards = document.querySelectorAll('#menuCards .card');

  if (filterButtons.length > 0 && menuCards.length > 0) {
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Update active state
        filterButtons.forEach(function(b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter cards
        menuCards.forEach(function(card) {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(function() {
              card.style.transition = 'opacity 0.3s ease';
              card.style.opacity = '1';
            }, 50);
          } else {
            card.style.transition = 'opacity 0.3s ease';
            card.style.opacity = '0';
            setTimeout(function() {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Contact form + WhatsApp integration
  const form = document.getElementById('contactForm');
  const waLink = document.getElementById('waLink');
  const formMsg = document.getElementById('formMsg');
  const businessPhone = '+254700000000'; // Replace with actual WhatsApp number

  function updateWaLink() {
    if (!form) return;
    
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    
    if (name && phone && message) {
      const text = encodeURIComponent(
        'Order from Smokie Kenya:\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Order: ' + message
      );
      waLink.href = 'https://wa.me/' + businessPhone.replace(/[^0-9]/g, '') + '?text=' + text;
      waLink.style.opacity = '1';
      waLink.style.pointerEvents = 'auto';
    } else {
      waLink.style.opacity = '0.5';
      waLink.style.pointerEvents = 'none';
    }
  }

  if (form) {
    // Initialize WhatsApp link state
    waLink.style.opacity = '0.5';
    waLink.style.pointerEvents = 'none';
    
    // Update WhatsApp link on input
    form.addEventListener('input', updateWaLink);
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      
      // Clear previous messages
      formMsg.textContent = '';
      formMsg.classList.remove('success');
      
      // Validation
      if (name.length < 2) {
        showFormMessage('Please enter your full name (at least 2 characters).', 'error');
        return;
      }
      
      if (!/^[0-9+\-() ]{7,20}$/.test(phone)) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return;
      }
      
      if (message.length < 3) {
        showFormMessage('Please enter your order or message (at least 3 characters).', 'error');
        return;
      }
      
      // Success
      showFormMessage('Form validated! Click "Order on WhatsApp" to complete your order.', 'success');
      updateWaLink();
    });
  }

  // Helper function for form messages
  function showFormMessage(message, type) {
    if (formMsg) {
      formMsg.textContent = message;
      if (type === 'success') {
        formMsg.classList.add('success');
      } else {
        formMsg.classList.remove('success');
      }
    }
  }

  // Smooth scroll for internal links only (links that start with #)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Only apply to actual hash links, not dynamic URLs
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add loading states to buttons
  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (this.type === 'submit') {
        this.style.opacity = '0.7';
        setTimeout(function() {
          btn.style.opacity = '1';
        }, 1000);
      }
    });
  });
});