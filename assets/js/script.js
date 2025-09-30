$(document).ready(function () {
    // Menu toggle functionality
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and load event handlers
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll to top button
        const scrollTopBtn = document.querySelector('#scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 60) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }

        // Scroll spy for navigation
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump

    const targetID = this.getAttribute('href').substring(1); // Get section ID
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust offset for navbar height
        behavior: 'smooth'
      });
    }
  });
});
});

// Page visibility change handler
document.addEventListener('visibilitychange', function () {
    const favicon = $("#favicon");
    if (document.visibilityState === "visible") {
        document.title = "SONA | MCA";
        if (favicon.length) {
            favicon.attr("href", "assets/images/favicon1.png");
        }
    } else {
        document.title = "Register Now !";
        if (favicon.length) {
            favicon.attr("href", "assets/images/celebration.jpg");
        }
    }
});

// Typed.js effect (only if element exists)
const typingElement = document.querySelector(".typing-text");
if (typingElement && typeof Typed !== 'undefined') {
    var typed = new Typed(".typing-text", {
        strings: [
            "Byte Battle",
            "Viz wiz",
            "Brain spark",
            "Mystery Hunt",
            "Web Vision",
            "Info Fusion",
            "Hidden Harmony",
            "No Oil No Boil",
            "Connect & Crack",  // issue fixed
            "Beyond the Click",
            "Pitch Perfect"
        ].map(str => str.replace(/&/g, "&amp;")), // escape &
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
}


// VanillaTilt effect (only if elements exist)
const tiltElements = document.querySelectorAll(".tilt");
if (tiltElements.length > 0 && typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(tiltElements, {
        max: 15,
    });
}

// Pre-loader functionality
function loader() {
  const loaderContainer = document.getElementById("preloader");
  if (loaderContainer) {
    loaderContainer.classList.add("fade-out");
  }
}

function fadeOut() {
  setTimeout(loader, 500); // fade out after 0.5s
}

window.onload = fadeOut;

// Unified menu and navigation functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Menu icon click handler
if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Unified scroll handler
let isScrolling = false;

function handleScroll() {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            // Scroll sections active link
            if (sections.length > 0 && navLinks.length > 0) {
                sections.forEach(sec => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop - 150;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset && top < offset + height) {
                        navLinks.forEach(links => {
                            links.classList.remove('active');
                        });
                        const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            }

            // Sticky navbar
            const header = document.querySelector('.header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 100);
            }

            // Remove menu icon navbar when scrolling
            if (menuIcon && navbar) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }

            isScrolling = false;
        });
    }
    isScrolling = true;
}

window.addEventListener('scroll', handleScroll);



// ScrollReveal animations (consolidated and optimized)
if (typeof ScrollReveal !== 'undefined') {
    // Main ScrollReveal instance
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        delay: 200,
        reset: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    // Home section animations
    sr.reveal('.home .content h1', { delay: 100 });
    sr.reveal('.home .content h2', { delay: 200 });
    sr.reveal('.home .content h3', { delay: 200 });
    sr.reveal('.home .content h4', { delay: 200 });
    sr.reveal('.home .content h5', { delay: 200 });
    sr.reveal('.home .content p', { delay: 200 });
    sr.reveal('.home .content .btn', { delay: 200 });

    // Social media animations
    sr.reveal('.home .linkedin', { delay: 600 });
    sr.reveal('.home .facebook', { delay: 600 });
    sr.reveal('.home .whatsapp', { delay: 600 });
    sr.reveal('.home .instagram', { delay: 600 });

    // About section animations
    sr.reveal('.about .content h3', { delay: 200 });
    sr.reveal('.about .content .tag', { delay: 200 });
    sr.reveal('.about .content p', { delay: 200 });
    sr.reveal('.about .content .box-container', { delay: 200 });

 
    // Event organizer sections
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img img, .services-container, .portfolio-box, .event-wrapper, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img img', { origin: 'left' });
    sr.reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}

// Proper ScrollReveal initialization for timeline section
document.addEventListener('DOMContentLoaded', function() {
    // Check if ScrollReveal is loaded
    if (typeof ScrollReveal !== 'undefined') {
        // Initialize ScrollReveal with base configuration
        const sr = ScrollReveal({
            duration: 800,
            distance: '50px',
            easing: 'ease-out',
            reset: false,
            viewFactor: 0.2,
            mobile: true
        });

        // Left box animations
        sr.reveal('.left-box', {
            origin: 'left',
            delay: 200,
            interval: 400,
            beforeReveal: function(el) {
                el.style.opacity = 1;
            }
        });

        // Right box animations
        sr.reveal('.right-box', {
            origin: 'right',
            delay: 200,
            interval: 400,
            beforeReveal: function(el) {
                el.style.opacity = 1;
            }
        });

        // Action button animation
        sr.reveal('.action-buttons', {
            origin: 'bottom',
            delay: 600,
            beforeReveal: function(el) {
                el.style.opacity = 1;
            }
        });
    } else {
        console.warn('ScrollReveal library not loaded - falling back to simple fade-in');
        // Fallback for when ScrollReveal isn't available
        const elements = document.querySelectorAll('.left-box, .right-box, .action-buttons');
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transition = 'opacity 0.5s ease';
        });
    }
});

// Error handling for missing elements
function safeElementOperation(selector, operation) {
    try {
        const element = document.querySelector(selector);
        if (element && typeof operation === 'function') {
            operation(element);
        }
    } catch (error) {
        console.warn('Safe element operation failed for:', selector, error);
    }
}

// general info 
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal with custom settings
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    // Reveal elements
    sr.reveal('.header-wrapper', { 
        origin: 'top',
        distance: '80px'
    });
    
    sr.reveal('.section-subtitle', { 
        delay: 300,
        origin: 'bottom'
    });
    
    sr.reveal('.timeline-box', { 
        interval: 200,
        origin: 'bottom'
    });
    
    sr.reveal('.action-buttons', { 
        delay: 400,
        origin: 'bottom'
    });

    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-box');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.info-card').style.transform = 'translateY(-5px)';
            this.querySelector('.info-card').style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.info-card').style.transform = 'translateY(0)';
            this.querySelector('.info-card').style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Disable context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable developer tools shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) || // Ctrl+Shift+C
            (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
            (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) { // Ctrl+U
            e.preventDefault();
        }
    });
});


// Handle potential errors gracefully
window.addEventListener('error', function(e) {
    console.warn('JavaScript error caught:', e.message, 'at', e.filename, ':', e.lineno);
    return true; // Prevent default error handling
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.warn('Unhandled promise rejection:', e.reason);
    e.preventDefault(); // Prevent default error handling
});

// Utility function to check if library is loaded
function isLibraryLoaded(libraryName) {
    return typeof window[libraryName] !== 'undefined';
}

// Initialize libraries
function initializeLibraries() {
    // Check and initialize VanillaTilt
    if (isLibraryLoaded('VanillaTilt')) {
        const tiltElements = document.querySelectorAll(".tilt");
        if (tiltElements.length > 0) {
            try {
                VanillaTilt.init(tiltElements, {
                    max: 15,
                });
            } catch (error) {
                console.warn('VanillaTilt initialization failed:', error);
            }
        }
    }
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLibraries);
} else {
    initializeLibraries();
}

// Initialize effects
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
}

// Scroll to top
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-top-btn');
    if (scrollBtn) {
        scrollBtn.classList.toggle('active', window.scrollY > 100);
    }
});

document.querySelector('.scroll-top-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// SYMPO INTRO MODULE
document.addEventListener("DOMContentLoaded", () => {
    // Initialize VanillaTilt.js for all cards with data-tilt attribute
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,
            speed: 300,
            glare: true,
            "max-glare": 0.1,
            scale: 1.05
        });
    }
    
    // Demo button functionality
    const aiDemoButton = document.getElementById("ai-demo-button");
    if (aiDemoButton) {
        aiDemoButton.addEventListener("click", () => {
            alert("During the symposium, this will open the SympoTech AI chat interface. Look for the chat icon in the bottom right corner!");
        });
    }
    
    // Add scroll animations to AI elements
    const animateAIElements = () => {
        const aiElements = document.querySelectorAll('.ai-feature-card, .ai-step-card, .ai-cta-card');
        aiElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.ai-feature-card, .ai-step-card, .ai-cta-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });
    
    window.addEventListener('scroll', animateAIElements);
    animateAIElements(); // Run once on load
});

// Event cards tilt effect
document.addEventListener('DOMContentLoaded', function() {
    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card01');
    
    // Add tilt effect to each card
    eventCards.forEach(card => {
        card.addEventListener('mousemove', tiltCard);
        card.addEventListener('mouseleave', resetCard);
    });
    
    function tiltCard(e) {
        const card = this;
        const cardRect = card.getBoundingClientRect();
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = cardRect.left + cardWidth/2;
        const centerY = cardRect.top + cardHeight/2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Calculate rotation (limited to 10 degrees)
        const rotateX = (mouseY / cardHeight * 40).toFixed(2);
        const rotateY = (mouseX / cardWidth * -40).toFixed(2);
        
        // Apply transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Add subtle glow effect instead of moving shadow
        const glowX = (mouseX / cardWidth * 20).toFixed(2);
        const glowY = (mouseY / cardHeight * 20).toFixed(2);
        card.style.boxShadow = `
            ${glowX}px ${glowY}px 30px rgba(93, 0, 255, 0.2),
            0 10px 20px rgba(0, 0, 0, 0.1)
        `;
    }
    
    function resetCard() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    }
});


// testimonial 
    document.addEventListener('DOMContentLoaded', function() {
      const track = document.querySelector('.carousel-track');
      const cards = document.querySelectorAll('.testimonial-card');
      const dots = document.querySelectorAll('.dot');
      
      let cardWidth = cards[0].offsetWidth + 30; // Increased margin
      let currentPosition = 0;
      let autoSlideInterval;
      let isDragging = false;
      let startPosition = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let animationID;
      const totalCards = cards.length;
      const visibleCards = 3;
      const totalGroups = Math.ceil(totalCards / visibleCards);

      // Clone first few cards and append to end for infinite loop
      const firstCards = Array.from(cards).slice(0, visibleCards);
      firstCards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
      });

      // Touch events for mobile
      cards.forEach(card => {
        card.addEventListener('touchstart', touchStart);
        card.addEventListener('touchend', touchEnd);
        card.addEventListener('touchmove', touchMove);
      });

      // Mouse events for desktop
      track.addEventListener('mousedown', touchStart);
      track.addEventListener('mouseup', touchEnd);
      track.addEventListener('mouseleave', touchEnd);
      track.addEventListener('mousemove', touchMove);

      function touchStart(e) {
        if (e.type === 'touchstart') {
          startPosition = e.touches[0].clientX;
        } else {
          startPosition = e.clientX;
          e.preventDefault();
        }
        isDragging = true;
        clearInterval(autoSlideInterval);
        animationID = requestAnimationFrame(animation);
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
      }

      function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        
        if (movedBy < -100 && currentPosition < totalCards) {
          currentPosition++;
        } else if (movedBy > 100 && currentPosition > 0) {
          currentPosition--;
        }
        
        setPositionByIndex();
        track.style.cursor = 'grab';
        resetAutoSlide();
      }

      function touchMove(e) {
        if (!isDragging) return;
        const currentPositionX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        currentTranslate = prevTranslate + currentPositionX - startPosition;
      }

      function animation() {
        if (isDragging) {
          track.style.transform = `translateX(${currentTranslate}px)`;
          requestAnimationFrame(animation);
        }
      }

      function setPositionByIndex() {
        if (currentPosition < 0) currentPosition = totalCards;
        if (currentPosition > totalCards) currentPosition = 0;
        
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        
        // Update dots - this is the fixed part for dot navigation
        const activeDot = Math.floor((currentPosition % totalCards) / visibleCards);
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === activeDot);
        });
        
        // Handle infinite loop
        if (currentPosition === totalCards) {
          setTimeout(() => {
            track.style.transition = 'none';
            currentPosition = 0;
            track.style.transform = `translateX(0)`;
            setTimeout(() => {
              track.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
          }, 500);
        } else if (currentPosition < 0) {
          setTimeout(() => {
            track.style.transition = 'none';
            currentPosition = totalCards - 1;
            track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
            setTimeout(() => {
              track.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
          }, 500);
        }
        
        prevTranslate = -currentPosition * cardWidth;
        currentTranslate = prevTranslate;
      }

      function nextSlide() {
        currentPosition++;
        setPositionByIndex();
      }

      function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
      }

      function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
      }

      function goToSlide(index) {
        currentPosition = index * visibleCards;
        setPositionByIndex();
        resetAutoSlide();
      }

      // Dot navigation
      dots.forEach(dot => {
        dot.addEventListener('click', function() {
          const slideIndex = parseInt(this.getAttribute('data-index'));
          goToSlide(slideIndex);
        });
      });

      // Initialize
      setPositionByIndex();
      startAutoSlide();

      // Handle window resize
      function handleResize() {
        const newCardWidth = cards[0].offsetWidth + 30;
        if (Math.abs(cardWidth - newCardWidth) > 10) {
          cardWidth = newCardWidth;
          setPositionByIndex();
        }
      }

      // Debounce resize handler
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
      });
    });

document.addEventListener("DOMContentLoaded", function () {
  const devImages = document.querySelectorAll(".event-slide img");

  devImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.08)";
      img.style.transition = "transform 0.4s ease, filter 0.3s ease";
      img.style.filter = "brightness(1.1)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.filter = "brightness(1)";
    });
  });
});


