  import {pageAboutMeContent, aboutMeDropDown, profileHeader,  } from "./header-object.js";
  
  let headerInformationHTML = '';
  
  profileHeader.forEach((profileInformation) => {
    headerInformationHTML = headerInformationHTML + 
    `
      <div class="header-profile-container">
          <div class="user-info">
              <img id="triggerImage" src="${profileInformation.headerProfileImage}" alt="Osaro Goodness" class="avatar">
              <div class="user-details">
                <h2 class="my-profile-name">${profileInformation.nameProfileHeader}</h2>
                <p>${profileInformation.jobDiscription}</p>
              </div>
            </div>
        <div class="actions">
          <button class="bookmark" id="bookmarkBtn">${profileInformation.menuIconHeader}</button>

          <div class="dropdown-menu" id="dropdownMenu">
            <ul>
              <li id="js-my-drop-down-footer">About Me</li>
              <li><a href="work experience page.html">My Experience</a></li>
              <li class="job-directories"><a href="jobs.html">Jobs</a></li>
              <li><a href="https://drive.google.com/drive/folders/1sJyjVG0mTBf_4xt_CFB5fA3j0C5xlqAD?usp=drive_link">Recent Designs</a></li>
              <li id="cancelBtn">Cancel</li>
            </ul>
          </div>
          <button class="Header-resume-btn">${profileInformation.resumeHeaderButton}</button>
        </div>
      </div>
    `
  });

  document.getElementById('profileHeader').innerHTML=headerInformationHTML;


  let aboutMeDropDownMenuHTML = '';
  aboutMeDropDown.forEach((aboutMe) => {
    aboutMeDropDownMenuHTML = aboutMeDropDownMenuHTML + 
    `
        <div class="image-profile-container">
        <img class="profile-image" src="${aboutMe.profileImageAboutMe}" alt="">
      </div>
      <h2 class="dialog-profile-text">About Me</h2>
      <p class="paragraph-about-text">I’m Igbinovia Osaro Goodness, a computer science Expert, 
        Web/application Programmer, Graphic Designer, Suite Editor, Gamer and Content Creator, I’m driven 
        by desire to create impactful solution’s that make difference in my specialization.</p>
      <div class="social-links">
        <p class="social-links-text-discription">My Social Links</p>
        <a class="social-media-links-handle" 
        href="https://www.instagram.com/osaro_goody?igsh=NTc4MTIwNjQ2YQ==">Instagram</a>
        <a class="social-media-links-handle" href="https://www.facebook.com/osarogoody1">Facebook</a>
        <a class="social-media-links-handle" href="https://x.com/Osarogoody">X</a>
        <a class="social-media-links-handle" 
        href="https://youtube.com/@universalosasgoody?si=BaxDOVqynchMLhz-">Youtube</a>
        <a class="social-media-links-handle" href="mailto:universalosasgoody@gmail.com">Email</a>
        <a class="social-media-links-handle" href="https://wa.me/+2348116396164">Whatsapp</a>
      </div>
    `
  });

  document.getElementById('infoBox').innerHTML=aboutMeDropDownMenuHTML;


  let contentAboutMeHeaderSlideHTML = '';
  pageAboutMeContent.forEach((aboutMeContent) => {
    contentAboutMeHeaderSlideHTML = contentAboutMeHeaderSlideHTML + 
    `
    <div class="flex-container-explore-content-nested">
        <div class="container-top-navigation-links">
          <div class="navigation-button-a">
            <a class="nav-link-footer first-footer-nav" href="jobs.html">My Works</a>
            <a class="nav-link-footer" href="work experience page.html">About Me</a>
            <a class="nav-link-footer" href="https://drive.google.com/file/d/1D4IeIuf55kQv3ayTB8Si_qUu9UMHr5Je/view?usp=drive_link">Resume</a>
            <div id="js-close-btn" class="close-footer-icon-btn"> <i class="bi bi-x-lg"></i> </div>
          </div>
        </div>

        <div class="container-nested-osaro-goodness">
          <div class="social-content-osas-flex">
            <div class="social-accounts-flex-column">
              <a href="https://www.facebook.com/osarogoody1"><i class="bi bi-facebook social-icon-nav"></i></a>
              <a href="https://www.instagram.com/osaro_goody?igsh=NTc4MTIwNjQ2YQ=="><i class="bi bi-instagram"></i></a>
              <a href="https:www.threads.com/@osaro_goody"><i class="bi bi-threads"></i></a>
              <a href="https://x.com/Osarogoody"><i class="bi bi-twitter-x"></i></a>
              <a href="https://youtube.com/@universalosasgoody?si=BaxDOVqynchMLhz-"><i class="bi bi-youtube"></i></a>
              <a href="mailto:universalosasgoody@gmail.com"><i class="bi bi-google"></i></a>
            </div>
            <div class="content-osaro-goodness-explore">
              <hr class="line-content">
              <small class="text-unto-osas-goody">you are unto osaro Goodness</small>
              <p class="feild-discription-osas">Hello, I'm Osaro Goodness (Osas Goody) A professiona web/application developer, Graphic Designer
              Microsoft Suite Editor, Video Gaming Artist, and Youtube Content Creator
              </p>
            </div>
          </div>
          <div class="content-text-explore">
            <div class="about-me-footer-elements-flex">
              <div class="content-nested-explore-text margin-query-1">
                <h3 class="text-explanation-explore">About Me</h3>
                <p class="text-explanation-parag">I’m Igbinovia Osaro Goodness, a computer science Expert, 
                  Web/application Programmer, Graphic Designer, Suite Editor, Gamer and Content Creator, 
                  I’m driven by desire to create impactful solution’s that make difference in my 
                  specialization.</p>
                <i class="bi bi-arrow-right arrow-icon-explore"></i>
              </div>
              <div class="content-nested-explore-text">
                <h3 class="text-explanation-explore">My Work EXpertise</h3>
                <p class="text-explanation-parag">“As a multifaceted creative professional, I bring a 
                  unique blend of Web development and Graphic design expertise to the table. With years of 
                  experience in building responsive, user friendly websites using HTML, CSS, JavaScript, 
                  and various frameworks, I posses a deep understanding of what makes a digital experience 
                  truly exceptional."</p>
                <i class="bi bi-arrow-right arrow-icon-explore"></i>
              </div>
            </div>

            <button class="btn-explore-osaro">View Resume</button>

          </div>
        </div>
        
        <div class="footer-element-container">
          <div class="container-newsletter">
            <h2 class="sign-up-head-text-footer">sign up for my newsletter</h2>
            <small class="text-convince-signup">To get the best of my exclusive computer insigt on gaming, animation and computer Science Subcribe now!</small>
            <div class="input-bar-footer">
              <input class="input-footer-news-letter" type="search" placeholder="Search"><br class="break-query">   
              <button class="footer-subcribe-btn">Subcribe Now</button>
            </div>          
          </div>
        </div>
      </div>
    `
  });

  document.getElementById('js-slide-container').innerHTML=contentAboutMeHeaderSlideHTML;
   
   
   const header = document.getElementById('profileHeader');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
        });


    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const cancelBtn = document.getElementById('cancelBtn');

        // Toggle menu on bookmark click
        bookmarkBtn.addEventListener('click', () => {
        dropdownMenu.classList.add('show');
        });

        // Hide menu on Cancel click
        cancelBtn.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
        });





        document.getElementById('triggerImage').addEventListener('click', function() {
            const infoBox = document.getElementById('infoBox');
          
            // Toggle visibility
            if (infoBox.classList.contains('hidden')) {
              infoBox.classList.remove('hidden');
              infoBox.classList.add('visible');
            } else {
              infoBox.classList.remove('visible');
              infoBox.classList.add('hidden');
            }
          });



          // Get elements for dropdown footer bar 
        const dropdownFooter = document.getElementById('js-my-drop-down-footer');
        const slideContainer = document.getElementById('js-slide-container');
        const closeButton = document.getElementById('js-close-btn');

        // Show the container on image click
        dropdownFooter.addEventListener('click', () => {
        slideContainer.style.top = '0';
        });

        // Hide the container on button click
        closeButton.addEventListener('click', () => {
        slideContainer.style.top = '-100%';
        });


            // Select the div by class name
            const resumeLinkDrive = document.querySelector(".btn-explore-osaro");

            // Add a click event
            resumeLinkDrive.addEventListener("click", () => {
                // Redirect to another page
                window.location.href = "https://drive.google.com/file/d/1D4IeIuf55kQv3ayTB8Si_qUu9UMHr5Je/view?usp=drive_link";
            });


            // link to my cv on drive storage with home header page 
            const resumeLinkDriveHeader = document.querySelector(".Header-resume-btn");

            // Add a click event
            resumeLinkDriveHeader.addEventListener("click", () => {
                // Redirect to another page
                window.location.href = "https://drive.google.com/file/d/1D4IeIuf55kQv3ayTB8Si_qUu9UMHr5Je/view?usp=drive_link";
            });