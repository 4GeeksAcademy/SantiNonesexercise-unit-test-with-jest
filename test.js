const { sum } = require('./app.js'); 

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23); 
}); 

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBeCloseTo()(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("3 dollars should be converted to yen correctly", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    
    // If 1 dollar is converted to yen, you need the conversion rate
    const expected = 3 * (156.5 / 1.07); // Calculate the expected value
    
    // This is the comparison for the unit test
    expect(fromDollarToYen(3)).toBeCloseTo(expected, 2); // Use toBeCloseTo for floating point comparison
});

test("3 Yens should be converted to pound correctly", function() {

    const { fromYenToPound } = require('./app.js');

    const expected = 3 * ((1/156.5) * 0.87); 

    expect(fromYenToPound(3)).toBeCloseTo(expected, 2);


});