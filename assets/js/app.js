/**
 * Login
 */
// Função para abrir a modal
document.getElementById("login-modal-open-btn").addEventListener("click", function() {
  document.getElementById("login-modal").classList.add("open");
});

// Função para fechar a modal quando se clica fora dela
window.onclick = function(event) {
  if (event.target == document.getElementById("login-modal")) {
    document.getElementById("login-modal").classList.remove("open");
  }
}

// Função para fechar a modal quando se clica no botão "Fechar"
document.getElementById("login-modal-close-btn").addEventListener("click", function() {
  document.getElementById("login-modal").classList.remove("open");
});

/**
 * Loading
 */
// Função de loading
document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();

  document.getElementById('loading-screen').style.display = 'flex';

  setTimeout(function () {
    window.location.reload();
  }, 5000);
});