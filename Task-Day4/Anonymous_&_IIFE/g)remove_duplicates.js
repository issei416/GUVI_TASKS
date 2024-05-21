let array_AF = [1,2,2,3,4,5,5,3,2,6,7,5];

//Anonymous function
let removeDuplicate_AF = function(arr) {
    let uniqueArr = [];
    for(let index in arr){
        if(!uniqueArr.includes(arr[index])){
            uniqueArr.push(arr[index]);
        }
        else{
            arr.splice(index,1);
        }
    }
    console.log(arr);
}

removeDuplicate_AF(array_AF);

//IIFE
let array_IIFE = [1,2,2,3,4,5,5,3,2,6,7,5];

let remove_duplicate_IIFE = ( (arr) => {
    let uniqueArr = [];
    for(let index in arr){
        if(!uniqueArr.includes(arr[index])){
            uniqueArr.push(arr[index]);
        }
        else{
            arr.splice(index,1);
        }
    }
    console.log(arr);
} )(array_IIFE);
