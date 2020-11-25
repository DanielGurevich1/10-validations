function numbersq(numbers) {
    let q = 0;
    for (i = 0; i <= numbers.length; i++) {
        const num = numbers[i];
        q++;
        return q;
    }
}

export { numbersq }