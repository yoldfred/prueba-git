const boton = document.getElementById('buttonShow');
const show = document.getElementById('html');

boton.addEventListener('click',()=>{
    show.classList.toggle('backgroundShow');
    boton.classList.toggle('botonShow')
});
window.addEventListener('resize',()=>{
    
});