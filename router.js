import { Router } from "express";
import TodoController from "./TodoController.js";

const router = new Router()

router.post('/todo', TodoController.create)
router.get('/todo', TodoController.getAll)
router.put('/todo', TodoController.update)
router.delete('/todo/:id', TodoController.delete)
router.delete('/todo', TodoController.deleteAll)

export default router
