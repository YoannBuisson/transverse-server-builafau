import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    duration: Number,
    priority: Number,
    status: Boolean,
}, {collection: 'Task'});


export const Task = mongoose.model('Task', taskSchema);