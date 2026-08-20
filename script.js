
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        
        // Se o botão não tiver um <span> dentro (como o botão de tema), ele ignora esse trecho sem dar erro
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

// Mantive "bnt" caso seja exatamente esse o nome no seu HTML
const btnTemaEscuro = document.querySelector(".bnt-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });
}