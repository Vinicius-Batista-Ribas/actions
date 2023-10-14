const chai = require('chai');
const expect = chai.expect;

const {  addTask, showTask, deleteTask ,tarefas} = require('../src/main.js');

const tarefa = {
    titulo : "Projeto 1",
    descricao : "projeto de C214 lab",
    status : "A fazer"
};
const tarefa2 = {
    titulo : "Projeto 2",
    descricao : "projeto de C214 lab",
    status : "A fazer"
};

describe('Lista de tarefas', () =>{
   describe('Add Task', () =>{
        it('Adicionando tarefa a lista',() =>{
            const result = addTask(tarefa.titulo,tarefa.descricao,tarefa.status);
            chai.assert.notStrictEqual(result, null);
        });
        it('Tentando adicionar com erro', () =>{
            const result = addTask("",tarefa.descricao,tarefa.status);
            expect(result).to.equal(null)
        });
   });

   describe('Delete Task', () =>{
        it('Deletando task existente',() =>{
            const list = []
            var task = new tarefas(tarefa.titulo,tarefa.descricao,tarefa.status);
            list.push(task);

            const result = deleteTask(list,0)

            expect(result).to.equal("Tarefa  excluída.")

        });
        it('Deletando task inexistente', () =>{
            const list = []
            var task = new tarefas(tarefa.titulo,tarefa.descricao,tarefa.status);
            list.push(task);

            const result = deleteTask(list,4)

            expect(result).to.equal("tarefa nao encontrada")

        });
    });

    describe('Show Task', () =>{
        it('Listando lista vazia',() =>{
            const list = []
            const result = showTask(list);
            expect(result).to.equal(null)

        });
        it('Listando lista existente', () =>{
            const list = []
            var task = new tarefas(tarefa.titulo,tarefa.descricao,tarefa.status);
            var task2 = new tarefas(tarefa2.titulo,tarefa2.descricao,tarefa2.status);
            list.push(task);
            list.push(task2);

            const result = showTask(list)

            chai.assert.notStrictEqual(result, null);

        });
    });
})