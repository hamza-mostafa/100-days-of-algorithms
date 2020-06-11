type pairer= (a: number, b: number) => number[];

function pairer(a:number,b:number): any {
    return [a,b];
}

function car (pair: pairer): number {
    return pair[0];
}

function cdr(pair: pairer): number {
    return pair[1];
}

console.log(pairer(3,4));
console.log(car(pairer(3,4)));
console.log(cdr(pairer(3,4)));
