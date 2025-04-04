# Backend Quick Notes

#### Steps:

1. npm init
2. “type” : “module”
3. npm i express(for routing), mongoose(odm/orm), dotenv (for environment variables), cors(cross origin resource sharing), express-validator
4. npm install –save-dev prettier
5. Create a .prettierrc file and write config in it
6. Create a .prettierignore file which will ignore my .env and node_modules or any other as well if the need arises
7. create file .env. Some people will have .env.example so that they can send to project members, and
   some people also have .env.local - this file sometimes they create so that they can use a separate file for the project when they are testing it on their local machine
8. a public folder is created and inside it sometimes images folder is created so that if i take
   images from the user i can store it in images. please note that git does not push empty
   folder...it does not track it ...so create a .gitkeep file. as the first time we will push the code in deployment the images folder will be empty ...so it will not get pushed and later we will not be able to take images from user
9. A folder src is created in the root which will contain all the code
10. Inside src, we make folders : controllers, db, routes, models, middlewares, utils, validators
11. inside src we make file index.js, app.js
12. inside app.js we import express and create an app using it and export that app
13. inside index.js we import that app and import dotenv and configure dotenv
14. write data in .env file : PORT AND MONGO_URI
15. Create a file dbconnect.js in db folder and now we will connect db
16. import dbConnect function and connect to database in index.js file.
17. after connecting, since we had already imported app from app.js, start listening on port
18. make api-error.js file in utilities in which we will make a class which will inherit the
    Error class and we will try to standarize the errors that we will ecounter during making this project
19. make api-response.js --> utils --> to standarize responses
20.

### Password for Mongo DB : gaurav123
