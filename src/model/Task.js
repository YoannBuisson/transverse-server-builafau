import mongoose from 'mongoose';
import {User} from "./User";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    duration: Number,
    priority: Number,
    status: Boolean,
    assignee: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, {collection: 'Task'});


export const Task = mongoose.model('Task', taskSchema);