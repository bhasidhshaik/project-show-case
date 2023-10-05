const navMenu=document.getElementById('nav-menu'),
toggleMenu=document.getElementById('toggle-menu'),
closeMenu=document.getElementById('close-menu');

toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show');
  // navMenu.classList.toggle('nav');
});
closeMenu.addEventListener('click',()=>{
  navMenu.classList.remove('show');
});


document.addEventListener("DOMContentLoaded",()=> {
  const readMoreButtons = document.querySelectorAll('.read-more');
  const projectLinkButtons = document.querySelectorAll('.project-link');
  
  for (let i = 0; i < readMoreButtons.length; i++) {
      readMoreButtons[i].addEventListener('click', () => {
          const projectOverviewElements = document.querySelectorAll('.project-overview');
          if (i < projectOverviewElements.length) {
              projectOverviewElements[i].classList.toggle('scroll');
          }
          readMoreButtons[i].style.display = 'none';
          projectLinkButtons[i].style.bottom = '-3px';
      });
  }
});







  