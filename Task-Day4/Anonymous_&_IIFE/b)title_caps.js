let strArray = ["guvi","mukesh","pugazharasan","fsd60T","title-caps"];

//Anonymous function
let titleCaps_AF = function(array) {
    for(let index in array){
        let ch = array[index][0].toUpperCase();
        array[index] = ch + array[index].slice(1);
    }
    console.log(array)
}

titleCaps_AF(strArray);

//IIFE
let titleCaps_IIFE = ( function(array) {
    for(let index in array){
        let ch = array[index][0].toUpperCase();
        array[index] = ch + array[index].slice(1);
    }
    console.log(array)
} )(strArray);
