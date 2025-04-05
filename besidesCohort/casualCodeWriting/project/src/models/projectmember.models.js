import mongoose from 'mongoose';

const projectMemberSchema = mongoose.Schema({}, { timestamps: true });

export const Projectmember = mongoose.model(
	'Projectmember',
	projectMemberSchema,
);
