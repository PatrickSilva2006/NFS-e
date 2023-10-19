document.addEventListener('DOMContentLoaded', function () {
    // Referência ao formulário
    const formulario = document.getElementById('dadosNotaFiscal');

    // Ouvinte de evento para o botão "Gerar Nota Fiscal"
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Coleta os valores dos campos do primeiro formulário
        const cliente = document.getElementById('cliente').value;
        const requerente = document.getElementById('requerente').value;
        const data_emissao = document.getElementById('data_emissao').value;
        const quantidade_produtos = document.getElementById('quantidade_produtos').value;
        const produto_descricao = document.getElementById('produto_descricao').value;
        const valor = document.getElementById('valor').value;
        const cnpj = document.getElementById('cnpj').value;
        const cpf = document.getElementById('cpf').value;
        const endereco = document.getElementById('endereco').value;
        const numero = document.getElementById('numero').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cep = document.getElementById('cep').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const funcao_empresa = document.getElementById('funcao_empresa').value;

        // Atualiza os campos no segundo código HTML (nota_fiscal_template.html)
        document.getElementById('nome').textContent = cliente;
        document.getElementById('requerente').textContent = requerente;
        document.getElementById('data').textContent = data_emissao;
        document.getElementById('quantidade').textContent = quantidade_produtos;
        document.getElementById('descricao').textContent = produto_descricao;
        document.getElementById('valor').textContent = valor;
        document.getElementById('cnpj').textContent = cnpj;
        document.getElementById('cpf').textContent = cpf;
        document.getElementById('endereco').textContent = endereco;
        document.getElementById('numero').textContent = numero;
        document.getElementById('bairro').textContent = bairro;
        document.getElementById('cidade').textContent = cidade;
        document.getElementById('estado').textContent = estado;
        document.getElementById('cep').textContent = cep;
        document.getElementById('telefone').textContent = telefone;
        document.getElementById('email').textContent = email;
        document.getElementById('funcao_empresa').textContent = funcao_empresa;

        // Exibe o segundo código HTML (nota_fiscal_template.html)
        const notaFiscalTemplate = document.getElementById('notaFiscalTemplate');
        notaFiscalTemplate.style.display = 'block';
    });
});