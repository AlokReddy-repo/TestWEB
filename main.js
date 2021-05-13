/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-redeclare */
/* eslint-disable no-empty */
/* eslint-disable no-undef */

var a = 1;
var b = "I am teaching you this course";
var c = "Hello Guys";
var mygoal = 'Learn ASAP';
document.write(c + ' ' + b + ' ' + mygoal);

var blank = "";
var firstname = "Alok";
var lastname = "Reddy";

var Array = ['first item', 'second', 3, 4, 5, 'six', 7];
Array.push('ten');


var output = document.getElementById('output');
var fullname = firstname + ' ' + lastname;


var person = {
  age: 25,
  firstname: 'Alok',
  lastname: 'Reddy',
  fullname: function () {
    return this.firstname + ' ' + this.lastname
  }
};

output.innerHTML = Array[1];
output.innerHTML = firstname;
output.innerHTML= fullname;


var beta = 'SDFNJKIUYTRDLMYSAS';
function splitstring(a){
	var e = a.split('');
	var f = e.sort().join('');
	return f;
}
newOutput(splitstring(beta))

var alpha = 'Array list';

for (var x = 0; x < Array.length; x++) {
  alpha = alpha + '<br>' + Array[x];
}

newOutput(alpha)
function alpha(myOutput) {
  output.innerHTML = myOutput;
}

function selectArray(a) {
  return Array[a];
}

function myname(a, b) {
  var fullname = a + ' ' + b;
  return fullname;
}
output.innerHTML = myname(firstname, lastname);

function hellobuddy() {
  alert('hello bro');
}


function newOutput(myOutput) {
  output.innerHTML = myOutput;
}

/* newOutput('it is working'); */

var one = '8';
if (one == 2) {
  newOutput('Computer'); //true
} else {
  newOutput('User'); //false
}


if ('2' != 2) {
  newOutput('Computer'); //true
} else {
  newOutput('User'); //false
}


if (one > 2) {
  newOutput('Computer'); //true
} else {
  newOutput('User'); //false
}

if (one <= 2 && one <= 8) {
  newOutput('Computer'); //true
} else {
  newOutput('User'); //false
}

function myChoice(a) {
  var b = '';
  if (a > 0 && a <= 0.33) {
    b = 'Alok Reddy';
  } else if (a > 0.33 && a <= 0.66) {
    b = 'Bot';
  } else if (a > 0.66 && a <= 1) {
    b = 'Trojan';
  }
  return b;
}
newOutput(myChoice(0.99));

newOutput(myChoice(Math.random()));

var myRandom = Math.random();
newOutput(myRandom + '<br>' + myChoice(myRandom));

newOutput(selectArray(7));
newOutput(Array.length);

newOutput(person.fullname());




/* eslint-enable no-undef */
/* eslint-enable no-empty */
/* eslint-enable no-redeclare */
/* eslint-enable no-constant-condition */
/* eslint-enable no-unused-vars */
/* eslint-enable no-mixed-spaces-and-tabs */
