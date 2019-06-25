var randonNumber1=Math.random()*6+1;
randonNumber1=Math.floor(randonNumber1);
console.log(randonNumber1);
document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+randonNumber1+".png");
var randonNumber2=Math.random()*6+1;
randonNumber2=Math.floor(randonNumber2);
console.log(randonNumber2);
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+randonNumber2+".png");
if(randonNumber1>randonNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player1 won";
}
else if(randonNumber1<randonNumber2){
document.getElementsByTagName("h1")[0].innerHTML="Player2 won";
}
else{
 document.getElementsByTagName("h1")[0].innerHTML="draw";
}
