particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 500, // Ultra-high particle count
      "density": {
        "enable": true,
        "value_area": 2000 // Wider distribution
      }
    },
    "color": {
      "value": ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#1abc9c"] // Vibrant 6-color palette
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.5, // Thin outline for depth
        "color": "#ffffff" // White outline for contrast
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3, // Faster size animation
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": {
        "value": ["rgba(52,152,219,0.3)", "rgba(231,76,60,0.3)", "rgba(46,204,113,0.3)"] // Colored connections
      },
      "opacity": 0.5,
      "width": 1.5 // Thicker lines
    },
    "move": {
      "enable": true,
      "speed": 4, // Faster movement
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce-horizontal", // Enhanced 3D bounce
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 1500, // Stronger 3D attraction
        "rotateY": 1500
      },
      "warp": true // Experimental 3D warp effect
    },
    "twinkle": {
      "lines": {
        "enable": true, // Sparkling connections
        "frequency": 0.05,
        "opacity": 0.5
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "enable": true,
          "force": 60, // Stronger parallax
          "smooth": 30
        }
      },
      "onclick": {
        "enable": true,
        "mode": "repulse",
        "push": {
          "particles_nb": 10 // More particles affected
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 20,
        "duration": 1.5,
        "opacity": 0.9,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.8,
        "factor": 5 // Stronger repulsion
      },
      "grab": {
        "distance": 250,
        "line_linked": {
          "opacity": 0.8
        }
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": true
  }
});