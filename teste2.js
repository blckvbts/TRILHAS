// Utilitários de formatação
const formatCPF = (value) =>
    value.replace(/\D/g, "")
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2")
      .slice(0, 14);
  
  const formatPhone = (value) =>
    value.replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  
  const formatCEP = (input) => {
    const value = input.value.replace(/\D/g, "").slice(0, 8);
    input.value = value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5)}` : value;
  };
  
  // Máscaras
  document.getElementById('cpf').addEventListener("input", e => e.target.value = formatCPF(e.target.value));
  document.getElementById('telefone').addEventListener("input", e => e.target.value = formatPhone(e.target.value));
  document.getElementById('cep').addEventListener("input", e => formatCEP(e.target));
  
  // E-mail 
  document.getElementById("email").addEventListener("input", function () {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    document.getElementById("error-message").style.display = emailValido || this.value === "" ? "none" : "block";
    this.classList.toggle("invalid", !emailValido && this.value !== "");
  });
  
  // ID do usuário 
  document.getElementById('idUsuario').addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
  });
  
  // Senha 
  document.getElementById('senha').addEventListener('input', function () {
    this.value = this.value.replace(/[a-zA-Z]/g, '');
  });
  
  // Upload de arquivos
  document.querySelectorAll(".upload-box").forEach(box =>
    box.addEventListener("click", () => box.querySelector("input[type='file']").click())
  );
  
  // Botão cancelar
  document.getElementById('cancelar').addEventListener('click', () => {
    document.getElementById('inscricaoForm').reset();
  });
  
  // Botão salvar - sessionStorage
  document.getElementById('salvar').addEventListener('click', () => {
    const campos = ["nome", "nascimento", "cpf", "sexo", "email", "telefone", "cep", "rua", "numero", "cidade", "estado", "idUsuario", "senha"];
    campos.forEach(id => sessionStorage.setItem(id, document.getElementById(id).value));
    alert("✅ Dados salvos com sucesso!");
  });
  
  // Carregar dados salvos
  window.addEventListener('DOMContentLoaded', () => {
    const campos = ["nome", "nascimento", "cpf", "sexo", "email", "telefone", "cep", "rua", "numero", "cidade", "estado", "idUsuario", "senha"];
    campos.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = sessionStorage.getItem(id) || "";
    });
  });
  
  // Validação e envio da Inscrição
  document.getElementById("inscricaoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;
  
    // Limpar mensagens
    document.querySelectorAll(".erro").forEach(e => e.textContent = "");
  
    const campos = [
      { id: "nome", valid: v => v !== "", msg: "⚠ Nome é obrigatório." },
      { id: "nascimento", valid: v => v !== "", msg: "⚠ Data de nascimento é obrigatória." },
      { id: "cpf", valid: v => /^\d{11}$/.test(v.replace(/\D/g, '')), msg: "⚠ CPF deve conter 11 números." },
      { id: "sexo", valid: v => v !== "", msg: "⚠ Sexo é obrigatório." },
      { id: "email", valid: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: "⚠ E-mail inválido." },
      { id: "telefone", valid: v => /^\d{10,11}$/.test(v.replace(/\D/g, '')), msg: "⚠ Telefone inválido." },
      { id: "cep", valid: v => /^\d{8}$/.test(v.replace(/\D/g, '')), msg: "⚠ CEP inválido." },
      { id: "rua", valid: v => v !== "", msg: "⚠ Rua é obrigatória." },
      { id: "numero", valid: v => v !== "", msg: "⚠ Número é obrigatório." },
      { id: "cidade", valid: v => v !== "", msg: "⚠ Cidade é obrigatória." },
      { id: "estado", valid: v => v !== "", msg: "⚠ Estado é obrigatório." },
      { id: "idUsuario", valid: v => /^[a-zA-Z]+$/.test(v), msg: "⚠ ID deve conter apenas letras." },
      { id: "senha", valid: v => v !== "" && !/[a-zA-Z]/.test(v), msg: "⚠ Senha deve conter apenas números e símbolos." }
    ];
  
    campos.forEach(({ id, valid, msg }) => {
      const input = document.getElementById(id);
      if (!valid(input.value)) {
        input.nextElementSibling.textContent = msg;
        valido = false;
      }
    });
  
    const trilha = document.querySelector('input[name="area"]:checked');
    const termos = document.getElementById("termos").checked;
  
    if (!trilha) {
      alert("Selecione uma trilha de aprendizagem.");
      valido = false;
    }
  
    if (!termos) {
      alert("Você deve aceitar os termos e condições.");
      valido = false;
    }
  
    if (valido) {
      alert("✅ Inscrição realizada com sucesso!");
      this.reset();
    }
  });
  