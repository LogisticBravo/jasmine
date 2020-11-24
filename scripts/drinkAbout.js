function whatCanIDrink(age){
    if(typeof(age) != 'number'){alert("Error - NaN");}
    else if(age <=0){return "Sorry, I can’t tell what drink because that age is incorrect!";}
    else if((age >0) && (age <= 14)){return "Drink Toddy";}
    else if(age>=15 && age<=18){return "Drink Coke";}
    else if(age>=19 && age <=21){return "Drink Beer";}
    else if(age>=22 && age <=130){return "Drink Whisky"}
    else{return "Sorry, I can’t tell what drink because that age is incorrect!"}}