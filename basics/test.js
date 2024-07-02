//variabes let const
let val="hari";
val="chandana";
let name="hari chandana";
console.log(val);
const num=222;
let numb=null;
let n;
let bool=true;
//num=87;
console.log(num);
console.table([val, name,num]);

console.log("****");

//(datatypes)
// stack memory/copy of the value/primitive:number, bigint, string, boolean, null, undefined, symbol
//heap memory /reference/reference of the original vaue/non primitive : object{}, array[], function()
//typeof as keyword and as method typeof()
 console.log(typeof name);
 console.log(typeof num);
 console.log(typeof numb);
 console.log(typeof n);
 console.log(typeof bool);

 console.log("****");
//conversion
 let otherval=Number(name);
 console.log(otherval);
 let othval=Number(numb);
 console.log(othval);
let otval=Number(n);
console.log(otval);
let oval=Number(bool);
console.log(oval);

console.log("****");

let value=String(num);
console.log(value);
console.log(typeof value);

console.log("****");

//prifix and postfix
let x=3;
let y=x++;
console.log(x);
console.log(y);

let a=3;
let b=++a;
console.log(a);
console.log(b);

console.log("****");

//stack and heap 
let obj={
     email:"hari@gmail.com",
     id:233

};

let otherobj=obj;
otherobj.email="chandana@gmail.com";
console.log(otherobj);
console.log(obj);

console.log("****");

//string implicitily it converts number into string(1+2)=3+"2"=32
console.log(1+2+"2");
console.log("2"+2+2);

console.log("****");

//strings 
//interpolation by `....` and ${} is placeholders
let nam="hari";
let age=25;
console.log(`name of the student is ${nam} and age of the student is ${age}`);

let studentName= new String("hari");//creating object by using String() constructor
console.log(typeof studentName);
console.log(studentName);//output is object and this formate [String: 'hari']
console.log(studentName.__proto__);//{}-o/p

//charAt(), indexOf(), toUpercase(), trim(), slice() can use -ve values slice(-4, 3)
//subString(), replace(), include(), split(seperator, limit)
console.log(studentName[0]);
console.log(studentName.charAt(3));
console.log(studentName.indexOf('i'));
console.log(studentName.toUpperCase());
console.log(studentName.length);//here length is not a function

let newStudentName=studentName.substring(0, 2);
console.log(newStudentName);

let newName="    harichandana    ";
console.log(newName);
console.log(newName.trim());

console.log(newName.includes("chandana"));//returns boolean value

//browser will not take spaces instead takes %20
let url="https://hari%20chandana.com";
console.log(url.replace('%20', ' '));

let otherStudent="hari chandana mothukuri";
console.log(otherStudent.split(' ', 2));//returns in form of array

console.log("****");

//numbers
const bal= new Number(56);
console.log(typeof bal);
console.log(bal);

const numval=64;
console.log(typeof numval);
console.log(numval);

 let newbal=bal.toString();
console.log(typeof newbal);
console.log(bal.toString().length);

let newnum=88;
console.log(newnum.toFixed(2));

//toPrecision()
let numm = 123.456;
console.log(numm.toPrecision(2));
console.log(numm.toPrecision(3));
console.log(numm.toPrecision(4));
console.log(numm.toPrecision(5));

let hundreds=1000000;
console.log(hundreds.toLocaleString());//default usa
console.log(hundreds.toLocaleString('en-IN'));//indian conversion

console.log("****");

//Math
console.log(Math.abs(-4));//converts -ve number to +ve
console.log(Math.round(7.8));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));

console.log("          ");

console.log(Math.min(2,5,1,0));
console.log(Math.max(2,5,1,0));
console.log(Math.sqrt(36));

console.log("          ");

console.log(Math.random());//values between 0 and 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);//+1 to avoid in case of 0





















