

 // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  window.addEventListener('scroll', function() {
    let currentSection = '';
    sections.forEach(section => { 
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 8 && pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });


// Smooth scrolling for navbar links
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

// Smooth scroll to sections on link click
// Scroll reveal for sections

 const sections1 = document.querySelectorAll('.section');

    const showSections = () => {
      sections1.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', showSections);
    window.addEventListener('load', showSections);

 // Responsive canvas
    const canvas = document.getElementById('bg-effect');
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    function resizeCanvas() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dot objects
    const dots = [];
    const DOTS_COUNT = 250;
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 2 + Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        color: ' rgba(0, 0, 0, 0.147)'
      });
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);

      // Draw dots
      for (let d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }

      // Draw lines between close dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          let dx = dots[i].x - dots[j].x;
          let dy = dots[i].y - dots[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = " rgba(0, 0, 0, 0.147)";
            ctx.globalAlpha = 0.15 + (1 - dist / 120) * 0.2;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Move dots
      for (let d of dots) {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0 || d.x > W) d.dx *= -1;
        if (d.y < 0 || d.y > H) d.dy *= -1;
      }

      requestAnimationFrame(animate);
    }
    animate();

// Portfolio card reveal on scroll

document.addEventListener("DOMContentLoaded", function() {
  function revealPortfolioCards() {
    var cards = document.querySelectorAll('.portfolio-card');
    var portfolioSection = document.getElementById('portfolio');
    var sectionTop = portfolioSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      cards.forEach(function(card, i) {
        setTimeout(function() {
          card.classList.add('visible');
        }, 200 * i);
      });
      window.removeEventListener('scroll', revealPortfolioCards);
    }
  }
  window.addEventListener('scroll', revealPortfolioCards);
  revealPortfolioCards();
});

//  services  functionality

      document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('showManagementBtn1');
        var div = document.getElementById('managementServices1');
        btn.addEventListener('click', function() {
          div.style.display = div.style.display === 'none' ? 'block' : 'none';
        });
        var closeBtn = document.getElementById('hedenManagementBtn1');
        closeBtn.addEventListener('click', function() {
          div.style.display = 'none';
        });
      });
           document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('showManagementBtn2');
        var div = document.getElementById('managementServices2');
        btn.addEventListener('click', function() {
          div.style.display = div.style.display === 'none' ? 'block' : 'none';
        });
        var closeBtn = document.getElementById('hedenManagementBtn2');
        closeBtn.addEventListener('click', function() {
          div.style.display = 'none';
        });
      });
               document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('showManagementBtn3');
        var div = document.getElementById('managementServices3');
        btn.addEventListener('click', function() {
          div.style.display = div.style.display === 'none' ? 'block' : 'none';
        });
        var closeBtn = document.getElementById('hedenManagementBtn3');
        closeBtn.addEventListener('click', function() {
          div.style.display = 'none';
        });
      });


// Reviews reveal on scroll
        const reviews = document.querySelectorAll('.review');

  function revealOnScroll() {
    reviews.forEach(review => {
      const rect = review.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        review.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  revealOnScroll();
// Contact form validation  
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (name === '') {
      alert('Please enter your name.');
      valid = false;
    }
    if (email === '') {
      alert('Please enter your email.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      valid = false;
    }
    if (message === '') {
      alert('Please enter your message.');
      valid = false;
    }

    if (valid) {
      alert('Thank you for your message!');
      form.reset();
    }
  });
}); 

// Back to top button functionality
  window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > window.innerHeight / 2) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  document.getElementById('scrollToTopBtn').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  


