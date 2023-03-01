let row = document.querySelector(".sigla-elemento").value;

function dataLaranja() {
  let sigla = document.querySelector(".laranja .sigla-elemento").outerHTML;
  let nome = document.querySelector(".laranja .nome-elemento").outerHTML;
  let numeroAtomico = document.querySelector(".laranja .numero-atomico").outerHTML;

  let addToSigla = document.querySelector(".dados-do-elemento.simbolo").innerHTML = sigla
  let addToName = document.querySelector(".dados-do-elemento.nome").innerHTML = nome
  let addToNumero = document.querySelector(".dados-do-elemento.numero").innerHTML = numeroAtomico

  document.querySelector(".dados-do-elemento.simbolo").style.background = "#F1B200"
  document.querySelector(".dados-do-elemento.nome").style.background = "#F1B200"
  document.querySelector(".dados-do-elemento.nome").style.margin = "auto"
  document.querySelector(".dados-do-elemento.numero").style.background = "#F1B200"

  //let addToNome = document.querySelector("dados-do-elemento.")

  console.log(sigla)
}

function dataVerde() {
  let sigla = document.querySelector(".verde-claro .sigla-elemento").outerHTML;
  let nome = document.querySelector(".verde-claro .nome-elemento").outerHTML;
  let numeroAtomico = document.querySelector(".verde-claro .numero-atomico").outerHTML;

  let addToSigla = document.querySelector(".dados-do-elemento.simbolo").innerHTML = sigla
  let addToName = document.querySelector(".dados-do-elemento.nome").innerHTML = nome
  let addToNumero = document.querySelector(".dados-do-elemento.numero").innerHTML = numeroAtomico

  document.querySelector(".dados-do-elemento.simbolo").style.background = "#96CD30"
  document.querySelector(".dados-do-elemento.nome").style.background = "#96CD30"
  document.querySelector(".dados-do-elemento.numero").style.background = "#96CD30"

  //let addToNome = document.querySelector("dados-do-elemento.")

  console.log(sigla)
}

function dataAmarelo() {
  let sigla = document.querySelector(".amarelo .sigla-elemento").outerHTML;
  let nome = document.querySelector(".amarelo .nome-elemento").outerHTML;
  let numeroAtomico = document.querySelector(".amarelo .numero-atomico").outerHTML;

  let addToSigla = document.querySelector(".dados-do-elemento.simbolo").innerHTML = sigla
  let addToName = document.querySelector(".dados-do-elemento.nome").innerHTML = nome
  let addToNumero = document.querySelector(".dados-do-elemento.numero").innerHTML = numeroAtomico

  document.querySelector(".dados-do-elemento.simbolo").style.background = "#EADA00"
  document.querySelector(".dados-do-elemento.nome").style.background = "#EADA00"
  document.querySelector(".dados-do-elemento.numero").style.background = "#EADA00"

  //let addToNome = document.querySelector("dados-do-elemento.")

  console.log(sigla)
}