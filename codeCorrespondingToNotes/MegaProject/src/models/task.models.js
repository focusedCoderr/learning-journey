import mongoose, { Schema } from "mongoose";
import { AvailableTasksStatus, TaskStatusEnum } from "../utils/constants";

const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
		},
		project: {
			type: Schema.Types.ObjectId,
			ref: "Project",
			required: true,
		},
		assignedTo: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		assignedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		status: {
			type: String,
			enum: AvailableTasksStatus,
			default: TaskStatusEnum.TODO,
		},
		attachments: {
			type: [
				{
					url: String,
					mimetype: String,
					size: Number,
				},
			],
			default: [],
		},
	},
	{ timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
