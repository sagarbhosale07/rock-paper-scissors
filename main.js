let options = ["Rock","Paper","Scissors"];

function playGame(userChoice) {
   

   let randomIndex = Math.floor(Math.random()*3);

   const computerChoice = options[randomIndex];

   console.log("user choice is", userChoice);
   console.log("computer choice is", computerChoice);

   //who's wining when
   if(userChoice =="Rock" && computerChoice =="Scissors" || userChoice == "Paper" && computerChoice == "Rock"|| userChoice == "Scissors" && computerChoice == "Paper"){
     alert("You won👍");
   }
   else if(computerChoice == "Rock" && userChoice == "Scissors" || computerChoice == "Paper" && userChoice == "Rock" ||computerChoice == "Scissors" && userChoice == "Paper" ){
      alert("Computer won 👎");
   }
   else{
    alert("Draw");
   }

}