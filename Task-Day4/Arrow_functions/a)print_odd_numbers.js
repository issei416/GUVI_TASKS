let numArray = [1,2,3,4,5,6,7,8,9,10];

//arrow function
let odduNumbers = (array) => {
    console.log(array.filter(x => x%2!==0));
}
odduNumbers(numArray);