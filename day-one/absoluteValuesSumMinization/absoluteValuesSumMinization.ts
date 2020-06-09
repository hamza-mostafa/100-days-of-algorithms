// solution 1 O(N^2)

function absoluteValuesSumMinization1(array: number[]): number{
    let winnerIndex: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        let totalSumsOfVariable: number = 0;
        for (let j: number = 0; j < array.length; j++) {
            totalSumsOfVariable += Math.abs(array[j] - array[i]);
            if(i === 0){
                winnerIndex[1] = totalSumsOfVariable;
                winnerIndex[0] = 0;
            }
        }
        if(totalSumsOfVariable < winnerIndex[1]){
            winnerIndex[1] = totalSumsOfVariable;
            winnerIndex[0] = i;
        }
        console.log(winnerIndex)
    }
    console.log(winnerIndex[1]);
    return array[winnerIndex[0]];
}

// solution 2 O(N)

function absoluteValuesSumMinization2(array: number[]): number{
    // sort array
    // middle number will always be the least
    array.sort((a,b) => a-b);
    console.log(Math.floor(array.length/2));
    return array.length %2 ? array[Math.floor(array.length/2)] : array[Math.floor(array.length/2)-1];
}

console.log(absoluteValuesSumMinization1( [2, 4, 7, 6, 6, 8]));
