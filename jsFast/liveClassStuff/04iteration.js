let salesData = [
    {product : "def", price: 120},
    {product : "Smatphone", price: 1200},
    {product : "xyz", price: 1240},
    {product : "abc", price: 1210}
];

let inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 51},
    {name: "Widget C", stock: 255},
    {name: "Widget D", stock: 70},
];

let lowStockItems = inventory.filter(element => element.stock<50);

let totalSales = salesData.reduce((acc,element)=>(acc+element.price),0);
// console.log(totalSales);
// console.log(lowStockItems);

let userActivity = [
    { user: "Alice", activityCount: 95 },
    { user: "Bob", activityCount: 55 },
    { user: "Charlie", activityCount: 85555 },
    { user: "Karlie", activityCount: 323 },
];

// try giving name -user in parameter
let mostActiveUser = userActivity.reduce((max,curruser)=>(
    curruser.activityCount>max.activityCount? curruser: max

));

// console.log(mostActiveUser);

let expenses = [
    {description : "Groceries", amount : 50, category : "Food"},
    {description : "Electricity Bill", amount : 100, category : "Utilities"},
    {description : "Dinner", amount : 30, category : "Food"},
    {description : "Internet Bill", amount : 50, category : "Utilities"},
    {description : "Groceries", amount : 50, category : "Food"}

];

// Initially we passed an empty object in the accumulator
// let expenseTracker = expenses.reduce((report, expense)=>{
//     let categoryName = expense.category;
//     let amountTobeAddedToThisCategory = expense.amount;
//     report[categoryName] === undefined ? report[categoryName] =amountTobeAddedToThisCategory : (report[categoryName] += amountTobeAddedToThisCategory);
//     return report;
// },{});

// Now we will pass an array containing an object and get expenseReport
// It is a unnecessary complicated solution but I wanted to put objects in the array.
// Above solution is good.

// let expenseTracker = expenses.reduce((report, expense)=>{
//     let isPresent = false;

//     report.forEach((instance)=>{
//         if(instance.hasOwnProperty(expense.category)){
//             instance[expense.category] += expense.amount;
//             isPresent = true;
//         }
//     })
//     if(!isPresent){
//         let newexpense = {};
//         newexpense[expense.category] = expense.amount;
//         report.push(newexpense);
//     }
    
//     return report;
// },[]);


//  Now we will use || operator in our previous code, and do the same task.

const expenseTracker =  expenses.reduce((report, eachExpense)=> {
    const categoryProperty = eachExpense.category;
    const amountInThisExpense = eachExpense.amount;
    report[categoryProperty] = (report[categoryProperty] || 0) + amountInThisExpense;
    return report;
}, {});

// console.log(expenseTracker);


let tasks = [
    { decription: "Write Report", completed: false, priority: 2 },
    { decription: "Send Mail", completed: true, priority: 3 },
    { decription: "Prepare Presentaion", completed: false, priority: 1 }
];

const completedTasks =  tasks
    .filter((eachTask)=>(!eachTask.completed))
    .sort((a,b)=>{
    return a.priority -b.priority;
})

// console.log(completedTasks);


let movieRatings = [
    { title: "Movie A", rating: [4, 5, 3] },
    { title: "Movie B", rating: [5, 5, 4] },
    { title: "Movie C", rating: [3, 4, 2] },
];

// const movieAndAverageRatings = getAverage(movieRatings);

// function getAverage(movies){
//     const averageRatingsOfMovies = {};
//     for(let key in movies){
//         const gotRating = movies[key].rating.reduce((sum, item)=>(sum+item));
//         const avRating = gotRating/movies[key].rating.length;
//         averageRatingsOfMovies[movies[key].title] = avRating;
//     }
//     return averageRatingsOfMovies;

// }

// console.log(movieAndAverageRatings);

let averageRatings = movieRatings.map((movieDescription)=>{
    const movieAndAverageRating = {};
    movieAndAverageRating["title"] = movieDescription.title;
    const averageRatingOfEachMovie = (movieDescription.rating.reduce((sum, item)=> sum + item))/movieDescription.rating.length; 
    movieAndAverageRating["rating"] = averageRatingOfEachMovie;

    return movieAndAverageRating;
});

console.log(averageRatings);