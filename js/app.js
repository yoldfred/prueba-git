const boton = document.getElementById('buttonShow');
const show = document.getElementById('html');

boton.addEventListener('click',()=>{
    show.classList.toggle('backgroundShow');
});
window.addEventListener('resize',()=>{
    show.classList.remove('backgroundShow');
});