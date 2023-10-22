// Função para verificar se um elemento está visível na tela
function isElementVisible(element) {
  var elementPosition = element.getBoundingClientRect();
  return (
    elementPosition.top >= 0 &&
    elementPosition.bottom <= window.innerHeight
  );
}

// Função para mostrar um elemento quando ele estiver visível
function showOnScroll(elementId) {
  var element = document.getElementById(elementId);

  function checkVisibility() {
    if (isElementVisible(element)) {
      element.classList.add('show'); // Adiciona a classe 'show' quando o elemento estiver visível
       window.removeEventListener('scroll', checkVisibility); // Remove o evento de rolagem após a exibição
    }
  }

  window.addEventListener('scroll', checkVisibility); // Adiciona um evento de rolagem para verificar a visibilidade
}

// Chama a função para mostrar o elemento com o ID 'sobre-nos-section'
showOnScroll('sobre-nos-section');
