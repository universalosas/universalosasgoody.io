document.getElementById('showButton').addEventListener('click', function() {
    const slidingDiv = document.getElementById('slidingDiv');
  
    // Remove the hidden class to make the div visible
    slidingDiv.classList.remove('hidden');
  
    // Use a timeout to allow the display change to take effect before animating
    setTimeout(() => {
        slidingDiv.style.top = '0';  // Slide down into view
        slidingDiv.style.opacity = '1';  // Fade in
    }, 50);
  });

  const textElement = document.getElementById('text');
  const textContainer = document.querySelector('.text-container');
  const toggleButton = document.getElementById('toggle');
  
  let isExpanded = false;
  
  // Full text
  const fullText = textElement.textContent;
  
  // Extract first 15 words
  const shortText = fullText.split(' ').slice(0, 40).join(' ') + '...';
  
  // Set the short text by default
  textElement.textContent = shortText;
  textContainer.classList.add('collapsed'); // Add initial collapsed state
  
  // Function to toggle the text display
  function toggleText() {
    if (isExpanded) {
      // Collapse to short text
      textElement.textContent = shortText;
      textContainer.classList.add('collapsed');
      textContainer.classList.remove('expanded');
      toggleButton.innerHTML = '<i class="bi bi-chevron-down"></i>';
    } else {
      // Expand to full text
      textElement.textContent = fullText;
      textContainer.classList.add('expanded');
      textContainer.classList.remove('collapsed');
      toggleButton.innerHTML = '<i class="bi bi-chevron-up"></i>';
    }
    isExpanded = !isExpanded;
  }
  
  // Add click event listener to the toggle button
  toggleButton.addEventListener('click', toggleText);


  window.addEventListener('load', () => {
    const div = document.querySelector('.animate-in-page-load');
    div.style.animationPlayState = 'running';
  });

      const x7QpL2vMxRs9 = document.querySelector("[data-x4NqL8vPmRs2]");
    const z4VmR8qLpNx5 = document.querySelector("[data-k9VpL2mQxRs8]");
    const p8LnQ2vMxRz6 = document.querySelectorAll(".a7XpM4qLnVz9");
    const m3VqL9pXrNz7 = document.querySelectorAll("[data-z8VpL2qMxRn5]");

    if (x7QpL2vMxRs9 && z4VmR8qLpNx5) {
      x7QpL2vMxRs9.addEventListener("click", () => {
        z4VmR8qLpNx5.classList.toggle("t8NqL2vPxRm5");
      });

      z4VmR8qLpNx5.querySelectorAll("a").forEach((q9LmP2vRxNz3) => {
        q9LmP2vRxNz3.addEventListener("click", () => {
          z4VmR8qLpNx5.classList.remove("t8NqL2vPxRm5");
        });
      });
    }

    const v6QmL3pRxNz8 = new IntersectionObserver((x8LpQ4vMzRs2) => {
      x8LpQ4vMzRs2.forEach((l2QpV9mXrNz5) => {
        if (l2QpV9mXrNz5.isIntersecting) {
          l2QpV9mXrNz5.target.classList.add("t8NqL2vPxRm5");
          v6QmL3pRxNz8.unobserve(l2QpV9mXrNz5.target);
        }
      });
    }, { threshold: 0.18 });

    p8LnQ2vMxRz6.forEach((n7VpQ2mLxRs8) => v6QmL3pRxNz8.observe(n7VpQ2mLxRs8));

    const y5LqN8vPxRt3 = new IntersectionObserver((r6VpL2mQxNz9) => {
      r6VpL2mQxNz9.forEach((k8QmP4vLxNs7) => {
        if (!k8QmP4vLxNs7.isIntersecting) return;

        const t2VmL9qPxRz4 = k8QmP4vLxNs7.target;
        const d4QpN8vMxRs6 = Number(t2VmL9qPxRz4.dataset.z8VpL2qMxRn5);
        let b9LmQ2vRxNz5 = 0;
        const c7VpL4qMxRs8 = Math.max(1, Math.floor(d4QpN8vMxRs6 / 42));

        const w3QnP8vLxMz6 = setInterval(() => {
          b9LmQ2vRxNz5 += c7VpL4qMxRs8;
          if (b9LmQ2vRxNz5 >= d4QpN8vMxRs6) {
            b9LmQ2vRxNz5 = d4QpN8vMxRs6;
            clearInterval(w3QnP8vLxMz6);
          }
          t2VmL9qPxRz4.textContent = `${b9LmQ2vRxNz5}+`;
        }, 22);

        y5LqN8vPxRt3.unobserve(t2VmL9qPxRz4);
      });
    }, { threshold: 0.8 });

    m3VqL9pXrNz7.forEach((h6QvL2pMxNs9) => y5LqN8vPxRt3.observe(h6QvL2pMxNs9));

const p7LmQ2vRxNz9 = document.getElementById("x9QmL2vNpRz8");

  const k4VnL8qMpRs2 = [
    "I'm Ready to Build for Your Brand.",
    "I'm Ready to Deploy for Your Brand.",
    "I'm Ready to Plan with Your Brand."
  ];

  let z8QpL3vMxRn6 = 0;
  let n5LmR9qVxPs4 = 0;
  let b2QxP8vLmNz7 = true;

  function t6VpL2mQxRs9() {
    const y9LmQ4vPxNz3 = k4VnL8qMpRs2[z8QpL3vMxRn6];

    if (b2QxP8vLmNz7) {
      p7LmQ2vRxNz9.textContent = y9LmQ4vPxNz3.slice(0, n5LmR9qVxPs4 + 1);
      n5LmR9qVxPs4++;

      if (n5LmR9qVxPs4 === y9LmQ4vPxNz3.length) {
        b2QxP8vLmNz7 = false;
        setTimeout(t6VpL2mQxRs9, 4000);
        return;
      }
    } else {
      p7LmQ2vRxNz9.textContent = y9LmQ4vPxNz3.slice(0, n5LmR9qVxPs4 - 1);
      n5LmR9qVxPs4--;

      if (n5LmR9qVxPs4 === 0) {
        b2QxP8vLmNz7 = true;
        z8QpL3vMxRn6 = (z8QpL3vMxRn6 + 1) % k4VnL8qMpRs2.length;
      }
    }

    setTimeout(t6VpL2mQxRs9, b2QxP8vLmNz7 ? 170 : 65);
  }

  t6VpL2mQxRs9();