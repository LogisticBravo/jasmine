/*Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
};
*/

/*Drink About Function
function whatCanIDrink(age){
    if(typeof(age) != 'number'){alert("Error - NaN");}
    else if(age <=0){return "Sorry, I can’t tell what drink because that age is incorrect!";}
    else if((age >0) && (age <= 14)){return "Drink Toddy";}
    else if(age>=15 && age<=18){return "Drink Coke";}
    else if(age>=19 && age <=21){return "Drink Beer";}
    else if(age>=22 && age <=130){return "Drink Whisky"}
    else{return "Sorry, I can’t tell what drink because that age is incorrect!"}}
*/

function fizzBuzz(numOne){
    if((numOne%3==0)&&(numOne%5==0)){return "FizzBuzz";}
    else if((numOne%3==0)){return "Fizz";}
    else if((numOne%5==0)){return "Buzz";}
    else if((numOne%3>=0)||(numOne%5>=0)){return "No FizzBuzz";}
    else {alert("Error - NaN");}};

