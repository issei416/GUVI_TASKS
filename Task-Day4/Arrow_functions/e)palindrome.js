let strArray = ["apple","level","mom","monitor","laptop","lacical"]

let isPalindrome = (word) => {
    let reversedWord = word.split("").reverse().join("");
    if(word == reversedWord){
        return true;
    }
    else{
        return false;
    }
}

let palindrome = (array) => {
    let arr = [];
    for(let word of array){
        if(isPalindrome(word)){
            arr.push(word);
        }
    }
    console.log(arr);
}

palindrome(strArray)