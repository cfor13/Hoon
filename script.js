const menuButton = document.querySelector('#menuButton');
const menuList = document.querySelector('#menuList');

menuButton?.addEventListener('click', () => {
  menuList?.classList.toggle('open');
});

menuList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuList.classList.remove('open');
  });
});
