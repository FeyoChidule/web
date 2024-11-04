const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const navMenu = document.querySelector('nav');



menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  closeIcon.style.cursor = "pointer"
  navMenu.style.display = 'flex';
  navElement.classList.add('nav')

});

closeIcon.addEventListener('click', () => {
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  navMenu.style.display = 'none';
});

  if (window.scrollY >= windowHeight - headerHeight) {
    header.style.position = 'static';
  } else {
    header.style.position = 'fixed';
    header.style.top = '0';
  }
