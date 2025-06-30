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

 console.log(url.replace("login", "main"))

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