const officeSkillContent = {
  word: {
    title: "Word document design",
    text: "Professional reports, proposals, forms, CVs, letterheads, and structured document formatting.",
    level: "92%"
  },
  excel: {
    title: "Excel reporting systems",
    text: "Clean spreadsheets, tables, formulas, dashboards, budgets, trackers, and readable business data layouts.",
    level: "88%"
  },
  powerpoint: {
    title: "PowerPoint presentation design",
    text: "Pitch decks, training slides, portfolio presentations, visual storytelling, and modern slide templates.",
    level: "94%"
  },
  access: {
    title: "Access database organization",
    text: "Simple database planning, forms, records, tables, and structured information management for office workflows.",
    level: "82%"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const webdevCenter = document.querySelector(".webdev-command-center");
  const webdevCounters = document.querySelectorAll("[data-webdev-count]");
  const showcase = document.querySelector(".creative-office-showcase");
  const launchpad = document.querySelector(".expertise-launchpad");
  const skillButtons = document.querySelectorAll("[data-office-skill]");
  const preview = document.querySelector("[data-office-preview]");
  const launchpadCounters = document.querySelectorAll("[data-launchpad-count]");

  const animateCounter = (counter, dataName) => {
    const target = Number(counter.dataset[dataName]);
    const duration = 900;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}+`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `${target}+`;
      }
    };

    requestAnimationFrame(tick);
  };

  if (skillButtons.length && preview) {
    const progressBar = preview.querySelector(".office-progress span");

    skillButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const skill = officeSkillContent[button.dataset.officeSkill];

        if (!skill) {
          return;
        }

        skillButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        preview.querySelector("h3").textContent = skill.title;
        preview.querySelector("p").textContent = skill.text;

        if (progressBar) {
          progressBar.style.width = skill.level;
        }
      });
    });

    if (progressBar) {
      progressBar.style.width = officeSkillContent.word.level;
    }
  }

  if ((showcase || launchpad) && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          if (entry.target === webdevCenter) {
            webdevCounters.forEach((counter) => animateCounter(counter, "webdevCount"));
          }

          if (entry.target === launchpad) {
            launchpadCounters.forEach((counter) => animateCounter(counter, "launchpadCount"));
          }

          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    if (webdevCenter) {
      revealObserver.observe(webdevCenter);
    }

    if (launchpad) {
      revealObserver.observe(launchpad);
    }

    if (showcase) {
      revealObserver.observe(showcase);
    }
  } else {
    if (webdevCenter) {
      webdevCenter.classList.add("is-visible");
      webdevCounters.forEach((counter) => animateCounter(counter, "webdevCount"));
    }

    if (launchpad) {
      launchpad.classList.add("is-visible");
      launchpadCounters.forEach((counter) => animateCounter(counter, "launchpadCount"));
    }

    if (showcase) {
      showcase.classList.add("is-visible");
    }
  }
});
