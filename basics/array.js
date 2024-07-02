//arrays are dynamic in js let myarr=[2, 3, "hari", 7.8, true, null];
//resize possible and shallow copy(heap)not(deep copy dont share same refrence(stack))

let myarr=[2, 3, "hari", 7.8, true, null];//parent class object for arrays
console.log(myarr);
console.log(typeof myarr);

let arr=new Array(2,55,66,0);
console.log(arr);
console.log(typeof arr);

console.log("     ");

arr.push(3);
console.log(arr);
arr.push(7);//adds val at last of the array
console.log(arr);
console.log(arr.pop());//remove last val
console.log(arr);
console.log(arr.includes(3));//return boolean val
console.log(arr.indexOf(2));

arr.unshift(6);
console.log(arr);//unshift()-adds val in prefix of the array
arr.shift();//shift()-remove the first value in array
console.log(arr);

console.log("     ");

//converts array into string by join()
let array=[1,2,3,4];
console.log(array);
console.log(typeof array);

let otherArray=array.join();//converts array into string
console.log(otherArray);
console.log(typeof otherArray);
console.log("     ");

//slice and splice
let farr=[1,2,3,4,5];
let sample=farr.slice(1,3);//excluded and no change in original array
console.log(farr);
console.log(sample);

let farr1=[1,2,3,4,5];
let sample1=farr1.splice(1,3);//incuded and original array is changed
console.log(sample1);
console.log(farr1);

