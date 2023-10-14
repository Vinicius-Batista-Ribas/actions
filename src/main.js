class tarefas{
    constructor (titulo, descricao, status){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
    
    show(){
        console.log(`Tarefa: ${this.titulo}:\n ${this.descricao}. (${this.status})`)
        return `Tarefa: ${this.titulo}:\ ${this.descricao}. (${this.status})`;
    }
    Status(status){
        console.log(`status alterado de "${this.status}" para "${status}"`)
        this.status = status
        return `status alterado para ${status}`
    }

}

const readline = require('readline-sync');

function showList(){
    for (let i = 0; i < lista_de_tarefas.length; i++) {
        console.log(`${i+1} - ${lista_de_tarefas[i].titulo}`);
    }
}

function setStatus(){
    console.log("Status da task: \n1 - A fazer \n2 - Em andamento \n3 - Concluido\n")
    var op = readline.question("opcao: ")
     if(op === '1'){
        var status = "A fazer";
    } 
    else if(op === '2'){
        var status = "Em andamento";
    }
    else if(op === '3'){
        var status = "Concluido";
    }else{
        console.log("operacao invalida")
        return undefined
    }
    return status;
}

function attStatus(){
    showList();
    var op = readline.questionInt("Qual tarefa deseja atualizar o status? ");
    var statusOP = setStatus();
    if(statusOP !== undefined){
        lista_de_tarefas[op-1].Status(statusOP);
    }
}

function addTask(titulo,descricao,status){
    if (titulo !== "" && descricao !== "" && status !== undefined){
        tarefa = new tarefas(titulo,descricao,status);
        lista_de_tarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!")
        return lista_de_tarefas
    }    
    else{
        console.log("entrada invalida")
        return null
    }
}

function showTask(lista){
    if(lista.length > 0){
        for(let i = 0; i < lista.length; i++){
            lista[i].show();
        }
        return lista;
    }
    else{
        console.log("Nenhuma tarefa adicionada");
        return null;
    }
}

function deleteTask(lista,indice){
    
    if (indice >= 0 && indice < lista.length){
        lista.splice(indice, 1);
        console.log("Tarefa  excluída.");
        return "Tarefa  excluída.";
    }
    else{
        console.log("tarefa nao encontrada")
        return "tarefa nao encontrada"
    }
}

function mostraOP(){
    var linha = "-".repeat(50);
    console.log(linha)
    console.log("1 - Adicionar tarefa")
    console.log("2 - Exibir lista de tarefas")
    console.log("3 - Atualizar status")
    console.log("4 - Excluir tarefa")
    console.log("5 - Sair")
    console.log(linha)
}


var lista_de_tarefas = [];
var x = true;
var op;
var tarefa


while(x){

    mostraOP();
    op = readline.question("Comando: ")

    switch(op){
        case '1':
            var titulo = readline.question("Nome da task: ")
            var descricao = readline.question("descricao da task: ")
            var status = setStatus();
            addTask(titulo,descricao,status);
            break;

        case '2':
            showTask(lista_de_tarefas)  
            break;

        case '3':
            attStatus();
            break;

        case '4': 
            showList();
            var op = readline.questionInt("Qual tarefa deseja excluir? ");
            deleteTask(lista_de_tarefas,op-1);
            break;

        case '5':
            x = false;
            break;

        default:
            console.log("Opção invalida!") ;
            break;      
    }
}

module.exports = {
    addTask,
    showTask,
    attStatus,
    deleteTask,
    tarefas
};