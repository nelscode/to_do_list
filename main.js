// capturando elementos
const entradaTarefas = document.querySelector('#entradaTarefas')
const botaoAdicionar = document.querySelector('#botaoAdicionar')
const listaTarefas = document.querySelector('#listaTarefas')
const sectionTarefas = document.querySelector('#sectionTarefas')

// evento de click
botaoAdicionar.addEventListener('click', function(){
    
    // pegando valor e tirando espaços antes e depois do valor digitado
    const entradaValue = entradaTarefas.value.trim()

    // verificando se o valor digitado não é uma string vazia
    if (entradaValue === ''){
        const mensagemErro = document.querySelector('.mensagem-erro') // capturando elemento

        if(!mensagemErro){ // se esse elemento não exitir devemos cria-lo
            const erro = document.createElement('p')
            erro.className = 'mensagem-erro'
            erro.textContent = 'Por favor, insira uma tarefa!'
            sectionTarefas.appendChild(erro)
        }
        return // saindo da condicional
    }

    // se existir
    const mensagemErro = document.querySelector('.mensagem-erro')
    if(mensagemErro){ // remove-lo depois
        sectionTarefas.removeChild(mensagemErro)
    }

    // criando elemento de lista e adicionando dentro da ul
    const itemLista = document.createElement('li')
    itemLista.className = 'itens'
    listaTarefas.appendChild(itemLista)
    itemLista.textContent = entradaValue    

    // criando elemento de botão e adicionando dentro da li
    const botaoDeletar = document.createElement('button')
    botaoDeletar.id = 'botaoDeletar'
    itemLista.appendChild(botaoDeletar)
    botaoDeletar.textContent = 'Deletar'

    // redefinindo o valor do input para
    entradaTarefas.value = ''

    // ao clicar no botão deletar vamos remover todo o li
    botaoDeletar.addEventListener('click', function(){
        listaTarefas.removeChild(itemLista)
    })

})