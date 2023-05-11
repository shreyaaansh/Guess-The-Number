const words = ["snake", "water", "gun"];

function RanWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const random = RanWord();
let choice;
Computer_Point=0;
My_Point=0
chance=0;

//console.log(randomWord); // Output: A random word out of ["Spectrum", "Blissful", "Whirlwind"]
do {
 choice=prompt("Took one: Snake or Water or Gun");
  if(choice==random){
    alert("Match is draw know");
    chance++
  }
  else if(choice=="snake" && random=="water"){
    alert("Oh! You WIN..");
  My_Point++
  chance++
    
  }
    else if(choice=="water" && random=="gun"){
      alert("Oh! You WIN..");
     My_Point++
    chance++
    
    }
     else if(choice=="gun" && random=="snake"){
      alert("Oh! You WIN..");
    My_Point++
    chance++
    
    }
    else{
      alert("Sorry! its machine's time");
      Computer_Point++
      chance++
    }
}
while (chance<=5);
alert(`My score is =${My_Point}`);
alert(`Machine score is =${Computer_Point}`);
if(My_Point>Computer_Point){
  alert("Congrats!You win this game.");
  }
else if(My_Point<Computer_Point){
  alert("Sorry!Good luck next time");
}
else{
  alert("Game is darw now.");
}
