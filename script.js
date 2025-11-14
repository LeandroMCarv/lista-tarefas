function adicionarTarefa() {

    let tarefas = [];

    let mensagem = "Tarefa adicionada com sucesso!";
    
    //Obtendo o input da tarefa
    let inputTarefa = document.getElementById("inputTarefa");
    
    
    /*Pra ver o inputTarefa no console é só usar o console.log(inputTarefa)
    Esse comando retornará toda a tag do input, porém com o .value a gente pega apenas o valor que o usuário digitou nela*/
    
    //Obtendo o valor da tarefa sem espaços em branco no início e no final
    let tarefa = inputTarefa.value.trim()

    //tratamento de input vazio
    if (tarefa == ""){
        let mensagemErro = "Por favor, insira uma tarefa válida.";
        document.getElementById("mensagem").textContent = mensagemErro; 
    }else{ 
        document.getElementById("mensagem").textContent = mensagem;
        
        tarefas.push(tarefa);
        
        renderizarTarefas(tarefas);
        
    }
    //Resetando o campo da tarefa quando se dá a entrada
    inputTarefa.value = "";

}

function renderizarTarefas(tarefas) {
    const listaTarefas = document.getElementById("listaTarefas");
    
    
    let i = 0;
    for(i; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li");
        //Inserindo informações da tarefa dentro da li
        novaTarefa.textContent = tarefas[i];
        //A ul está dentro de listaTarefas, então com o comando append, nós adicionamos a li dentro da ul
        listaTarefas.appendChild(novaTarefa);
    }
}