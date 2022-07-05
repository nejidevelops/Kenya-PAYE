let month = document.getElementById("month");
let year = document.getElementById("year");
let salary= document.getElementById("salanje");
let benefit = document.getElementById("benefinje");
let nhifY = document.getElementById("deductY");
let nhifN = document.getElementById("deductN");
let nssfY = document.getElementById("newRates");
let nssfN = document.getElementById("oldRates");
let calculate = document.getElementById("calculateTax");
let calculateTax;
let incomeTax;
let salari = salary.value

calculate.addEventListener('click',)

function isYorM(){

}
 
function annualTax(){
    if (salari <= 147580){
        return salari * 0.1
    }
    else if (salari <= 286623){
        return salari * 0.15
    }
    else if (salari <= 425666){
        return salari * 0.2
    }
    else if (salari <= 564709){
        return salari * 0.25
    }
    else{
        return salari * 0.3
    }
}

function monthTax(){
    if (salari <= 147580){
        return (salari * 0.1)/12
    }
    else if (salari <= 286623){
        return (salari * 0.15) /12
    }
    else if (salari <= 425666){
        return (salari * 0.2) /12
    }
    else if (salari <= 564709){
        return( salari * 0.25) / 12
    }
    else{
        return (salari * 0.3) / 12
    }
}