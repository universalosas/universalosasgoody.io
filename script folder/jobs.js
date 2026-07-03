document.getElementById('yr').textContent = new Date().getFullYear();

const cursor = document.getElementById('cursor');
let mx = -100, my = -100;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
document.querySelectorAll('a, button, .role-card, .work-card, .skill-group, .social-link').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* ── Hero Canvas: Starfield ── */
(function() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  const stars = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 180; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + .3,
      speed: Math.random() * .0002 + .00005,
      opacity: Math.random() * .6 + .2,
      twinkle: Math.random() * Math.PI * 2
    });
  }

  let t = 0;
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += .016;
    stars.forEach(s => {
      s.twinkle += s.speed * 80;
      const alpha = s.opacity * (.7 + .3 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,210,255,${alpha})`;
      ctx.fill();
    });

    /* glowing orbs */
    const orbs = [
      { x: .2, y: .3, r: 180, color: '124,58,237' },
      { x: .8, y: .6, r: 220, color: '0,200,230' },
      { x: .5, y: .9, r: 160, color: '168,85,247' }
    ];
    orbs.forEach(o => {
      const grad = ctx.createRadialGradient(
        o.x * canvas.width, o.y * canvas.height, 0,
        o.x * canvas.width, o.y * canvas.height, o.r
      );
      grad.addColorStop(0, `rgba(${o.color},.12)`);
      grad.addColorStop(1, `rgba(${o.color},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    requestAnimationFrame(drawStars);
  }
  drawStars();
})();

/* ── Role Card Particle Canvas ── */
document.querySelectorAll('.role-card').forEach(card => {
  const canvas = card.querySelector('.card-canvas');
  const ctx = canvas.getContext('2d');
  const colorStr = card.dataset.particleColor || '124,58,237';
  const particles = [];
  let animId = null;
  let active = false;

  function resize() {
    canvas.width  = card.offsetWidth;
    canvas.height = card.offsetHeight;
  }

  function spawnParticle() {
    particles.push({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vy: -(Math.random() * 1.2 + .4),
      vx: (Math.random() - .5) * .6,
      r: Math.random() * 2.5 + 1,
      life: 1,
      decay: Math.random() * .008 + .004
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (active && particles.length < 60) spawnParticle();

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorStr},${p.life * .7})`;
      ctx.fill();
    }

    if (active || particles.length > 0) animId = requestAnimationFrame(animate);
  }

  card.addEventListener('mouseenter', () => {
    resize();
    active = true;
    if (!animId) animate();
  });
  card.addEventListener('mouseleave', () => {
    active = false;
    setTimeout(() => { animId = null; }, 1200);
  });
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: .12 });
revealEls.forEach(el => io.observe(el));

const statNums = document.querySelectorAll('.stat-num[data-count]');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.innerHTML = Math.round(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 28);
    statObserver.unobserve(el);
  });
}, { threshold: .5 });
statNums.forEach(el => statObserver.observe(el));

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(10,10,15,.88)' : 'rgba(10,10,15,.55)';
});


(function() {
  var cmSection = document.getElementById('cinematic-marquee');
  var cmTrack = document.getElementById('cmTrack');
  if (!cmSection || !cmTrack) return;

  var baseDuration = 26;
  var minDuration = 7;
  var boostTimer = null;

  function setSpeed(duration) {
    cmTrack.style.animationDuration = duration + 's';
  }

  window.addEventListener('scroll', function() {
    var speedFactor = Math.min(Math.abs(window.scrollY - (window._cmLastY || 0)) / 12, 1);
    window._cmLastY = window.scrollY;
    var duration = baseDuration - (baseDuration - minDuration) * speedFactor;
    setSpeed(duration);

    clearTimeout(boostTimer);
    boostTimer = setTimeout(function() {
      setSpeed(baseDuration);
    }, 500);
  }, { passive: true });

  cmSection.addEventListener('mouseenter', function() {
    cmSection.classList.add('cm-paused');
  });
  cmSection.addEventListener('mouseleave', function() {
    cmSection.classList.remove('cm-paused');
  });
})();
