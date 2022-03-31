import express from 'express';
import {
    getTodoList,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} from "../controllers/index.js";

const todoRoutes = express.Router();

todoRoutes.post('/', addTodo);
todoRoutes.get('/', getTodoList);
todoRoutes.get('/:id', getTodo);
todoRoutes.put('/:id', updateTodo);
todoRoutes.delete('/:id', deleteTodo);

export { todoRoutes }

