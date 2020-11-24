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
    it("should return 28 - No FizzBuzz if the number is not divisible by 3 or 5 when called with fizzBuzz(28)",function(){
        var result = fizzBuzz(28)
        expect(result).toBe(result);
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