const sendRespToPostman = (req, res, respObj) => {
	res.status(respObj.statusCode).json(respObj);
};

const sendErrToPostman = (req, res, ErrObj) => {
	res.status(ErrObj.statusCode).json(ErrObj);
};

export { sendRespToPostman, sendErrToPostman };
