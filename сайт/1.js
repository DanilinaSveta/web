let Color='';
window.oninput = function oninputColor() {
    var idColor = document.getElementById('idColor').value;
    document.getElementById('rezultatColor').innerHTML = idColor;
    if (idColor == '#ff0000') {
        Color = ' Красный';
    }
    else if (idColor == '#008000') {
        Color = "Зеленый";
    }
    else if (idColor == '#0000ff') {
        Color = "Синий";
    }
    else if (idColor == '#ffffff') {
        Color = "Белый";
    }
    else if (idColor == '#cccccc') {
        Color = "Серый";
    }
}

let output = ' ';
    
let button1 = document.querySelector('.button1');
let button1_2 = document.querySelector('.button1_2');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');

button1.onclick = function (){
    document.getElementById('table2').style.display = 'block';
    document.getElementById('table1').style.display = "none";
    output = "img 1_1"
}
button1_2.onclick = function (){
    document.getElementById('table2').style.display = 'block';
    document.getElementById('table1').style.display = "none";
    output = "img 1_2"
}
button2.onclick = function (){
    document.getElementById('table2').style.display = "none";
    document.getElementById('table1').style.display = 'block';
}
button3.onclick = function (){
    document.getElementById('table2').style.display = 'none';
    document.getElementById('table3').style.display = 'block';
    output += " img 2"
}
button4.onclick = function (){
    document.getElementById('table3').style.display = "none";
    document.getElementById('table2').style.display = 'block';
}
button5.onclick = function(){
    document.querySelector(".out").innerHTML = output;
    document.querySelector(".col").innerHTML = Color;
    document.getElementById('table3').style.display = "none";
    document.getElementById('table4').style.display = 'block';  
}