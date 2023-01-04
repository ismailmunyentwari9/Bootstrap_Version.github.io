/* listen for clicks on the hamburger button
document.querySelector(".sp2").addEventListener("click", function() {
  // show the mobile menu
  document.querySelector(".ul002").style.cssText = `
  display:flex;
  filter: blur(0px);
  margin-right:30%;
  `;
  document.querySelector(".sp2 img").style.display = "none";
  document.querySelector(".times").style.display= "flex";
  document.querySelector(".sp1").style.display = "none";
  document.querySelector(".blue").style.cssText = `
  position: fixed;
 
  width: 100vw;
  height: 100vh;
 
  `;
  document.querySelector(".mobile-overlay").style.cssText = `
  background-color: #6070ff !important;
  mix-blend-mode: multiply;
  width: 100vw;
  height: 100%;
  position:fixed;
  z-index: 4!;
  opacity: 100%;
  `;
  document.querySelector(".sp1").style.display = "none";
});


// listen for clicks on the clos
e button
document.querySelector(".times").addEventListener("click", function() {
    // hide the mobile menu
    
    document.querySelector(".ul002").style.display = "none";
    document.querySelector(".sp2 img").style.display = "flex";
    document.querySelector(".times").style.display = "none";
    document.querySelector(".sp1").style.display = "initial";
    document.querySelector(".mobile-overlay").style.backgroundColor= "transparent";
    document.querySelector(".blue").style.display= "none";
    
  });
  */
const menus=document.querySelector('.ul002');


 function closeMenu() {
 menus.style.display="none";
 }
 function openMenu(){
   menus.style.display='block';
 }
 menus.addEventListener('click', closeMenu);



