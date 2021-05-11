var a = 1; //eslint-disable-line no-unused-vars
var b = "I am teaching you this course";
var c = "Hello Guys";
var mygoal = 'Learn ASAP';
document.write(c + ' ' + b + ' ' + mygoal);

var blank = ""; //eslint-disable-line no-unused-vars
var firstname = "Alok"; //eslint-disable-line no-unused-vars
var lastname = "Reddy"; //eslint-disable-line no-unused-vars
var Array = ['A', 'L', 'O', 'K'];
var output = document.getElementById('output');
var fullname = firstname + ' ' + lastname; //eslint-disable-line no-unused-vars
output.innerHTML = Array[1];
output.innerHTML = firstname;
/*output.innerHTML= fullname;*/

function myname(a, b) { //eslint-disable-line no-unused-vars
  var fullname = a + ' ' + b;
  return fullname;
}
output.innerHTML = myname(firstname, lastname);

function hellobuddy() { //eslint-disable-line no-unused-vars
  alert('hello bro'); // still raises defined but never used
}
