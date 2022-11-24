function stepen(){
    var ch1 =document.getElementById('chislo').value;
    var ch2 =document.getElementById('step').value;
    var res = Math.pow(Number(ch1),Number(ch2));
    document.getElementById('otvet').innerHTML="Ответ: "+String(res);
};