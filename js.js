const btnInicar =  document.querySelector(".btn-texto");


document.querySelector("#btnTema").addEventListener("click", () =>{
    document.body.classList.toggle("mudar-tema");
})

btnInicar.addEventListener('click', () => inicio());

function inicio(){
    let nome = window.prompt("Qual é seu nome ?")
    window.alert(`Olá, ${nome}! É um pazer conhecer você!`);
}
console.log("Criando teste de nova Branch");
