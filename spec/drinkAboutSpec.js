//Drink About Test
describe ("whatCanIDrink",function(){
    describe ("Age Checks",function(){
        it("should return Sorry, I can’t tell what drink because that age is incorrect!",function(){
            expect(whatCanIDrink(0)).toBe("Sorry, I can’t tell what drink because that age is incorrect!");
    });
    it("should return Sorry, I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(140)",function(){
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry, I can’t tell what drink because that age is incorrect!")
        });
});
    describe ("less than 14",function(){
        it("should return Drink Toddy",function(){
            expect(whatCanIDrink(1)).toBe('Drink Toddy');
        });
    });
    describe("less than 18", function(){
        it("should return Drink Coke",function(){
            expect(whatCanIDrink(15)).toBe('Drink Coke');
        });
    });
    describe("less than 21", function(){
        it("should return Drink Beer",function(){
            expect(whatCanIDrink(20)).toBe('Drink Beer');
        });
    });
    describe("less than 130", function(){
        it("should return Drink Whisky",function(){
            expect(whatCanIDrink(129)).toBe('Drink Whisky');
        });
    });
    describe("Error Alert if not a number", function(){
        it("should return Error - NaN",function(){
            spyOn(window, "alert");
            whatCanIDrink('anything but a number');
            expect(window.alert).toHaveBeenCalledWith('Error - NaN');
        });
    });
});

/*SNIPPET FROM SOURCE CODE ANSWERS
----------------------------------------------------------------
describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
-----------------------------------------------------------------
*/