
function mascaraTel(value) {
  let textoAjustado;

  textoAjustado = value.replace(/(\d{2})(\d{5})(\d{4})/,
    function (regex, arg0, arg1, arg2) {
      return '(' + arg0 + ') ' + arg1 + '-' + arg2;
    });
  document.getElementById("telefone").value = textoAjustado;
}

function mascaraCpf(value) {
  let textoAjustado;

  textoAjustado = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function (regex, arg0, arg1, arg2, arg3) {
      return arg0 + '.' + arg1 + '.' + arg2 + '-' + arg3;
    });
  document.getElementById("cpf").value = textoAjustado;
}

function alertaCadastro(){
  Swal.fire({
    title: "Cadastro Nukastico Completo",
    text: "Bem Vindo ao Enclave",
    icon: "success"
  });
}