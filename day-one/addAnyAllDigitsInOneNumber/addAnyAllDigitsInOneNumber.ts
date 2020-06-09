// first solution N(O)

function addAnyAllDigitsInOneNumber(target: number): number {
    let figure: string = target.toString();
    let counter: number = figure.length;
    let total: number = 0;
    for (let i: number = 0; i < counter; i++) {
        total += parseInt(figure[i]);
    }
    return total;
}

console.log(addAnyAllDigitsInOneNumber(1234567));

// second solution one line using map and reducer but N(O^2) because type casting.
function addAnyAllDigitsInOneNumberReducer(target: number): number {
    return target.toString().split('').map(x => +x).reduce((accumulator, currentValue): number => {
        return accumulator + currentValue
    });
}

console.log(addAnyAllDigitsInOneNumberReducer(123456));
