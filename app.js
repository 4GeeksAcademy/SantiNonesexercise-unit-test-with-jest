const sum = (a,b) => {
    return a + b
}

console.log(sum(45,55))



// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / 1.07
    let valueInYen = valueInEuro * 156.5
    // return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87; 
    // return the dollar value
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }; 