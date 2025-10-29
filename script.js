function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";

    //Obtendo o input da tarefa
    let inputTarefa = document.getElementById("inputTarefa");
    
    /*Pra ver o inputTarefa no console é só usar o console.log(inputTarefa)
    Esse comando retornará toda a tag do input, porém com o .value a gente pega apenas o valor que o usuário digitou nela*/
    
    //Obtendo o valor da tarefa
    let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    
    //Inserindo informações da tarefa dentro da li
    novaTarefa.textContent = tarefa;
    //A ul está dentro de listaTarefas, então com o comando append, nós adicionamos a li dentro da ul
    listaTarefas.appendChild(novaTarefa);

    //Resetando o campo da tarefa quando se dá a entrada
    inputTarefa.value = "";
}