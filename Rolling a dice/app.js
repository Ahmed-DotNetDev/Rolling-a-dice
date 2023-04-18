let x;
let y;
let z;

document.getElementById("btnroll").onclick = function () {
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    z = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice1").innerHTML = x;
    document.getElementById("dice2").innerHTML = y;
    document.getElementById("dice3").innerHTML = z;
}

document.getElementById("btnroll").style.width = '123px';
document.getElementById("btnroll").style.height = '35px';
document.getElementById("btnroll").style.background = 'black';
document.getElementById("btnroll").style.color = 'white';
document.getElementById("btnroll").style.borderRadius = '444px';
document.getElementById("btnroll").style.fontSize = '20px';