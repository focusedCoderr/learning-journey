import mongoose from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../utils/constants.js";

const projectMemberSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		project: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Project",
			required: true,
		},
		role: {
			type: String,
			enum: AvailableUserRoles,
			default: UserRolesEnum.MEMBER,
		},
	},
	{ timestamps: true },
);

export const Projectmember = mongoose.model(
	"Projectmember",
	projectMemberSchema,
);
