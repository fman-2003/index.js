// conditionals

const userType = 'boy';
// if
if(userType === 'boy'){
    console.log(true, 'the user is a boy')
}
const balance = [1, 2, 3, 4]
if(balance[3] === 4){
    alert(balance[3])
}

if(balance[0] != 2){
    alert('you are right')
}else{
    alert('please check again')
}
// else
if (balance[1] * 2 === 3) {
    alert(3)
}else{
    alert(balance[1] * 2)
}
// else if

if(userType.charAt(1) === 'b'){
    alert('b')
}else if(userType.charAt(0) === 'b'){
    alert('this is the right character')
}else{
    alert('i don\'t understand!!')
}
// DRY  Don't Repeat Yourself
const firstName = 'Lara';
const lastName = 'Ade';
const middleName = 'Barry';

const fullName = firstName + ' ' + middleName + ' ' + lastName;
// Template literals
const name =  `${firstName} ${middleName} ${lastName}`

// introduction to looping/iteration

// ITERABLE DATA TYPES ARE  1.) STRING 2.) OBJECT, 3.) ARRAYS  4.) NUMBER *WITH REASON



// The following are javascript keywords and thus, should be treated as such

// for, in, of while, do, const, let, var, function, Number, String, Object, Date, Array, switch return, each forEach, map

// iteraTING over a string
// a.) for loop
// component of a for loop => 1. iterator, 2.iterable variable 3. counter
    for(let i = 0; i< firstName.length; i++){
        // write your logic here
        const upperCaseLetter = firstName[i].toUpperCase()
        console.log(i, upperCaseLetter)
    }

const numArr = [1, 2, 3, 4, 5]
let numTimes2 = []
for (let i = 0; i < numArr.length; i++) {
    // logics go here
    const elementTimes5 = numArr[i] * 5;
    numTimes2.push(elementTimes5)
    
}

// assignment

// const name = 'yourName'
// iterate through your name and store the length of your name in a variable called "lengthOfMyName"
const fruit = ['banana', 'onion', 'potatoes'] // "Banana", "Onion", "Potatoes"
// iterate through the fruit array and log each fruit to the console
// iterate through the fruit array, convert only the first letter of each array to uppercase and log it to the console

