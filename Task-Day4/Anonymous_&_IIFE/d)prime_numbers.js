let numArray = [1,4,25,7,37,0,103];

function isPrime(num){
    if(num === 0 || num === 1){
        return false;
    }
    else{
        if(num === 2){
            return true;
        }
        else{
            for(let i=2;i<num;i++){
                if(num%i === 0){
                    return false;
                }
            }
            return true;
        }
    }
}

//Anonymous function
let primeNumbers_AF = function(array){
    let arr = [];
   for(let num of array){
    if(isPrime(num)){
        arr.push(num);
    }
   }
   console.log(arr);
}
primeNumbers_AF(numArray)

//IIFE
let primeNumbers_IIFE = (function(array){
    let arr = [];
   for(let num of array){
    if(isPrime(num)){
        arr.push(num);
    }
   }
   console.log(arr);
})(numArray)

