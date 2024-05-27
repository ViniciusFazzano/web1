
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

function alertaCadastro() {
  Swal.fire({
    title: "Cadastro Nukastico Completo",
    text: "Bem Vindo ao Enclave",
    icon: "success"
  });
}

let cont = 0;
function alertaCompra(value) {
  Swal.fire({
    title: value + " adicionado com sucesso!",
    text: "Parabens",
    icon: "success"
  });
  cont ++;
  // sessionStorage.setItem('cont',quantProd);
  document.getElementById('contador').style.display = 'flex'
  document.getElementById('contador').innerText = 'Prod. adicionados : ' + cont;

}
function camposCard{
  var spanTesteModelo = $('span-modelo').html();
  var spanTesteModelo_string = spanTesteModelo.toString();
  var campos = $("#numero_parcelas").val();

  var i;
  i=1;
  var texto = '';
  while (i<=campos) {
    texto = texto+ spanTesteModelo_string.replace(/-0/g,'-'+i.toString())
    i=i+1;
    $("span-real").html(texto);
  }
}