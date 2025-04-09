O que é o projeto?
Este projeto é uma aplicação Front-end que oferece um formulário de inscrição completo e responsivo, voltado para programas educacionais com trilhas de aprendizagem oferecidas pelo Governo do Maranhão . Ele foi desenvolvido com foco na usabilidade, acessibilidade e validação de dados, proporcionando uma experiência fluida e segura para o usuário final.
O formulário permite que os participantes preencham seus dados pessoais (como nome, CPF, e-mail, telefone, anexo para documentos  e endereço), escolham suas trilhas de interesse e tenham seus dados validados e armazenados temporariamente no navegador, também apresenta uma tela de login quando o cadastro for finalizado assim concluindo o processo para logar. O sistema foi construído de forma modular, com código limpo e separado em arquivos distintos de HTML, CSS e JavaScript, facilitando a manutenção e evolução do projeto.

Como rodar localmente?
Acesse os códigos e a página no Vercel.
No código veja todos os detalhes como a estrutura, estilo e animação.
No Vercel veja a página criada.

Tecnologias utilizadas:
HTML — Estrutura do formulário (teste 2.html e teste2.1.html)
CSS — Estilização do formulário (teste2.css e teste2.1.css)
JavaScript — Validação de campos, máscaras de entrada, salvamento com sessionStorage (teste2.js e teste2.1.js)

Principais funcionalidades:
✅ Validação de campos em tempo real:
Em todos os campos do formulário, assim melhorando a experiência do úsuario.
Nome e endereço: apenas letras
CPF: 000.000.000-00
Telefone: (00) 00000-0000
Email: validação de formato @gmail.com
CEP: 00000-000
✅ Validações específicas:
ID do usuário: apenas letras.
Senha: apenas números e símbolos.
Campos obrigatórios com mensagens de erro personalizadas.
✅ Máscaras de entrada para facilitar o preenchimento.
✅ Armazenamento temporário dos dados usando sessionStorage, evitando perda de dados durante a navegação.
✅ Experiência do usuário aprimorada com feedback visual de erros e sucesso.



