/**
 * Write a function that takes a string of braces, 
 * and determines if the order of the braces is valid. It should return true if the string is valid, 
 * and false if it's invalid.
 * This Kata is similar to the Valid Parentheses Kata, but introduces new characters: 
 * brackets [], and curly braces {}. Thanks to @arnedag for the idea!
 * All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
 * What is considered Valid?
 * A string of braces is considered valid if all braces are matched with the correct brace.
 * 
 * Exemples:
 * "(){}[]"   =>  True
 * "([{}])"   =>  True
 * "(}"       =>  False
 * "[(])"     =>  False
 * "[({})](]" =>  False
 */

function validBraces(braces){
    // Gdy jest niepażysta ilość nawiasów
    if(braces.length % 2 > 0) return false;

    let clearBraces = braces.slice(); // copy immutable
    let quantity = braces.length / 2;

    for(let i=0; i < quantity; i++) {
        clearBraces = clearBraces.replace(/\{\}|\[\]|\(\)/g, '');
        if(clearBraces.length ===0) break;
    }
    return clearBraces.length === 0;
  }

  console.log(validBraces('[[][({()()}())[]]]'));