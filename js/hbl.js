var texto = (" Habilidades");
var atraso = 200;
var textoElemento = document.querySelector(".another__color__habilidade");

var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}
escreverTexto();