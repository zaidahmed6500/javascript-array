
var students = ["Ali", "Sara", "John"];
students.push("Ayesha");




var fruits = ["Apple", "Banana", "Mango"];
fruits.pop();




var days = ["Tuesday", "Wednesday"];
days.unshift("Monday");



var colors = ["Red", "Blue", "Green"];
colors.shift();




var subjects = ["English", "Urdu", "Islamiat"];
subjects.splice(2, 0, "Math", "Science");




var cities = ["Lahore", "Karachi", "Islamabad", "Quetta"];
cities.splice(1, 2); 



var countries = ["Pakistan", "India", "China", "Nepal"];
var firstThree = countries.slice(0, 3);





var fruitString = "apple,banana,mango";
var fruitArray = fruitString.split(",");



var chars = ['J', 'S'];
var joinedString = chars.join("");




var arr1 = ['pen', 'pencil'];
var arr2 = ['eraser', 'sharpener'];
var combined = arr1.concat(arr2);




var nums = [10, 5, 2, 8];
nums.sort(); 




var names = ["Zain", "Ali", "Omar", "Bilal"];
names.sort();



var numbers = [1, 2, 3, 4, 5];
numbers.reverse();




var colorList = ["Red", "Green", "Blue", "Yellow"];
var index = colorList.indexOf("Blue"); 




var emptyArr = [];
emptyArr.push("Item1", "Item2", "Item3");



var numsArr = [10, 20, 30, 40, 50];
numsArr.splice(2, 1); // removes 30



var techString = "HTML CSS JavaScript";
var techArray = techString.split(" ");




var abc = ['a', 'b', 'c'];
var reversedJoined = abc.reverse().join("-"); 





var cityList = ["Lahore", "Karachi", "Islamabad"];
var karachiIndex = cityList.indexOf("Karachi"); 





var even = [2, 4, 6];
var odd = [1, 3, 5];
var allNums = even.concat(odd).reverse(); 

