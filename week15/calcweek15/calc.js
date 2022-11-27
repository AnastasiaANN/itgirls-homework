function plus(){
    let num1 , num2 , result ;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = +num1 + +num2 ;
    document.getElementById('result').value = result
}
function minus(){
    let num1 , num2 , result ;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1 - num2 ;
    document.getElementById('result').value = result
}
function multiplication(){
    let num1 , num2 , result ;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1 * num2 ;
    document.getElementById('result').value = result
}
function division(){
    let num1 , num2 , result ;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1 / num2 ;
    document.getElementById('result').value = result
    if(num1 / 0){
        alert('На ноль делить нельзя!');
    }
}