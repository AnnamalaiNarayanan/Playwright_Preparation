function intersection(array1, array2){
    
const noDuplicates = []
    // console.log("The array 1 values are : ", array1);
    // console.log(
    //  array1.length, array2.length)

    for(let i=0; i<array1.length;i++){
            if(!noDuplicates.includes(array1[i])){
               noDuplicates.push(array1[i])
            }
        }
    for(let j=0; j<array2.length; j++){
         if(!noDuplicates.includes(array2[j])){
               noDuplicates.push(array2[j])
            }
    }
        return noDuplicates
}
console.log(intersection([23,45,67,89,34,23,45,67], [23,45,67,89,34,23,45,67]))
console.log(intersection([23,45,67,89,34,23,45,67], [1,2,3,4,5,6]))
console.log(intersection([10,11,12,14], [1,2,3,4,5,6]))