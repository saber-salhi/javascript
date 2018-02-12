var generateRandom = Math.floor(Math.random() * 101);
for (i = 0; i < 3; i++){
    var enternumber = Number(prompt("enter a number between 0 and 100"));
    while(i = 3){
           console.log("Desole tu a passe les chances de essayer le resultat : " + generateRandom);
        break;
          }
    if (generateRandom < enternumber){
        console.log(enternumber + " trop grand");
    }else if(generateRandom > enternumber){
        console.log(enternumber + " trop petit");
    }else{
        console.log("you win ! the result is " + generateRandom +" your enter is "+ enternumber);
        break;
    }
}