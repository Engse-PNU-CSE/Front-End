document.addEventListener("DOMContentLoaded", () => {
    const n = document.querySelector("section img");
    const inputNum = document.querySelector("section input");
    const submitButton = document.querySelector("section button");
    var num;
    let flag = false;
    
    n.addEventListener("click", () => {
        if(!flag) {
            num = Math.floor(Math.random()*100+1);
            n.setAttribute("src", `./images/what.png`)
            flag = true;
            console.log(num);
        }
    });
    submitButton.addEventListener("click", () => {
        document.querySelector("#msg").innerHTML = ''
        if(inputNum.value == '') {
            document.querySelector("#msg").innerHTML = '<h1 style="color:red">Input number</h1>'
            inputNum.focus();
            return;
        }
        if(inputNum.value < 1 || inputNum.value > 100) {
            document.querySelector("#msg").innerHTML = '<h1 style="color:red; font-size:24px;">Input number size of 1~100</h1>'
            inputNum.focus();
            return;
        }
        if(num > inputNum.value) {
            document.querySelector("#msg").innerHTML = '<h1 style="color:red">Up</h1>'
            n.setAttribute("src", `./images/up.png`);
        }
        else if( num == inputNum.value) {
            document.querySelector("#msg").innerHTML = '<h1 style="color:green">Correct!</h1>'
            submitButton.innerHTML = 'Home'
            n.setAttribute("src", `./images/good.png`);
            inputNum.style.display = "none"
            flag = false;
            submitButton.addEventListener("click", () => {
                location.replace(location.href)
            })
        }
        else {
            document.querySelector("#msg").innerHTML = '<h1 style="color:blue">Down</h1>'
            n.setAttribute("src", `./images/down.png`);
        }
    });
});