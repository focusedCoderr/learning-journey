import mongoose from 'mongoose';

const subTaskSchema = mongoose.Schema({}, { timestamps: true });

export const Subtask = mongoose.model('Subtask', subTaskSchema);
