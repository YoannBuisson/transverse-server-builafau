import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, {collection:'User'});


export const User = mongoose.model('User', userSchema);