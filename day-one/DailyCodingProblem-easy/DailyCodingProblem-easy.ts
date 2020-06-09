// first solution O(N^2) .. collecting ALL the pairs that adds to K
// Brute force way would involve a nested iteration to check for every pair of numbers:

function twoNumbersSumEqualResult(array: number[], result: number): number[][]{
    let resultArray: number[][] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i !== j){
                if(array[i]+array[j] == result)
                {
                    resultArray.push([array[i],array[j]]);
                }
            }
        }
    }
    return resultArray;
}

// second solution O(N)
// using the Set

function twoNumbersSumEqualResult2(array: number[], result: number): number[]{
    // @ts-ignore
    let newArray: any = new Set(array);
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] = 1;
        if(newArray.has(result - array[i])){
            return [result - array[i], array[i]];
        }
    }
    return JSON.parse(JSON.stringify(newArray));
}

console.log(twoNumbersSumEqualResult([1,2,3,4,5,6,7,8,9,10,11,12,8,19], 20));
console.log(twoNumbersSumEqualResult2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20));
