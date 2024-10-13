const listaselecaopokedev = document.querySelectorAll('.pokedev');

listaselecaopokedev.forEach(pokedev => {
   pokedev.addEventListener("click", () => {
      escondercartaopokedev();

      const idPokedevSelecionado = mostrarcartaopokedev(pokedev);

      desativarpokedevnalistagem();

      ativarpokedevnalistagem(idPokedevSelecionado);
   })
})

function ativarpokedevnalistagem(idPokedevSelecionado) {
   const PokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
   PokedevSelecionadoNalistagem.classList.add("ativo");
}

function desativarpokedevnalistagem() {
   const pokedevAtivoNaListagem = document.querySelector(".ativo");
   pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarcartaopokedev(pokedev) {
   const idPokedevSelecionado = pokedev.attributes.id.value;
   const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
   const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
   cartaoPokedevParaAbrir.classList.add("aberto");
   return idPokedevSelecionado;
}

function escondercartaopokedev() {
   const cartaopokedevaberto = document.querySelector(".aberto");
   cartaopokedevaberto.classList.remove("aberto");
}
