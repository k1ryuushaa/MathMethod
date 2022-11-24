function sum(){
    var a = document.getElementById('chislo1').value;
    var b = document.getElementById('chislo2').value;
    var result = Number(a) + Number(b);
    document.getElementById('otvet1').innerHTML = "Ответ: " + String(result);
};