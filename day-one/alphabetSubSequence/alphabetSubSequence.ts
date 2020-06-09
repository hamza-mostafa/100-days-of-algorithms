// solution O(N)

function alphabetSubSequence(word: string) {
// convert to small case
    let status: number[] = [0];
    word = word.toLowerCase();
    for (let i = 0; i+1 < word.length; i++) {
        word.charCodeAt(i) > word.charCodeAt(i+1) ? status.push(1): status.push(0);
    }
    return !status.reduce((a,b) => a+b);
}

console.log(alphabetSubSequence(' abcdefghijklmnopqrstuwxyz'));
