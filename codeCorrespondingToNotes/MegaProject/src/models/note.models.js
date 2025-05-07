import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
	{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		project: {
			type: Schema.Types.ObjectId,
			ref: "Project",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export const Note = mongoose.model("Note", noteSchema);
