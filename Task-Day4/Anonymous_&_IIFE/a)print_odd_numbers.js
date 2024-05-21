let numArray = [1,2,3,4,5,6,7,8,9,10];

// Anonymous function
let oddNumbers_AF = function(array) {
    let oddArray = [];
    for(let num of array){
        if(num %2 !==0){
            oddArray.push(num);
        }
    }
    console.log(oddArray);
}
oddNumbers_AF(numArray);

//IIFE
let oddNumbers_IIFE = ( function(array) {
    let oddArray = [];
    for(let num of array){
        if(num %2 !==0){
            oddArray.push(num);
        }
    }
    console.log(oddArray);
} )(numArray);

