function handleClick() {
    const diceNumber = Math.floor(Math.random()*6+1);
    if(diceNumber == 1) dice=`./images/1.png`
    else if(diceNumber == 2) dice=`./images/2.png`
    else if(diceNumber == 3) dice=`./images/3.png`
    else if(diceNumber == 4) dice=`./images/4.png`
    else if(diceNumber == 5) dice=`./images/5.png`
    else dice="./images/6.png"
    document.querySelector("#imgUser").setAttribute("src", dice);

    const diceNumber2 = Math.floor(Math.random()*6+1);
    if(diceNumber2 == 1) dice=`./images/1.png`
    else if(diceNumber2 == 2) dice=`./images/2.png`
    else if(diceNumber2 == 3) dice=`./images/3.png`
    else if(diceNumber2 == 4) dice=`./images/4.png`
    else if(diceNumber2 == 5) dice=`./images/5.png`
    else dice="./images/6.png"
    document.querySelector("#imgComputer").setAttribute("src", dice);
    let msg;
    if(diceNumber==diceNumber2) msg = `You Draw`;
    else if(diceNumber<diceNumber2) msg = `You Lose`;
    else msg = `You Win`;
    document.querySelector("#msgArea").innerHTML = msg
}