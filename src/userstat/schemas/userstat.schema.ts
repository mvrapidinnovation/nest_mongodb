import * as mongoose from 'mongoose';

export const userStatSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    username: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});