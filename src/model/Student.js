import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    email: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project'}]
}, {collection:'Student'});


export const Student = mongoose.model('Student', studentSchema);