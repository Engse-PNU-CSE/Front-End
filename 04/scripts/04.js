let score=0, score1=0;
addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#throw");
    //button event check
    bt1.addEventListener("click", () => {
        const check = handleClick1();
        if(check==0) score+=1;
        else if(check==1) score1+=1;
        document.querySelector("#computerScore").innerHTML = `<h2>score : ${score}</h2>`;
        document.querySelector("#userScore").innerHTML = `<h2>scroe : ${score1}</h2>`;
    });
});
const handleClick1 = () => {
    const diceNumber = Math.floor(Math.random()*6+1);

    dice = `./images/${diceNumber}.png`;
    document.querySelector("#imgUser").setAttribute("src", dice);

    const diceNumber2 = Math.floor(Math.random()*6+1);
    dice = `./images/${diceNumber2}.png`;
    document.querySelector("#imgComputer").setAttribute("src", dice);
    let msg;
    if(diceNumber==diceNumber2) {
        msg = `<h1>You Draw</h1>`;
        document.querySelector("#msgArea").innerHTML = msg
        return 2;
    }
    else if(diceNumber<diceNumber2) {
        msg = `<h1 style="color:red">You Lose</h1>`;
        document.querySelector("#msgArea").innerHTML = msg
        return 0;
    }
    else {
        msg = `<h1 style="color:blue">You Win</h1>`;
        document.querySelector("#msgArea").innerHTML = msg
        return 1;
    }
    
}