function fizzBuzz(numOne){
    if((numOne%3==0)&&(numOne%5==0)){return "FizzBuzz";}
    else if((numOne%3==0)){return "Fizz";}
    else if((numOne%5==0)){return "Buzz";}
    else if((numOne%3>=0)||(numOne%5>=0)){return "No FizzBuzz";}
    else {alert("Error - NaN");}};