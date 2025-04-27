#### These are some extra notes apart from notebook that came to me after I had written in the notebook and there was no space left. It might be possible that I might not write anything in it. This is only need to do basis.

-> basically require module -> looks in internal system if id -> "moduleId"

-> if "./" -> looks in present directory

-> "../" -> looks in one directory up

##### if module.exports written in file && named exports also present --> exports object empty && no named exports done. Only module.exports will be done

---

npm init --> package.json file created
npm i express || ANY_PACKAGE_NAME --> package-lock.json created && node_modules created

##### package-lock.json :

--> at the time of first module install --> this file created
--> keeps track of what dependendcies for what package
--> also keeps track of their versions at the time of their install

--> pushed on github --> so that other contributors also have same dependencies and their versions

--> node_modules --> not pushed on github

##### package.json :

--> keeps track of what packages are installed and general info about the project.

--> does not track dependencies

##### Task:

--> create your own express using http module
--> make simple --> handles get and post request
--> keep in mind that basically express is wrapper around the things that you do using http module
--> make in way that --> user gives you routes using your handler function and those routes get registered internally

--> use req.method and req.url given by node and create a layer

--> CREATE SOMETHING LIKE THIS:

```js
const c = require("cohortjs");

c.getCallPr("/", function () {});

c.suno(8000).aurPhir(() => {
	console.log("Server is listening on this port");
});
```
