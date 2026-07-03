(function(){
  'use strict';

  /* ---------- NAV: scroll state + mobile toggle ---------- */
  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  function onScrollNav(){
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScrollNav, { passive:true });
  onScrollNav();

  navToggle.addEventListener('click', function(){
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- GENERIC REVEAL ON SCROLL ---------- */
  const revealTargets = document.querySelectorAll('.exp-card, .drive-card, .social-pill');
  const revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealTargets.forEach(function(el){ revealObserver.observe(el); });

  /* ---------- EXPERIENCE MODAL ---------- */
  const expData = {
    unitech: {
      years: '2023 — 2026',
      org: 'Unitech Studio',
      role: 'Lead Programmer / Community President — Major Contributor',
      sections: [
        {
          title: 'Roles held',
          items: [
            'Led the programming team across multiple studio builds, from architecture decisions to final code review.',
            'Served as Community President, setting the tone and direction for member activity and growth.',
            'Acted as the primary technical point of contact for cross-team collaboration.'
          ]
        },
        {
          title: 'Activities & contributions',
          items: [
            'Mentored newer members on JavaScript fundamentals and debugging practices.',
            'Planned and ran community sessions and study groups on web development topics.',
            'Reviewed and merged contributions from other student developers.',
            'Helped shape the studio\'s long-term technical roadmap.'
          ]
        },
        {
          title: 'Records created',
          items: [
            'Documentation for onboarding new programmers into studio workflows.',
            'A running archive of completed projects and their outcomes.',
            'Meeting notes and decision logs for major studio initiatives.'
          ]
        }
      ]
    },
    rachels: {
      years: '2024 — 2026',
      org: 'Rachels Computer Centre',
      role: 'Software & Graphic Designer / Computer Supervisor — at Rachels Global Venture',
      sections: [
        {
          title: 'Roles held',
          items: [
            'Supervised day-to-day computer lab operations and equipment upkeep.',
            'Designed graphics and software-facing materials for the centre\'s programs.',
            'Supported students and trainees working through Office Suite and basic computing coursework.'
          ]
        },
        {
          title: 'Activities & contributions',
          items: [
            'Built and maintained small software tools used internally by the centre.',
            'Created visual materials for promotions, signage, and class handouts.',
            'Trained learners on practical use of Word, Excel, and PowerPoint.',
            'Troubleshot hardware and software issues across the lab\'s machines.'
          ]
        },
        {
          title: 'Records created',
          items: [
            'Attendance and progress logs for computer literacy classes.',
            'A maintained inventory of lab hardware and software licenses.',
            'A design archive of materials produced for the centre.'
          ]
        }
      ]
    }
  };

  const expModal = document.getElementById('expModal');
  const expModalBody = document.getElementById('expModalBody');
  let lastFocused = null;

  function renderExp(key){
    const d = expData[key];
    if(!d) return;
    let html = '';
    html += '<span class="exp-modal-years">' + d.years + '</span>';
    html += '<h3 class="exp-modal-org">' + d.org + '</h3>';
    html += '<p class="exp-modal-role">' + d.role + '</p>';
    d.sections.forEach(function(sec){
      html += '<div class="exp-modal-section-title">' + sec.title + '</div>';
      html += '<ul class="exp-list">';
      sec.items.forEach(function(item){
        html += '<li><i class="bi bi-check2"></i><span>' + item + '</span></li>';
      });
      html += '</ul>';
    });
    expModalBody.innerHTML = html;
  }

  function openExpModal(key){
    lastFocused = document.activeElement;
    renderExp(key);
    expModal.classList.add('open');
    expModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = expModal.querySelector('.exp-modal-close');
    if(closeBtn) closeBtn.focus();
  }

  function closeExpModal(){
    expModal.classList.remove('open');
    expModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-exp]').forEach(function(card){
    card.addEventListener('click', function(){
      openExpModal(card.getAttribute('data-exp'));
    });
  });
  expModal.querySelectorAll('[data-close]').forEach(function(el){
    el.addEventListener('click', closeExpModal);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && expModal.classList.contains('open')) closeExpModal();
  });

  /* ---------- STACKED SCROLL: active panel highlight ---------- */
  const stackPanels = document.querySelectorAll('.stack-panel');
  const stackObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting && entry.intersectionRatio > 0.55){
        entry.target.classList.add('is-active');
      } else {
        entry.target.classList.remove('is-active');
      }
    });
  }, { threshold: [0, 0.55, 1] });
  stackPanels.forEach(function(p){ stackObserver.observe(p); });

})();
