/**
 * Search input
 */

// Função para habilitar ou desabilitar o botão com base no valor do campo de pesquisa
function updateSearchButton() {
  var searchInput = document.getElementById("search-input");
  var searchButton = document.getElementById("search-btn");

  if (searchInput.value.trim() !== "") {
    searchButton.removeAttribute("disabled");
  } else {
    searchButton.setAttribute("disabled", "disabled");
  }
}

/**
 * Search modal
 */

// Função para abrir a modal
function openSearchModal() {
  var modal = document.getElementById("search-modal");
  modal.classList.add("open");
}

// Função para fechar a modal
function closeSearchModal() {
  var modal = document.getElementById("search-modal");
  modal.classList.remove("open");
}

// Evento para fechar a modal ao clicar no botão de fechar
var closeButton = document.getElementById("search-modal-close");
closeButton.addEventListener("click", closeSearchModal);

// Evento para fechar a modal ao clicar fora da modal
var modal = document.getElementById("search-modal");

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeSearchModal();
  }
});

// Evento para chamar a função de atualização ao digitar no campo de pesquisa
var searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", updateSearchButton);

// Evento para mostrar a modal quando o formulário é enviado
var searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  openSearchModal();

  var searchInputValue = searchInput.value;

  document.getElementById("search-print-input").textContent = searchInputValue;
});