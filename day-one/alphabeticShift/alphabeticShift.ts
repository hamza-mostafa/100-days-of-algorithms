// first solution O(N), but with javascript split and join,
// so the total will be O(N)

function alphabeticShift(word: string, shiftBy: number): string {
    let wordCharArray: string[] = word.split('');
    for (let i = 0; i < wordCharArray.length; i++) {
        wordCharArray[i] =  String.fromCharCode(word.charCodeAt(i)+shiftBy);
    }
    return wordCharArray.join('');
}

console.log(alphabeticShift('cba', 4));

// second solution without split and join, and saving the 2 steps

function alphabeticShift2(word: string, shiftBy: number): string {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        newWord += String.fromCharCode(word.charCodeAt(i)+shiftBy);
    }
    return newWord;
}

console.log(alphabeticShift2('cba', 4));
