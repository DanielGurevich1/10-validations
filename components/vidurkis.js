
import { numbersq } from "./numbersq.js";
import { sarasoSuma } from "./suma.js"

function vidurkis(numbers) {
    const suma = sarasoSuma(numbers);
    const q = numbersq(numbers);
    const avr = suma / q;
return avr;
}


export { vidurkis }