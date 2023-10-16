/**
 * Abre imagens
 */
function openModal2(element) {
  document.getElementById('topico').style.display = 'block';
  document.getElementById('modalImg').src = element.src;
}

function closeModal2() {
  document.getElementById('topico').style.display = 'none';
}

// Fechar a modal quando o usuário clicar fora da imagem
window.onclick = function(event) {
  if (event.target == document.getElementById('topico')) {
      document.getElementById('topico').style.display = 'none';
  }
}