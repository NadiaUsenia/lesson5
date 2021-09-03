/*function hello() {
    alert('Добро пожаловать!');
}
hello();


function getName() {
    var name = prompt('Как вас зовут?');
    alert(name);
}
getName();

function getAge() {
    var age = prompt('How old are you?');
    alert(age);
}
getAge();

var user = 'Ivan';
function helloUser() {
    var defaultUser = 'Юзер';
    globalUser = 'Супер Юзер';
    user = 'Петя';
    var message = 'Привет ' + user;
    alert(message);
}
console.log(user);
helloUser();
//console.log(defaultUser);
console.log(globalUser);*/

/*function showMessage(from, text) {
    alert(from+ ':' + text);
}
showMessage('Маша','Как дела?');

function createArray(length) {
    length = length || 10;
    var array = [];
    for(var i = 1; i <= length; i++) {
        array.push(i);
    }
    console.log(array);
}
createArray(5);

function test(a, b, c) {
    console.log(a, b, c);
    console.log(arguments);
    if(arguments.length > 3) {
        for(var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}
test(4, 5, 6, 5, 45, 32);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
var result = checkAge(54);
if (result == true) console.log('Yes');
else console.log('No');

function showMove(age) {
if (checkAge(age) == true) {
    return 'YESYES';
} else {
    return 'NONO';
}
}
console.log(showMove(56));


function sum(a, b) {
    return a + b;
}
var c = sum(5, 7);
console.log(c);

var hello = function(user) {
    console.log('Hello ' + user);
};
hello('OLY');

var hello2,
    user = prompt('who are you?');
    if (user != '') {
        hello2 = function() {return 'HELLO ' + user};
    } else {
        hello2 = function() {return 'HELLO sombody'};
    }

    var result = hello2();
    console.log(result);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();

}
ask(
    'Are you agry?',
    function() { alert('You are agry'); },
    function() { alert('You are not agry'); }
);

function printArray(array) {
    console.log(array[i]);
    i++;
    if(i < array.length) printArray(array);
}
var i = 0;
printArray([1, 76, 77, -90, 67]);*/

//Задание 1

function sum1(a, b, c) {
    return (a-b) / c;
}
var q = sum1(33, 3, 5);
console.log(q);

//Задание 2

function cube(w) {
	return w * w * w;
}
console.log(cube(3));

function square(e) {
	return e * e;
}
console.log(square(3));

//Задание 3
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  console.log(min(3, 1));

  function max(a, b) {
      if (a > b) {
          return a;
      } else {
          return b;
      }
  }
  console.log(max(3, 1));

  //Задание 4  NOT READY
function array4(array) {
    var arr4 = [];
    var answer = prompt('Введите число?');
    while(answer !== '') {
        arr4.push(answer);
        answer = prompt('Введите число?');
    }
    return(arr4);
}
array4();

//Задание 7
/*console.log('Задание_7');
let arr_7 = [];
let answer = prompt('Введите число?');
while(answer !== '') {
    arr_7.push(answer);
    answer = prompt('Введите число?');
}
console.log(arr_7);
let result_7 = 0;
for(let m = 0; m < arr_7.length; m++) {
    result_7 += +arr_7[m];
}
console.log(result_7);*/

//Задание 5

function isEven(even) {
    if (even % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
var result5 = isEven(12);
console.log(result5);

//Задание 6  НЕ ВСЕ СДЕЛАНО

function arr6(arr) {
    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
   
  }
  
  var someArray = [12, 13, 14] ;
  arr6(someArray);
  
  
//Задание 7  ИНТЕРНЕТ . я не понимаю решение

let symbol = prompt('символ');
function hefren(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    console.log(m+'\n')
  }
};
hefren(prompt('число'))

//Задание 8 .Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек

function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if (isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}
 
const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

//Задание 9 

function getFibArray(N){
    const arr = [];
    for (let i = 0; i< N; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i-1] + arr[i-2]
    }
    return arr;
    }

//Задание 10

var num = '47568';

function toNine (arr) {
var sum1 = 0;
for(var i = 0; i < arr.length; i++){
sum1 += +arr[i];
}
if (sum1 > 9){
toNine(sum1+'');
}else{
alert(sum1);
}
}
toNine(num);

//Задание 10
function func10(arr) {
    alert(arr[0]);
    arr.splice(0, 1);
    if (arr.length > 0) {
        func10(arr);
    }
}
func10([9, 4, 3])