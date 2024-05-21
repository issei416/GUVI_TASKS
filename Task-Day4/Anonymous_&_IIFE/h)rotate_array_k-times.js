let array1 = [1,2,3,4,5,6,7,8];
let k = 3;
let len = array1.length;
let times = k%len;

//Ananymous function
let rotate_AF = function(array,t){
    console.log(array.concat(array.splice(0,t)));
}
rotate_AF(array1,times);

//IIFE
let array2 = [1,2,3,4,5,6,7,8];
let rotate_IIFE = ( (array,t) => {
    console.log(array.concat(array.splice(0,t)));
})(array2,times);

