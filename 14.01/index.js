console.log(1!==3);
console.log(13>14 || 13<17);
console.log(Math.floor(Math.random()*1500));
console.log(Math.floor(2.22)*Math.random());//the random hier givr us everytimr we save a different number less than 2.22

console.log(Math.ceil(Math.random()*1500));
let str3 = "hamza"
let randomNum = Math.floor(Math.random()*str3.length);// its give us everytime we save a different characters from the "hamza"=> h|a|z.....
console.log(str3[randomNum]);
console.log(str3.length);
let use1 = "    hamza    ";
let use2 = " are 1,85 M";
console.log(use1+use2);
console.log("mohammed"[Math.floor(Math.random()*"hamza".length)]);
console.log(use1.trim().toUpperCase())// .trim to ignore the space
console.log(use1.trim().length);// to check how many characters after ignore the space with '.trim'
let str4 = "today is -1°";
console.log(str4.includes("1"));
let strtoArr = str4.split("");//to separate a string with the charachter between the () 
console.log(strtoArr[1])







