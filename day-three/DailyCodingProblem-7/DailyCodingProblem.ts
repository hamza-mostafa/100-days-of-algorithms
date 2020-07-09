function alphabeticDecoder(message: number): number[] {
    let index: string[] = [
        'a','b','c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z',
    ];
    let result: number[] = [0];

    // count the numbers of letters
    // for each 2 generate a number
    // for each 1 generate a number
    // get total combinations

    // check if the number is includes 0

    if(message.toString().split('').indexOf('0') === -1){
        return [0];
    }
    for (let i = 0; i < message.toString().length; i++) {
        // add combinations
    }

    return result;
}


// get all possible combinations
function combination(arr: number[]) {

}
