var a =0
var hellobutton1=document.getElementById('liked');
hellobutton1.addEventListener('click',sayhello1);

function sayhello1(){
    a=a+1;
    document.getElementById('likes').innerHTML=a;
}


var b =0
var hellobutton2=document.getElementById('likedr');
hellobutton2.addEventListener('click',sayhello2);

function sayhello2(){
    b=b+1;
    document.getElementById('like').innerHTML=b;
}