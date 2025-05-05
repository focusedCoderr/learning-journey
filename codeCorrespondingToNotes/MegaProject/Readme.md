--> npm init -> node project initialized-> package.json file created

--> npm install express cors mongoose express-validator dotenv <- package-lock.json created -> all packages and their dependencies with versions -> node modules folder not pushed -> new developer after pulling from github -> npm i -> install packages and dependencies from package-lock.json -> in a nutshell package-lock.json locks the package and dependencies at the time of project creation

--> npm install -D prettier nodemon || npm install --save-dev prettier nodemon <- developer dependencies

--> .prettierrc -> write config
--> .prettierignore -> .env & node_modules

--> "type" : "module" <- in package.json
--> .env & .env.example

--> public folder <- files taken from user are put here tempporarily || folder used for public purpose
--> .gitkeep <- to push empty folder on github

--> src <- all code in this folder
--> inside src -> mkdir controllers routes models db middlewares utils validators

--> src -> index.js
--> src -> app.js <- to segregate what we used to do in index.js -> make app using express -> export it

--> import app in index -> import dotenv in index -> give dotenv path

--> define PORT in index -> use process.env.PORT || 8000 -> if after deployment -> app crashing just after deployment -> check .env file for port

--> we will connect db before listening on port

--> in dbconnect.js -> if somehow, the connection failed and an error occured -> you can exit the application using process.exit(1) if you do not want your app to run without db -> if you want your app to run with error, you can just log the error and move.

--> process.exit(1) -> the node process which started when the app started -> it will be exited and the entire node process will stop.
--> when we do node index.js -> a node process is started -> and a global process object is created -> this object has a built in method exit -> process.exit(1) -> kill the process right now with exit code 1 which means error occured -> 0 means success

--> Similarly, in process.env -> a global object process is present when node process is started -> env is a built in object in that - dotenv reads the variables in .env and assign them in process.env during runtime

--> an async function always returns a promise

--> start listening inside callback fn of connectDB's then

--> standardize errors -> apiError class extends Error class ->

--> standardize response -> make class -> write constructor
