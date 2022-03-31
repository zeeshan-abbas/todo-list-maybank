import models  from '../db/models/index.js';

const { Todo } = models;

export async function getTodoList(req, res) {
    try {
        const todos = await Todo.findAll();
        res.status(201).send({ payload: todos });
    } catch (e) {
        res.status(500).send({ message: 'Unable to process. Try again later!'});
    }
}

export async function getTodo(req, res) {
    const { id } = req.params;
    try {
        const todo = await Todo.findOne({ where: { id }});
        res.status(201).send({ payload: todo || {} });
    } catch (e) {
        console.log('e', e);
        res.status(500).send({ message: 'Unable to process. Try again later!'});
    }
}

export async function addTodo(req, res) {
    const { task, completed } = req.body;
    try {
        await Todo.create({
            task,
            completed
        })
        res.status(201).send({ message: 'Todo Task created.'});
    } catch (e) {
        res.status(500).send({ message: 'Unable to process. Try again later!'});
    }
}

export async function updateTodo(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;
    try {
        await Todo.update({ task, completed }, { where: { id }});
        res.status(201).send({ message: 'Todo Task updated.'});
    } catch (e) {
        res.status(500).send({ message: 'Unable to process. Try again later!'});
    }
}

export async function deleteTodo(req, res) {
    const { id } = req.params;
    try {
        await Todo.destroy({ where: { id }});
        res.status(201).send({ message: 'Todo Task deleted.'});
    } catch (e) {
        res.status(500).send({ message: 'Unable to process. Try again later!'});
    }
}
