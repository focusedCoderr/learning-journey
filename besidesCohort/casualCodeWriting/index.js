try {
  const obj = {
    name: "GAurav YADAV",
    age: 22,
  };
  const str = "THis is a string";
  throw obj;
} catch (error) {
  console.log(error.name);

  //   console.log(error.message);
  //   console.log(error.name);
  // console.log(error.stack);
}
