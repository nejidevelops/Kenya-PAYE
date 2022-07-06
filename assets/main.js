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
let calculateTax;
let incomeTax;
let salari = salary.value

calculate.addEventListener('click',)

 
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
    if(salary <= 5999){
        return nhifY.value = 150
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 11999){
        return nhifY.value = 400
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
    else if(salary <= 7999){
        return nhifY.value = 300
    }
}