// first solution O(N)

function almostIncreasingSequence(array: number[]): boolean {
    for (let i = 1; i+1 < array.length; i++) {
        if((array[i-1] >= array[i]) && (array[i] > array[i+1])){
            return false;
        }
    }
    return true;
}

console.log(almostIncreasingSequence([1,3,2,2,2,1]));
