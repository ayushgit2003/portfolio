setInterval(myTimer, 500);

var list = ['pink','#64ef62','red','blue','yellow','orange','purple','teal','biege','grey'];

function myTimer() {
var num = Math.floor(Math.random() *10);
document.getElementById("html-id").style.color = list[num];
document.getElementById("htmlbar-id").style.backgroundColor = list[num++];
checkIndex(num);
document.getElementById("css-id").style.color = list[num];
document.getElementById("cssbar-id").style.backgroundColor = list[num++];
checkIndex(num);
document.getElementById("c-id").style.color = list[num];
document.getElementById("cbar-id").style.backgroundColor = list[num++];
checkIndex(num);
document.getElementById("javascript-id").style.color = list[num];
document.getElementById("javascriptbar-id").style.backgroundColor = list[num++];
checkIndex(num);
document.getElementById("python-id").style.color = list[num];
document.getElementById("pythonbar-id").style.backgroundColor = list[num++];
checkIndex(num);
document.getElementById("java-id").style.color = list[num];
document.getElementById("javabar-id").style.backgroundColor = list[num++];
checkIndex(num);
}

function checkIndex(num) {
    if(num==10){
        num=0;
    }
}