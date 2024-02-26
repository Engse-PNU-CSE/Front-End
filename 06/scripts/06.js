
// addEventListener("DOMContentLoaded", () => {
//     const diceNumber = Math.floor(Math.random()*6+1);

//     dice = `./images/${diceNumber}.png`;
//     document.querySelector("#imgComputer").setAttribute("src", dice);

//     const btthorw = document.querySelector("#throw");
//     btthorw.addEventListener("click", () => {
//         diceNumber=handleClick1();
//     });

//     const bt1 = document.querySelector("#bt1");
//     bt1.addEventListener("click", () => {
//         if(diceNumber==1) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

//     const bt2 = document.querySelector("#bt2");
//     bt2.addEventListener("click", () => {
//         if(diceNumber==2) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

//     const bt3 = document.querySelector("#bt3");
//     bt3.addEventListener("click", () => {
//         if(diceNumber==3) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

//     const bt4 = document.querySelector("#bt4");
//     bt4.addEventListener("click", () => {
//         if(diceNumber==4) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

//     const bt5 = document.querySelector("#bt5");
//     bt5.addEventListener("click", () => {
//         if(diceNumber==5) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

//     const bt6 = document.querySelector("#bt6");
//     bt6.addEventListener("click", () => {
//         if(diceNumber==6) {
//             msg = `<h1 style="color:blue">Correct</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//         else {
//             msg = `<h1 style="color:red">Incorrect</h1>`;
//             document.querySelector("#msgArea").innerHTML = msg;
//         }
//     });

// });
// const handleClick1 = () => {
//     const diceNumber = Math.floor(Math.random()*6+1);

//     dice = `./images/${diceNumber}.png`;
//     document.querySelector("#imgComputer").setAttribute("src", dice);

//     return diceNumber
// }

const handleClick = (n) => {
    const nc = Math.floor(Math.random()*6+1);
    const img1 = document.querySelector("#omgComputer");
    const img2 = document.querySelector("imgUser")

    if(nc == n) {
        msg = `<h1 style="color:blue">Correct</h1>`;
        document.querySelector("#msgArea").innerHTML = msg;
    }
    else {
        msg = `<h1 style="color:red">Incorrect</h1>`;
        document.querySelector("#msgArea").innerHTML = msg;
    }
}