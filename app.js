// console.log("Hello world");
// alert("Stop! you are not using update version of this browser.");

// let b = "smoothie";
// console.log(b);
// var a = 45;
// console.log(a);

// let age = prompt("Hey, What is your age?");
// document.getElementById('some-text').innerHTML = age;


// //increment one by one
// let number = 10;
// number = number + 1;
// number++;
// consolelog(number);

// //decrement one by one
// let numb2 = 42;
// numb2--;
// console.log(numb2);


// //remainder 
// let num3 = 13;
// let numb4 = 3;
// numb5 = num3 % numb4;
// console.log(numb5);  //will give us the remainder in the console


//creating function 
//step1: creat a function 
//step2: call the function out side of the function


// function greetin() {  //createdte the function
//     console.log("This is a function");
// }
// greetin();  //called the function


// function greeting() {
//     let name = prompt("What is your name?");
//     let result = "Hellop" + name;  //string concateing
//     console.log(result);  //created the function 
// }
// greeting();  //the function is called


//adding numbers in function simple way possible
// function sumNumber(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// sumNumber(4, 5); //will print 4+5=9
// similarly we can print all the operations in the functin 

//loop  
//while loop
// let num = 0;
// while (num < 100) {
//     console.log(num);
//     num++;
// } //will print till 0-99 
//loops works until the condition is not fulfiled 


//data types
//there are many types of data 
//such as string number null boolian undefined etc


// let yourAge = 18;  //number
// let yourName = "Ali Neaz"; //which is a string
//data types can be checked by typeOf
//arrays 
// let myArray = ['neaz', 'apple', 34, myname = { first: "ali", last: "neaz" }, null, true, flase]; //aray but nested array


//objects in jscript 

// let nameA = {
//     first: "Ali",
//     last: "Neaz"
// };
// console.log( typeof(nameA));

//nested objects in jscript 

//undefined variable using let
// let yourName;  //undefined variable
// console.log(typeof (yourName));
// let nothing = null; //datatype null 



//string in jscript
// let fruit = 'bAnAnA';
// let moreFruit = 'banana \n apple';  //\n for new line 
// // console.log(moreFruit);

// let extraFruit = 'banana, apple , orange, komola, koal, jam, etc';
// // console.log(extraFruit);
// fruitlength = fruit.length;
// console.log(fruitlength);
// console.log(moreFruit.indexOf('an')); //finding index of some particular slice of word


// console.log(fruit.slice(2, 5));
// console.log(fruit.replace('ban', 'myName')); //will replace ban with myName
// console.log(fruit.toUpperCase()); //will print to upper case

// console.log(fruit.toLowerCase()); //wp all lowarCase 
// console.log(fruit.charAt(1)); //everything starts with 0 
// console.log(extraFruit.split(' '));








//Array terms
// //array
// let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// let fruitsNew = new Array('banana', 'apple', 'orange', 'pineapples');

// // alert(fruits[1]);  
// // console.log(fruits[1]);  //using the values of a array
// // console.log(fruits[2]);

// //changing values to the array
// fruits[0] = 'pear'; //these would be no banana in the array but pearfor
// console.log(fruits);
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);  //printing one at a time
// }

// //array comon methods
// console.log('to string', fruits.toString());
// console.log(fruits.join('_'));  //joining the values in the array using any symbol or anything
// console.log(fruits.join('A'));
// console.log(fruits.join('/'));
// console.log(fruits.join('*'));
// console.log(fruits, fruits.pop(), fruits); //pop last value of array

// console.log(fruits.push('blackberry'), fruits); //add or pushing or push
// fruits[4] = 'new fruit';
// console.log(fruits);  //as push meaning adding another item to array
// fruits.shift(); //removing the first item
// console.log(fruits);
// fruits.unshift('keiwi');

// let vegetables = ['asparagus', 'tomato', 'braccoli']; //another array
// let allGroceries = fruits.concat(vegetables);  //addingtwo arrays
// console.log(allGroceries);

// console.log(allGroceries.slice(1, 4));  //slicingarray
// console.log(allGroceries.reverse()); //reversing array
// console.log(allGroceries.sort()); //sorting according to alphbatically

// let someNumbers = [5, 4, 1, 3, 74, 5, 7, 8, 2,];
// console.log(someNumbers.sort()); //accending sorted 
// console.log(someNumbers.sort(function (a, b) { return a - b })); //sorted accending order also
// console.log(someNumbers.sort(function (a, b) { return b-a }));  //descending order sorting}




//loops
// let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for (let i = 0; i < myArr.length; i++){
// //     console.log(myArr[i]);
// // }

// //also can be written an 
// myArr.forEach(function (element) {
//     console.log(element);
// })

//while loop 
// let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// while (i < myArr.length) {
//     console.log(myArr[i]);
//     i++;
// }


// //do while loop
// let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// do {
//     console.log(myArr[i]);
//     i++;
// } while (i < myArr.length);


// break statement and continue statement 

// for (let i = 0; i < 10; i++){
//     if (i == 2) {
//         // break;  /will print 0 & 1 
//         continue; // will print everything except 3
//     }
//     console.log(i);
// }


// dates in jscript
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());





//DOM manipulation with jscript
// document.location;
// document.getElementById("idName").click.methods //will work as click function
// document.getElementById("idName").style.methods //will change the styles of css

// let element = document.getElementById("click");
// console.log(element);


// let myclass= document.getElementsByClassName('container');
// // console.log(myclass);
// myclass[0].style.background = "red";
// //adding new class 
// myclass[1].classList.add("nameOfClass");
// myclass[1].classList.remove("nameOfClass"); //will remove the class
// myclass[1].classList.replace("nameOfClass"); //will replace the class

//innterHtml or innerText
// console.log(myclass[0].innerHtml);
// console.log(myclass[0].innerText);

//by tag names
// tn = document.getElementsByTagName("div");
// console.log(tn);

// //creating tags
// createdElement = document.createElement('p');
// createElement.innderText = "this is a creative para";
// tn[0].appendchild(createdElement);


// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = 'This is a created pera';
// tn[0].appendChild(createdElement);

//removeChild(element) ---> will remove the element

// document.location
// document.timeline
// document.scripts
// document.URL
// document.links
// document.images
// document.domain

 //querry selector
// let sel = document.querySelector('container'); //will return one
// console.log(sel);
// let sel = document.querySelectorAll('container'); //will retun all



// jscript events

// function onclickFunction() {
//     console.log("The button was clicked");
// }

// window.onload = function () {
//     console.log('The document was loaded');
// }

//add event linstern
// firstContainer.addEventListener('click', function () {
//     console.log("clicked");
// });
// firstContainer.addEventListener('mouseover', function () {
//     console.log("clicked");
// });

//mouseout  like mouse out

// we have a long way to go the journey is not over yet 




//arrow function
// function summ(a, b) {
//     return a + b;
// }
// summ = (a, b) => {  //this is also gonna give me the same valu like the previous one
//     return a + b;
// }



//set time out and set interval

// logFunc = () => {
//     console.log("I am your log");
// }
// setTimeout(logFunc, 2000)  //setTime(funcName,time)
// setInterval((name) => {
//     console.log("you are not that good dude!!")
// }, 2000);  //setInterval will do that event after the time a defined
//set interVal will give me a id that i can store as a var and clearInterval will stop it with that id

//also can be done for setTimeout using clearTimeout 
//remember to use id always 
//clearTimeout(idName)

