####Errors

1. error : routes always start with '/'. if you do app.get("gaurav" , ()=>{}) you
   will get an error. instead do app.get("/gaurav", ()=>{})

2. app.use(express.json()); <-- backend tells that now i can accept json data

3. app.use(express.urlencoded({ extended: true })); <-- backend says that in the url when info is sent like space
   and it gets converted to %20 ---then backend can understand what is said in the url

4.
