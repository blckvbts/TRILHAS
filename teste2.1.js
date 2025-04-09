document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const msg = document.getElementById("mensagem-sucesso");
    msg.classList.add("mostrar");

    setTimeout(() => {
      msg.classList.remove("mostrar");
    }, 3000); // mensagem some depois de 3 segundos

    this.reset(); // limpa o formulário (opcional)
  });

