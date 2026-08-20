
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        
    
        if (!texto) return;

        let total = parseInt(texto.textContent, 10) || 0;

        if (curtiu === false) {
            texto.textContent = total + 1;
            curtiu = true;
        } else {
            texto.textContent = total - 1;
            curtiu = false;
        }
    });
});


const btnTemaEscuro = document.querySelector(".bnt-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });
}
// Seleciona todos os botões da página
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        
        // Se o botão não tiver um <span> dentro (como o botão de tema), ele ignora a contagem
        if (!texto) return;

        let total = parseInt(texto.textContent, 10) || 0;

        if (curtiu === false) {
            texto.textContent = total + 1;
            curtiu = true;
        } else {
            texto.textContent = total - 1;
            curtiu = false;
        }
    });
});

