import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    creator: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, {collection:'Project'});


export const Project = mongoose.model('Project', projectSchema);