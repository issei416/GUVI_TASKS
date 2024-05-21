# TASK-DAY 4

Today's task revolves around functions and it's types.  
Generally in Js thare are four different types of functions:  
* Named functions
* Anonymous functions
* Arrow functions
* IIFE - Immediately Invoked Function Expression

## Question 1

Question 1 requires solving the given problem two ways
<ol>
<li>Anonymous function</li>
<li>IIFE</li>
</ol>

### syntax for Anonymous function:
```js
let result = function(params) {
    //statements
    return value;
};

console.log(result(arguments))
```

### syntax for IIFE:
```js
let result = (function(params){
    //statements
    return value;
})(arguments);

console.log(result)
```
_note: the function inside the IIFE can be of any type that doesn't change the fact that it's a IIF expression_

The difference between above two is that IIFE can be run only once and cannot be reused as a function block    
where as, anonymous function can be used again and again but can be acces through the variable and not a function name

## Question 2:

Question 2 requires to solve the problem such that functions are Arrow functions. 

### syntax for Arrow functions
```js
let result = (params) => {
    //statements
    return value;
}
``` 