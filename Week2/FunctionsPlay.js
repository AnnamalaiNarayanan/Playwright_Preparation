// 1. Write a function in JavaScript to check if a number is even or odd using function expression and arrow function.

//1. using named function

function oddOrEven(num){

    if(num %2 ===0){
        console.log("The number: "+num + " is even using named function")
    }
    else{
        console.log("The number: "+num + " is odd using named function")
    }
}
oddOrEven(2)
oddOrEven(3)

//2. using function expression

const oddOrEvenFunction = function(num){
    if(num %2 ===0){
        console.log("The number: "+num + " is even using function Expression")
    }
    else{
        console.log("The number: "+num + " is odd using function Expression")
    }
}
oddOrEvenFunction(2)
oddOrEvenFunction(3)

//3. using arrow function

    const oddOrEvenArrow = (num) =>{
        if(num %2 ===0){
        console.log("The number: "+num + " is even using arrow function")
    }
    else{
        console.log("The number: "+num + " is odd using arrow function")
    }
    }
    oddOrEvenArrow(2)
    oddOrEvenArrow(3)