import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export const Task = mongoose.model('Task', taskSchema);
