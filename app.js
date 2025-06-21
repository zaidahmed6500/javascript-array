var students = ["Ali", "Usman", "Adil"];
students.push("Zaid");
console.log(students);




var fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits);



var days = ["Tuesday", "Wednesday"];
days.unshift("Monday");
console.log(days);



var colors = ["Red", "Blue", "Green"];
colors.shift();
console.log(colors);




var subjects = ["English", "Urdu", "History"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);



var cities = ["Lahore", "Karachi", "Islamabad", "Quetta"];
cities.splice(1, 2);
console.log(cities);



var countries = ["Pakistan", "India", "China", "Nepal"];
var firstThree = countries.slice(0, 3);
console.log(firstThree);




var fruitString = "apple,banana,mango";
var fruitArray = fruitString.split(",");
console.log(fruitArray);




var chars = ['J', 'S'];
var joinedString = chars.join("");
console.log(joinedString);




var arry1 = ['pen', 'pencil'];
var arry2 = ['eraser', 'sharpener'];
var combined = arry1.concat(arry2);
console.log(combined);


var numbers = [10, 5, 2, 8];
nums.sort();
console.log(numbers);



var names = ["Zain", "Ali", "Omar", "Bilal"];
names.sort();
console.log(names);




var numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);




var colorList = ["Red", "Green", "Blue", "Yellow"];
var index = colorList.indexOf("Blue");
console.log(index);



var emptyArray = [];
emptyArr.push("Item1", "Item2", "Item3");
console.log(emptyArray);


var numsArray = [10, 20, 30, 40, 50];
numsArr.splice(2, 1);
console.log(numsArray);




var techString = "HTML CSS JavaScript";
var techArray = techString.split(" ");
console.log(techArray);


var abc = ['a', 'b', 'c'];
var reversedJoined = abc.reverse().join("-");
console.log(reversedJoined);



var cityList = ["Lahore", "Karachi", "Islamabad"];
var karachiIndex = cityList.indexOf("Karachi");
console.log(karachiIndex);



var even = [2, 4, 6];
var odd = [1, 3, 5];
var allNums = even.concat(odd).reverse();
console.log(allNums);
