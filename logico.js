function logar() {
  console.log(email)



let form = document.getElementById("formi");
// Impede o envio padrão do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

 // Obtenha os valores dos campos de entrada
  var email = document.querySelector("#email").value
  var senha = document.querySelector("#senha").value
  var confsenha = document.querySelector("#confsenha").value
  // Redirecione o usuário para outra página
  if (email != "" && senha != ""  && confsenha != "") {
      location = "principal.html"
  }
})};


