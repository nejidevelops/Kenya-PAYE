let month = document.getElementById("month");
let year = document.getElementById("year");
let salary= document.getElementById("salanje");
let benefit = document.getElementById("benefinje");
let nhifY = document.getElementById("deductY");
let nhifN = document.getElementById("deductN");
let nssfY = document.getElementById("newRates");
let nssfN = document.getElementById("oldRates");
let calculate = document.getElementById("calculateTax");
let incP = document.getElementById("incB");
let dedP = document.getElementById("dedNS");
let incA = document.getElementById("incAD");
let benIK = document.getElementById("benK");
let taxIn = document.getElementById("taxI");
let taxT = document.getElementById("taxTI");
let perso = document.getElementById("persR");
let taxNT = document.getElementById("taxN");
let payE = document.getElementById("paye");
let chargie = document.getElementById("chargI");
let nhifCon = document.getElementById("nhifC");
let netPay = document.getElementById("netP")
let nhifValue = nhifY.value
let calculateTax;
let incomeTax;
let salari = salary.value

calculate.addEventListener('click',(e)=>{
    e.preventDefault();
})

 
function annualTax(){
    if (salari <= 147580){
        return( salari * 0.1)
    }
    else if (salari <= 286623){
        return (salari * 0.15)
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
        return (salari * 0.1)
    }
    else if (salari <= 286623){
        return (salari * 0.15)
    }
    else if (salari <= 425666){
        return (salari * 0.2)
    }
    else if (salari <= 564709){
        return( salari * 0.25)
    }
    else{
        return (salari * 0.3)
    }
}

function nhifCont(){
    if(salari <= 5999){
        return nhifValue = 150
    }
    else if(salari <= 7999){
        return nhifValue = 300
    }
    else if(salari <= 11999){
        return nhifValue = 400
    }
    else if(salari <= 14999){
        return nhifValue = 500
    }
    else if(salari <= 19999){
        return nhifValue = 600
    }
    else if(salari <= 24999){
        return nhifValue = 750
    }
    else if(salari <= 29999){
        return nhifValue = 850
    }
    else if(salari <= 34999){
        return nhifValue = 900
    }
    else if(salari <= 39999){
        return nhifValue = 950
    }
    else if(salari <= 44999){
        return nhifValue = 1000
    }
    else if(salari <= 49999){
        return nhifValue = 1100
    }
    else if(salari <= 59999){
        return nhifValue = 1200
    }
    else if(salari <= 69999){
        return nhifValue = 1300
    }
    else if(salari <= 79999){
        return nhifValue = 1400
    }
    else if(salari <= 89999){
        return nhifValue = 1500
    }
    else if(salari <= 99999){
        return nhifValue = 1600
    }
    else if(salari > 100000){
        return nhifValue = 1700
    }
    else{
        return nhifValue = 500
    }
}