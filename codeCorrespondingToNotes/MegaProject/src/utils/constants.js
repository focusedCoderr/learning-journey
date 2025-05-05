const UserRolesEnum = {
	ADMIN: "admin",
	PROJECT_ADMIN: "project_admin",
	MEMBER: "member",
};

const AvailableUserRoles = Object.values(UserRolesEnum);

const TaskStatusEnum = {
	TODO: "todo",
	IN_PROGRESS: "in_progress",
	DONE: "done",
};

const AvailableTasksStatus = Object.values(TaskStatusEnum);

export {
	UserRolesEnum,
	AvailableUserRoles,
	TaskStatusEnum,
	AvailableTasksStatus,
};
