document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.innerText = "Copiar";
    button.className = "copy-button"; // Usaremos essa classe no SCSS

    const pre = codeBlock.parentElement;
    pre.style.position = "relative"; // Garante que o botão posicione corretamente dentro do 'pre'

    // Adiciona o botão APÓS a pseudo-barra de título, se existir
    const pseudoBar = pre.querySelector('pre::before'); // Isso não funciona em JS diretamente
    // A melhor forma de garantir a ordem é adicionar o botão antes do pseudo-elemento no DOM
    // ou se o pseudo-elemento estiver sendo simulado por um elemento real.
    // Como o ::before é um pseudo-elemento, ele não interfere no posicionamento do botão.
    // O appendChild no 'pre' já o coloca no lugar certo.

    pre.appendChild(button);

    button.addEventListener("click", () => {
      // Use textContent em vez de innerText para preservar melhor a formatação do código
      navigator.clipboard.writeText(codeBlock.textContent).then(
        () => {
          button.innerText = "Copiado!";
          setTimeout(() => (button.innerText = "Copiar"), 2000);
        },
        (err) => {
          console.error("Erro ao copiar: ", err);
          alert("Erro ao copiar o código. Por favor, tente novamente."); // Feedback mais amigável
        }
      );
    });
  });
});