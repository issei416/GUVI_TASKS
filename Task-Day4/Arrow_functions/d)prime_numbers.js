let numArray = [1,31,27,7,209,73,51,11];

let isPrime = (num) => {
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

let primeNumbers = (array) => {
    let arr = [];
    for(let num of array){
        if(isPrime(num)){
            //console.log(typeof(num));
            arr.push(Number(num));
        }
    }
    console.log(arr);
    //console.log(arr.sort((a,b) => a-b));
}

primeNumbers(numArray);

