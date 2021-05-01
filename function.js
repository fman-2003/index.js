// FUNCTION 
// A reusable piece or block of code that perform a specific task OR a specific set of tasks

const num5 = 5;
const num3 = 3;
const fivePlusThree = num5 + num3;

// function declaration // function creation
function addNum(a, b) {
//    function scope //local scope
    console.log(a + b)
}

// function invocation//function call

addNum(10, 20)

function sayHello(name){
    console.log(`Hello ${name}`);
}


// return statement

function greet( name ) {
    return `hello ${name}. Welcome to the world of javascript function`
}
const welcome = greet('Fman')

// create a fxn called speakTheRightChinese
// we will supply an array as parameter
// iterate through the arr and check for some condxns
// return some greet if some conditions arec met

function speakTheRightChinese(arr) {
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].toLowerCase() === 'morning'){
          console.log('good morning') 
       }
       if(arr[i].toLowerCase() === 'afternoon'){
        console.log('good afternoon') 
       }
       if(arr[i].toLowerCase() === 'evening'){
        console.log('good evening')
       }
  
    }
 
}
const arr1 = ['MORNING', 'dawn'];
const arr2 = ['twilight', 'afternoon', 'dusk'];
const arr3 = ['daddy', 'mummy', 'evening', 'night']

function multiplyBy4(num) {
    const numX4 = num * 4
    return numX4
}

// function fullName(fname, lname) {
//     return fname + " " + lname;
//  }

//  const myName = fullName(a, b)

// const userName = ( firstName, lastName) =>{
//     return firstName + ' ' + lastName
// }
// userName("tola", 'bolaji')

const anotherUserName = ( firstName, lastName) => firstName + ' ' + lastName

const sayHi = (sampleName) => `Hi ${sampleName}`;
const name = 'Biola';

function saySorry(){
    return `${sampleName}, I am sorry`;
};

const num = 100;

function fizBuzz(val){
    let result = []
    for (let i = 1; i <= val; i++) {
        if(i % 5 === 0 && i  % 3 === 0 ){
            result.push('FizzBuzz')
        }else if(i % 5 === 0){
            result.push('buzz')
        }else if(i % 3 === 0){
            result.push('fiz')
        }else{
            result.push(i)
        }
    }
    return result
}

// create a function called yiJiOh that accept a number (50)
// if the num at each iteration divisible by 10 print (Oh)
// if the number is divisible by 3 and 5, print 'Ji'
//  if the number is divisible by 3 or by 5, print 'yu'
//  if none of the above, print the number