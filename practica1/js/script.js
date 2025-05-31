card_derecho = document.getElementById("cardder");
card_izquierdo = document.getElementById("cardizq");
seccionTipos = document.getElementById("tipos");
const formulario = document.getElementById("formulario-contacto");
//cogemos el scroll
let animacion_ativa = false;

//usamos un disparador para activar la animacion de los cards
const observerador = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && entry.intersectionRatio >= 0.3 && !animacion_ativa){
            card_derecho.style.animation = "none";
            void card_derecho.offsetHeight;
            card_derecho.style.animation = " c_derecho 4s ease-in-out ";

            card_izquierdo.style.animation = "none";
            void card_izquierdo.offsetHeight;
            card_izquierdo.style.animation = " carIzqd 4s ease-in-out ";
            animacion_ativa = true;
        }
        if(!entry.isIntersecting){
            animacion_ativa = false;
        }
    })
},{threshold:0.3});
observerador.observe(seccionTipos);

function esEmailValido(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(regex.test(email))
    return regex.test(email);

}
function esTelefonoValido(telefono) {
    const regex = /^(\d{3}[-\s]?)?\d{3}[-\s]?\d{3}$/;
    return regex.test(telefono);
}

formulario.onsubmit = function(event) {
    const telefono = document.getElementById("inputTelefono").value;
    const email = document.getElementById("inputEmail").value;
  
    if (!esTelefonoValido(telefono)) {
      alert("El número de teléfono no es válido.");
      event.preventDefault();
      return false;
    }
  
    if (!esEmailValido(email)) {
      alert("El correo electrónico no es válido.");
      event.preventDefault(); 
      return false;
    }
  
    return true;
};

function contarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/).filter(Boolean);
    
    return palabras.length;
}
  

