let strArray = ["apple","level","mom","monitor","laptop","lacical"]

function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    if(word == reversedWord){
        return true;
    }
    else{
        return false;
    }
}

//Anonymous function
let palindrome_AF = function(array){
    let arr = [];
    for(let word of array){
        if(isPalindrome(word)){
            arr.push(word);
        }
    }
    console.log(arr);
}

palindrome_AF(strArray);

//IIFE
let palindrome_IIFE = (
    (array) => {
        let arr = [];
        for(let word of array){
            if(isPalindrome(word)){
                arr.push(word);
            }
        }
        console.log(arr);
    }
)(strArray)