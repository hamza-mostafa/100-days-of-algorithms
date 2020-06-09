// first solution O(N^2)

function restOfArrayProduct(array: number[]): number[] {
    let resultArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(1);
        for (let j = 0; j < array.length; j++) {
            if(i !== j){
                resultArray[i] *= array[j];
                console.log(array[j]);
            }
        }
    }
    return resultArray;
}

console.log(restOfArrayProduct([3,2,1]));
