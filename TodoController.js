import TodoItem from "./TodoItem.js"

class TodoController {
    async create(req, res) {
        try {
            const { checked, title, idTodo } = req.body
            const todo = await TodoItem.create({ checked, title, idTodo })
            res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const todo = await TodoItem.find()
            return res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const todo = req.body;
            const updateTodo = await TodoItem.findByIdAndUpdate(todo._id, todo, { new: true });
            return res.json(updateTodo);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const todo = await TodoItem.findByIdAndDelete(id)
            return res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteAll(req, res) {
        try {
            const todo = await TodoItem.deleteMany({})
            return res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new TodoController()