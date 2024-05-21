let array1= [1,2,3,7,10,11];
let array2 = [4,5,6,8,9,12];

let merge = function(arr1,arr2){
let i=0,j=0;
let merged = [];
while(i<arr1.length || j<arr2.length){
    if(arr1[i]<arr2[j]){
        merged.push(arr1[i]);
        i++;
    }
    else{
        merged.push(arr2[j]);
        j++;
    }
}
console.log(merged.join(" "));
return merged
}

//Anonymous function
let findMedian_AF = function(arr1,arr2){
let array1 = arr1,array2 = arr2;
let mergedArray = merge(array1,array2);
let len = mergedArray.length;
let median = 0;
let mid = Math.floor(len/2);
if(len%2==0){
    median = (mergedArray[mid-1] + mergedArray[mid]) / 2;
}
else{
    median = mergedArray[mid];
}
console.log(median);
}

findMedian_AF(array1,array2);

//IIFE
let findMedian_IIFE = ((arr1,arr2) => {
    let array1 = arr1,array2 = arr2;
    let mergedArray = merge(array1,array2);
    let len = mergedArray.length;
    let median = 0;
    let mid = Math.floor(len/2);
    if(len%2==0){
        median = (mergedArray[mid-1] + mergedArray[mid]) / 2;
    }
    else{
        median = mergedArray[mid];
    }
    console.log(median);
    })(array1,array2);


