// first solution O(N)
// signed array of number
// for unsigned array of numbers add Math.abs

function adjacentElementsProduct(array: number[]){
    let largestProduct: number[] = [0,0];
    for (let i = 0; i+1 < array.length; i++) {
        if(largestProduct[0] < (array[i]*array[i+1])){
            largestProduct = [array[i]*array[i+1], i];
            console.log(largestProduct);
        }
    }
    return [array[largestProduct[1]], array[largestProduct[1]+1]];
}

console.log(adjacentElementsProduct([1,2,4,6,7,1,5,8,6,10]));
