//Variable & Method(Number,Math)//

var userName = "kyaw";
var string = "Hello World";
var num = 13;
var num1 = 13.5;
var pi = Math.PI;
var rum = Math.random()*100;
var num2;


console.log(userName);
console.log(string);
console.log(string.length);
console.log(string.charAt(4));
console.log(string.lastIndexOf("d"));
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.indexOf("H"));
console.log(Number(num));
console.log(Number.isInteger(num));
console.log(Number.parseInt(num1));
console.log(Number.isNaN());
console.log(pi);
console.log(Math.round(pi));
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.min(pi));
console.log(Math.max(pi));
console.log(Math.floor((Math.random()*10)));
console.log(pi.toFixed(3));
console.log(rum.toFixed(4));

//athematic operators//
// plus+ minus- multiple* divided/ modulus% increase++ decrease-- power**//

var a1 = 4;
var a2 = 12;
var a3 = 13;
console.log(a1+a2);
console.log(a2-a1);
console.log(a2*a1);
console.log(a2/a1);
console.log(a3%(++a1));
console.log(++a1);
console.log(--a3);
console.log(a2**a1);

//function//
var f1;
var f2;
var uname = "kyaw";
    var age = 20;

function sayhi(){
    
    console.log("User Name is " + uname + " and Age is " + age); 
}

sayhi();

//const => arrow function //
const say = name => {return name};

var res = say("Mei");

//sum function with return//

function sum(f1,f2){
    return f1+f2;
}

var result = sum(12,13);

 
//document.querySelector(".result").innerText = result;
document.querySelector(".result").innerText = res ;










