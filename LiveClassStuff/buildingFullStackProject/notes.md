####Errors

1. error : routes always start with '/'. if you do app.get("gaurav" , ()=>{}) you
   will get an error. instead do app.get("/gaurav", ()=>{})

2. app.use(express.json()); <-- backend tells that now i can accept json data

3. app.use(express.urlencoded({ extended: true })); <-- backend says that in the url when info is sent like space
   and it gets converted to %20 ---then backend can understand what is said in the url

#### DB methods to study:

1. findOne();
2. create();

--> mongoose gives hooks pre and post

--> if something is encryped it can be decrypted

--> if something is hashed, it cannot be unhashed..so when we hash a password, in order to match the password in the
future we will have to match their hashed versions

--> Study jwt

in controller write controller for register -->

take data from body
validate data --> get error from postman when data not sent
