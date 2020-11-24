/*describe("Calculator", function(){

    beforeEach(function(){
        calc = new Calculator;
    });
    var calc = new Calculator;

    describe("Addition tests", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith
            ("Error!");
            
        });
    });
}); 
*/
/*Drink About Test
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
*/
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

describe('FizzBuzz Function',function(){
    beforeEach(function(){
        fizzBuzz = new fizzBuzz();
    });
    });
    describe("checks number",function(){
    it('should return FizzBuzz if the number is divisible by 3 and 5',function(){
        var result = fizzBuzz(30)
        expect(result).toBe("FizzBuzz");
    });
    it("should return Fizz if the number is divisible by 3",function(){
        var result = fizzBuzz(18)
        expect(result).toBe('Fizz');
    });
    it("should return Buzz if the number is divisible by 5",function(){
        var result = fizzBuzz(20)
        expect(result).toBe('Buzz');
    });
    it("should return No FizzBuzz if the number is not divisible by 3 or 5",function(){
        var result = fizzBuzz(28)
        expect(result).toBe('No FizzBuzz');
    });
    it("should return FizzBuzz if the number is in a string when called with fizzBuzz('15')",function(){
        var result = fizzBuzz('15')
        expect(result).toBe('FizzBuzz');
    });
    it("should return Fizz if the number is in a string when called with fizzBuzz('3')",function(){
        var result = fizzBuzz('3')
        expect(result).toBe('Fizz');
    });
    it("should return Buzz if the number is in a string when called with fizzBuzz('50')",function(){
        var result = fizzBuzz('50')
        expect(result).toBe('Buzz');
    });
    describe("Error Alert if not a number", function(){
        it("should return Error - NaN",function(){
            spyOn(window, "alert");
            fizzBuzz('anything but a number');
            expect(window.alert).toHaveBeenCalledWith('Error - NaN');
        });
    });
});
