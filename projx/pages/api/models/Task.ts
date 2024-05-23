import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    column: {type: String, required: true},
    content: {type: String, required: true},
}, {timestamps: true});


export default  mongoose.models.Task || mongoose.model('Task', taskSchema);