
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
  cont++;
  // sessionStorage.setItem('cont',quantProd);
  document.getElementById('contador').style.display = 'flex'
  document.getElementById('contador').innerText = 'Prod. adicionados : ' + cont;

}
// function camposCard{
//   var spanTesteModelo = $('span-modelo').html();
//   var spanTesteModelo_string = spanTesteModelo.toString();
//   var campos = $("#numero_parcelas").val();

//   var i;
//   i = 1;
//   var texto = '';
//   while (i <= campos) {
//     texto = texto + spanTesteModelo_string.replace(/-0/g, '-' + i.toString())
//     i = i + 1;
//     $("span-real").html(texto);
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  const containerProd = document.getElementById('containerProd');

  fetch("cards.json").then((response) => {
    response.json().then((cards) => {
      console.log(cards);
    })
  })


  // Dados dos cards
  const cardsData = [
    {
      imgSrc: 'imagens/fallout4.jpg',
      title: 'Fallout 4',
      description: 'Jogo Mundo aberto até 24 jogadores fuzilando inimigos juntos!!',
      onclick: "alertaCompra('fallout4')",
      width: '14rem'
    },
    {
      imgSrc: 'imagens/falloutNewViegas.jfif',
      title: 'Fallout New Vegas',
      description: 'Jogo Mundo aberto até 24 jogadores fuzilando inimigos juntos!!',
      onclick: "alertaCompra('fallout new vegas')",
      width: '14rem'
    },
    {
      imgSrc: 'imagens/Fallout3.webp',
      title: 'Fallout 3',
      description: 'Jogo Mundo aberto até 24 jogadores fuzilando inimigos juntos!!',
      onclick: "alertaCompra('fallout3')",
      width: '14rem'
    },
    {
      imgSrc: 'imagens/fallout1.jpg',
      title: 'Fallout 1',
      description: 'Jogo Mundo aberto até 24 jogadores fuzilando inimigos juntos!!',
      onclick: "alertaCompra('fallout1')",
      width: '12rem'
    },
  ];

  function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card mb-2 me-2 col-3';
    card.style.width = cardData.width;

    const img = document.createElement('img');
    img.src = cardData.imgSrc;
    img.className = 'card-img-top';
    img.alt = cardData.title;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = cardData.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = cardData.description;

    const cardButton = document.createElement('a');
    cardButton.className = 'btn btn-primary';
    cardButton.textContent = 'Comprar';
    cardButton.setAttribute('onclick', cardData.onclick);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
  }

  cardsData.forEach(cardData => {
    const card = createCard(cardData);
    containerProd.appendChild(card);
  });
});