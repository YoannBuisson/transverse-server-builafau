import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    duration: Number,
    priority: Number,
    assignee: [{ type: Schema.Types.ObjectId, ref: 'User'}],
});


export const Task = mongoose.model('Task', taskSchema);