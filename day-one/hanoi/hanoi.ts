function hanoi(height:number, left: string = 'left', middle: string = 'middle', right: string = 'right'): string {
    if(height > 0){
        hanoi(height-1,left, right, middle);
        console.log(`${left} => ${right}`);
        hanoi(height-1,middle, left, right);
    }
    return 'solved';
}

console.log(hanoi(3));
