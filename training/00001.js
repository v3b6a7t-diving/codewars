/*
Move the first letter of each word to the end of it, then add "ay"
to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

/**
 * 
 * @param {*} str: string
 * 
 */
function pigIt(str) {
    const pattern = /(^|\s)(\w)(\w+)?/ig;
    return str.replace(pattern, '$1$3$2ay');
}

console.log(pigIt('Ołoł! Co? No, chyba nie?')); 