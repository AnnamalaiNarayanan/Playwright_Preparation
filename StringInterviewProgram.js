// program 1 print login and opentaps
const url = "http://leaftaps.com/opentaps/control/login"
const split = url.split("/")
console.log(split)
console.log(split.length)
 for(let i= 0; i<split.length; i++){
    if(split[i] === "opentaps" || split[i] === 'login'){
            console.log("The string is: "+ split[i])
    }
    else{
        console.log("The string is not matching")
    }
 }

//program 2 replace login with main
 console.log(url.replace("login", "main"))


//program 3 check palindrome or not
 function palindrome(value){
    let reverse ="";
    for(let i=value.length-1; i>=0; i--){
        reverse = reverse+ value[i]
    }
    if(reverse === value)
    console.log("The given value is palindrome: " +reverse)
    else
    console.log("The given value is not palindrome: " +reverse)
 }
 palindrome("madam")
 palindrome("palindrome")


// program 4 most frequent characters in the string
 function sequenceCharacter(value){
    let maxCount =0
     let maxChar = ''
    for(let i=0; i<value.length; i++){
        currentChar = value[i]
        let count =1
        for(j=i+1; j<value.length; j++){
            if(value[j] === value[i]){
                count =count+1
            }
        }
         if (count > maxCount) {
      maxCount = count;
      maxChar = currentChar;
    }
    }
    console.log(`Most frequent character is '${maxChar}' (${maxCount} times)`)
 }
 sequenceCharacter(`javascript`)


//program 5 find the count of vowels in the string
 function vowelsFind(character){

    let charVowels = 'aeiouAEIOU'
    let count =0
    for(let i=0; i<character.length;i++){
        if(charVowels.includes(character[i])){
            count++
        }
    }

    return count
 }
 const char = "function"
 console.log(`The vowels in the character: ${char} is `+ vowelsFind(char))
