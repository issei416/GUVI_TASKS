let numArray = [1,2,3,4,5,6];

let sum = (array) => {
    let sum = 0;
    array.forEach(x => sum += x);
    console.log(sum);
}

sum(numArray)