export function convert2Fahrenheit(celcius: number): number {
    return Math.floor((celcius * 9) / 5 + 32);
}

export function convert2Celcius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}
