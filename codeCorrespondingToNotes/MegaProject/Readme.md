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

--> make constants file -> in utils

--> create models file

--> write models

---> Task 1: Study Error Class on Node website or mdn || wherever you want
---> Task 2: Study syntax of passing custom message alongwith a value in mongoose like required:[true, "Project ref is required"]

--> hash password in model only -> can be done in controller also -> sir prefers in model file -> hash using bcryptjs

--> install jsonwebtoken also for future use -> $ npm install bcryptjs jsonwebtoken

--> pre and post hooks --> applied on schema --> to perform an activity just before and just after saving
--> custom methods on schema available through mongoose like -> userSchema.methods.isPasswordCorrect = function(){} <- these types of methods are written by us..to give us some functionality

--> custom methods on userSchema done like generateAccessToken, generateRefreshToken, generateTemporaryToken

--> made controllers files -> controller exported
--> made routes files --> router exported

--> in app.js -> route imported and created route

#### Important Info about relative and current paths given

--> in import statements, current working directory given by -> "./" represents the folder in which that particular file is present in which this line of code is written
--> Similarly "../" -> relative paths are paths relative to the location of the file in which this line of code is written

--> while in functions like dotenv.config({path}) relative path is calculated from the current working directory (CWD) -> CWD is the folder in which you run the node command.

1. if you run the node command in the root folder then that becomes the CWD i.e. node ./src/index.js -> the root folder is the cwd. cwd is not where index file is present
2. if node command run in src folder -> that becomes cwd -> cd src -> node index.js -> cwd is src folder

now all the relative paths are calculated from this cwd

please try running node command from different different folders and try giving relative paths to the config() in dotenv. try ./ as well

examples -> look later when you have experimented on your own : in all the examples .env is located in the root folder -> in this case inside megaproject folder

1. run node in root folder of the project-> node ./src/index.js and inside dotenv path give "../.env" -> will give error while "./.env" does not give error becaue cwd is root folder and all paths are calulated from the cwd
2. run node in src folder -> cd src -> node index.js -> now "../.env" will not give error and "./.env" -> will give error

All this happens from whichever folder node process is started that becomes the cwd and dotenv is imported in the process and relative to this process's location, dotenv tries to read the .env file based on the path given in config() and finally after reading the .env file the variables are set in process.env object
