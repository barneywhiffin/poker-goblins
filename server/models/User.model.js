import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    elo: {
        type: Number,
    },
});

// optional 3rd argument in .model gives the collection name (string)
export const User = mongoose.model('User', UserSchema);
