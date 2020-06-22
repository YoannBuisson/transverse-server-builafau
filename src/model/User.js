import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
}, {collection:'User'});


export const User = mongoose.model('User', userSchema);