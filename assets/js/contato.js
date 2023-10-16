// Formulário de contato
document.getElementById('lnkBtnSalvar').addEventListener('click', function (event) {
  event.preventDefault();
  
  var nomeCompleto = document.querySelector('input[placeholder="Nome Completo"]').value;
  var email = document.querySelector('input[placeholder="E-mail"]').value;
  var assunto = document.getElementById('txtAreaAssunto').value;

  if (nomeCompleto !== '' && email !== '' && assunto !== '') {
    alert('Sua mensagem foi enviada, entraremos em contato.');
  } else {
    alert('Preencha todos os campos corretamente.');
  }
});