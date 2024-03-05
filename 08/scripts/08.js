document.addEventListener("DOMContentLoaded", () => {
    const n = document.querySelector("section img");
    const inputNum = document.querySelector("section input");
    const submitButton = document.querySelector("section button");
    var num;
    let flag = false;
    n.addEventListener("click", () => {
        if(!flag) {
            num = Math.floor(Math.random()*100+1);
            flag = true;
            console.log(num);
        }
    });
    submitButton.addEventListener("click", () => {
        if(inputNum.value == '') {
            document.querySelector("#msg").innerHTML = '<h1>Input number</h1>'
            inputNum.focus();
            return;
        }
        if(num > inputNum.value) {
            console.log("UP");
            n.setAttribute("src", `./images/up.png`);
        }
        else if( num == inputNum.value) {
            console.log("Equal");
            n.setAttribute("src", `./images/good.png`);
            flag = false;
        }
        else {
            console.log("Down");
            n.setAttribute("src", `./images/down.png`);
        }
    });
});