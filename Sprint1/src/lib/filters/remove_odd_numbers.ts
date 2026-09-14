function isEven(num: number): boolean {
    return num % 2 == 0 && num != 0;
}

export function odd_numbers(arr: number[]): number[] {
    return arr.filter(isEven);
}