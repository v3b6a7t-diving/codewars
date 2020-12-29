/*

The observed PIN (https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript)

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) numVariations.

* possible in sense of: the observed PIN itself and all numVariations considering the adjacent digits

Can you help us to find all those numVariations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all numVariations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the variations, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!

*/


/**
 * 
 * @param {*} observed: string;
 */

 function getPINs(observed) {

    var PINs = new Array();

    for(let i = 0; i < observed.length; i++) {
        
        PINs = nextVariations(
                    PINs, 
                    numVariations(
                        Number(observed[i])
                    )
                );      

    }

    return PINs;
}


/**
 * 
 * @param {*} num : number
 */

function numVariations(num) {
    
    let variations = new Array();

    const [
            p1, p3, 
            m1, m3, 
            row
        ] = [
            num+1, num+3, 
            num-1, num-3,
            Math.ceil(num / 3)
        ];

    if(num == 0) variations.push(8)
    else {
        if(m1 > 0 & (m1 > (row -1) * 3)) variations.push(String(m1))
        if(m3 > 0) variations.push(m3)
        if(p1 <= 9 & (p1 > (row - 1) * 3) & (p1 <= row * 3)) variations.push(p1)
        if(p3 <= 9 & (p3 > row * 3) & (p3 <= (row + 1) * 3)) variations.push(p3)
        if(num == 8) variations.push(0);
    }

    return [num, ...variations];

}


/**
 * 
 * @param {*} arr: Array 
 * @param {*} next: Array 
 */

function nextVariations(arr, next) {

    if(!Array.isArray(arr) || !arr.length) {

        return next.map(String);
    
    } else {

        const nextPINs = new Array();

        for(const N of next) {
            for(const A of arr) {
                nextPINs.push(String(A).concat(N));
            }
        }

        return nextPINs;
    }
}


// console.log(getPINs("0123456"));