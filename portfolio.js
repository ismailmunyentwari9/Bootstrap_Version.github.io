const menu=document.querySelector('.menu_mobile');
const close=document.querySelector('.times');
const menus=document.querySelectorAll('.menu_mobile >li');
const body=document.querySelector('.blurx');
const open=document.querySelector('.sp2');
 const closeMenu = () => {
  menu.style.display="none";
  body.classList.remove('blur');
  open.style.display="flex";
  }
  const openMenu = () =>{
  menu.style.display='block';
  open.style.display="none";
  body.classList.add('blur');
}

open.addEventListener('click',openMenu);
close.addEventListener('click',closeMenu);
menus.forEach((link)=>{
  link.addEventListener('click', closeMenu);
}) 



