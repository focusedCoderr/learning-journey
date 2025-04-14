const checkWorkingFunctionality = async (req, res) => {
	res.status(201).json({
		message: "basic working properly",
	});
};

const registerUser = (req, res) => {};
export { checkWorkingFunctionality, registerUser };
