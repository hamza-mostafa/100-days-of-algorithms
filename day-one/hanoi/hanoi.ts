function hanoi(height:number, left: string = 'left', middle: string = 'middle', right: string = 'right'): void | boolean {
    while(height > 0){
        hanoi(height-1,right, left, middle);
        console.log(`${left} => ${right}`)
        hanoi(height-1,middle, right, left);
    }
    return false;
}

console.log(hanoi(3));
