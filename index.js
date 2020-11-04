// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(string1="*") {
    return function(string2="special") {
        return `You are ${string1}${string2}${string1}!`
    }
}

const Calculator = {
    add: (a,b) => { return a+b },
    subtract: (a,b) => { return a-b },
    multiply: (a,b) => { return a*b },
    divide: (a,b) => { return a/b }
};

  let actionApplyer = function(startingInt, arrayOfFunctions) {
    let a = startingInt
    for (let i = 0; i < arrayOfFunctions.length; i++) {
       a = arrayOfFunctions[i](a)
    }
    return a
}

