alert("This is an application ddesigned for Kyra to maintain her behaviour points. This app will keep a track of how many points Kyra has and accordingly select a gift for her which her Mommy and/or Daddy (Neeru/Sachin Ahuja) will buy.")
var userChoice = prompt("How Many Points Do You Have?");
var computerChoice=Math.random();
if (computerChoice <0.34){
computerChoice = "10";
}else if(computerChoice <=0.67){
computerChoice = "paper";
}
else{
computerChoice = "scissors";
}
var compare = function(choice1,choice2){
if(choice1===choice2){
return "The result is a tie!";
}
if(choice1==="rock"){
if(choice2==="scissors"){
return "rock wins";
}
else{
return "paper wins";
}
}
if(choice1==="paper"){
if(choice2==="rock"){
return "paper wins";
}
else{
return "scissors wins";
}
}
if(choice1==="scissors"){
if(choice2==="rock"){
return "rock wins";
}
else{
return "scissors wins";
}
}
};
compare(userChoice,computerChoice);