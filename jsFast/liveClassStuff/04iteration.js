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
console.log(totalSales);
console.log(lowStockItems);

let userActivity = [
    { user: "Alice", activityCount: 95 },
    { user: "Bob", activityCount: 55 },
    { user: "Charlie", activityCount: 85 },
    { user: "Karlie", activityCount: 323 },
];
// try giving name -user in parameter
let mostActiveUser = userActivity.reduce((max,curruser)=>(
    curruser.activityCount>max.activityCount? curruser: max

));

console.log(mostActiveUser);