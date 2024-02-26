
document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("section img");
    //button event check
    const bts =document.querySelectorAll("section #selection button")

    let nc = Math.floor(Math.random()*6+1);

    const img1 = document.querySelector("#imgComputer");
    img1.setAttribute("src", `./images/${nc}.png`);

    const btthorw = document.querySelector("section #throw button")

    for(let bt of bts) {
        bt.addEventListener("click", () => {
            console.log(nc, parseInt(bt.textContent.slice(-1)));
            //const n = parseint() -> 정수로 형변환
            handleClick(parseInt(bt.textContent.slice(-1)), nc);
        });
    }

    btthorw.addEventListener("click", () => {
        nc=handleClick2();
    });
    
});
const handleClick = (n, nc) => {
    
    const img2 = document.querySelector("#imgUser");

    img2.setAttribute("src", `./images/${n}.png`)

    if(nc == n) {
        msg = `<h1 style="color:blue">Correct</h1>`;
        document.querySelector("#msgArea").innerHTML = msg;
    }
    else {
        msg = `<h1 style="color:red">Incorrect</h1>`;
        document.querySelector("#msgArea").innerHTML = msg;
    }
}
const handleClick2 = () => {
    const imgs = document.querySelector("section #computer img");
    const nc = Math.floor(Math.random()*6+1);
    const img1 = document.querySelector("#imgComputer");
    img1.setAttribute("src", `./images/${nc}.png`);

    return nc;
}
