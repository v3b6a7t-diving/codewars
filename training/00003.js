/**
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
 * that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, 
 * that the elements in b are the elements in a squared, regardless of the order.
 * 
 * Examples
 * Valid arrays
 * a = [121, 144, 19, 161, 19, 144, 19, 11]  
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns true because in b 121 is the square of 11, 
 * 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 
 * 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
 * 
 * a = [121, 144, 19, 161, 19, 144, 19, 11] 
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 * 
 * Invalid arrays
 * If we change the first number to something else, comp may not return true anymore:
 */

// function comp(array1, array2){
//     // Kontola parametrów
//     if(array1.length !== array2.length) return false;

//     for(let i = 0; i < array1.length; i++) {
//         if(array2[i] % array1[i] > 0) return false;
//     }

//     return true;
// }

function comp(array1, array2){
    // Kontola parametrów
    if(!Array.isArray(array1) || !Array.isArray(array2)) return false;
    if(array1.length !== array2.length) return false;

    for(let i = 0; i < array1.length; i++) {
        let power = Math.pow(array1[i],2);
        let index = array2.indexOf(power);
        if(index < 0) return false;
        else delete array2[index];
    }

    return true;
}

/**
 * Testing for [99, 27, 27, 72] and [9801, 730, 729, 5184]
 * It should work with random inputs too - Expected: false, instead got: true
 */
console.log(comp([99, 27, 27, 72], [9801, 730, 729, 5184]))