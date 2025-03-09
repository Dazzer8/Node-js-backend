//write a `for ` loop that lest all the cities in the array `["Paris, "New York", "Tokyo", "London"]`and store each cities in new array name `cityList`.


let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    const mycity = cities[c];
    cityList.shift(mycity);
    
}
console.log(cityList);