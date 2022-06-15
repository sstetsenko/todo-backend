import mongoose from 'mongoose'
const { Schema, model } = mongoose

const TodoItem = new Schema({
    checked: { type: Boolean, required: true },
    title: { type: String, required: true },
    idTodo: { type: Number, required: true }
})

export default model('TodoItem', TodoItem)