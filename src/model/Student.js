import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
}, {collection:'Student'});


export const Student = mongoose.model('Student', studentSchema);