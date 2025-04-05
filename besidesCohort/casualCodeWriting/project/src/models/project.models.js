import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
