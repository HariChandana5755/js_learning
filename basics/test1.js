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

console.log("          ");
//date and time
let date=new Date();//present date is output
console.log(date);
let dateNow= Date.now();//January 1, 1970 00:00:00 UTC
console.log(dateNow);//Outputs the current timestamp in milliseconds
let d=new Date(dateNow);
console.log(d);

console.log(typeof date);
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let myDate=new Date(2024, 5, 30, 5, 30, 30);//jan - 0, feb - 1
console.log(myDate);
console.log(myDate.toLocaleString());

let otherDate=new Date("2024-07-02");//to create particular date
console.log(otherDate.toLocaleString());

let time=new Date();
console.log(time);
console.log(time.getTime());
console.log(time.getMonth()+1);//jan - 0
console.log(time.getDay());
console.log(Math.floor(Date.now()/1000));