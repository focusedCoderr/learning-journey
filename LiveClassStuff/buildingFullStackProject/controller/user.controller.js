const registerUser = async (req, res) => {
  // res.send("Registered");
  const { email, name, password } = req.body;
  console.log(email, name, password);
};

const acceptPost = async (req, res) => {
  console.log("i am accepting post request");
  const { email, name, password } = req.body;
  console.log(email, name, password);
};

export { registerUser, acceptPost };
