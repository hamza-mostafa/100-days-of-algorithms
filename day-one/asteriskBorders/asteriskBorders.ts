// solution O(N)

function asteriskBorders(array: string[]): string[]{
    let largestString: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        array[i] = `*${array[i]}*`;
        largestString = largestString > array[i].length ? largestString : array[i].length;
    }
    // @ts-ignore
    let border: string = '*'.repeat(largestString);
    array.unshift(border);
    array[array.length] = border;
    return array;
}

// assuming that there is very small words and big words, add spaces so it can be exact square!
// solution O(N)

function asteriskBordersSquare(array: string[]): string[]{
    let largestString: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        largestString = largestString > array[i].length ? largestString : array[i].length;
        // largestString = largestString % 2 ? largestString+2 : largestString+;
    }
    console.log(largestString);
    for (let i: number = 0; i < array.length; i++) {
        if(largestString > array[i].length){
            let addition : number = Math.floor(largestString - array.length/2);

            // fixing even number issue in dividing the white spaces
            // the first condition to make sure that if there is only string of 2 char
            if(addition-1 > 0){
                // if it is even number, it needs to be fixed as the border should be lesser than the largestString
                if(addition % 2 === 0){
                    addition -= 1
                }
            }
            console.log(addition);
            // @ts-ignore
            array[i] = `*${' '.repeat(addition)+array[i]+' '.repeat(addition)}*`;
        }else{
            array[i] = `*${array[i]}*`;
        }
    }
    // @ts-ignore
    let border: string = '*'.repeat(largestString+2);
    array.unshift(border);
    array[array.length] = border;
    return array;
}

console.log(asteriskBordersSquare(['1', '1111111', '1']))
