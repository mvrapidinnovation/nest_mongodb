import * as mongoose from 'mongoose';

export const userStatSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});