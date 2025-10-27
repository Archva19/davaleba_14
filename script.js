// 1.

const number1 = 20;
const number2 = 6;

const sum = number1 + number2;
const substract = number1 - number2;
const multiply = number1 * number2;
const division = number1 / number2;
const remainder = number1 % number2;

console.log(sum);
console.log(substract);
console.log(multiply);
console.log(division);
console.log(remainder);


// 2.

let age = 25;

if (age >= 18){
    console.log("თქვენ ზრდასრული ხართ")
} else {
    console.log("თქვენ არასრულწლოვანი ხართ")
}

// 3.

let grade = 85;

if (grade >= 90){
    console.log("A");
} else if (grade >= 80){
    console.log("B");
} else if (grade >=70){
    console.log("C");
} else {
    console.log("F");
}

// 4.

let productPrice = 200;
let productNumber = 2;

let fullPrice = productPrice * productNumber;

if (fullPrice > 100){
    fullPrice = fullPrice - fullPrice * 0.1;
}

console.log(`${productNumber} პროდუქტის ფასია ${fullPrice}`);

// 5.

let a = 5;
let b = 14;
let c = -20;

if (a > 0 && b > 0 && c > 0){
    console.log("სამივე რიცხვი დადებითია");
} else if (a < 0 || b < 0 || c < 0){
    console.log("ერთი მაინც რიცხვი უარყოფითია");
}

// 6.

const username = "Anna";
const password = "Anna123";

if (username === "Anna" && password === "Anna123"){
    console.log("შესვლა წარმატებით დასრულდა");
} else {
    console.log("შესვლა ვერ მოხერხდა");
}

// დამატებით.

let C = 40;

if (C < 15){
    console.log ("cold");
} else if (C >= 15 && C <= 25){
    console.log("warm");
} else if (C > 25){
    console.log("hot");
}

let F = C * 9 / 5 + 32;
console.log(`${C}°C is equal to ${F}°F`);
