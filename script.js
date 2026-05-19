// 1. Seleciona os elementos do HTML que vamos precisar manipular
const form = document.getElementById('form-cadastro');
const lista = document.getElementById('lista-alunos');

// 2. Escuta o momento em que o usuário clica no botão de enviar (submit)
form.addEventListener('submit', (e) => {
    // Impede que a página recarregue (comportamento padrão do HTML)
    e.preventDefault();
    
    // 3. Pega os valores que o usuário digitou nos campos de texto
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value; // Adicionado na branch de melhoria
    
    // 4. Cria um novo item de lista (<li>) na memória do navegador
    const li = document.createElement('li');
    
    // 5. Define o texto que vai aparecer dentro desse item (Nome e E-mail)
    li.textContent = `${nome} (${email})`;
    
    // 6. Coloca esse novo item dentro da nossa lista (<ul>) no HTML
    lista.appendChild(li);
    
    // 7. Limpa os campos de texto para o usuário poder cadastrar o próximo aluno
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
});