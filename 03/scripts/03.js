// alert("안녕하세요");
// 함수작성 2
// const handleClick = (n) => {
//     document.querySelector("#msgArea").innerHTML = `<h2>Button ${n} is selected</h2>`
// }

function handleClick(n) {
//    document.querySelector("#msgArea").innerHTML = "<h2>Button " + n + " is selected</h2>"
    let msg;
    if(n==1) msg = `<h2>Hello</h2>`;
    else if(n==2) msg = `<h2>Hi</h2>`;
    else if(n==3) msg = `<h2>See you</h2>`;
    else msg = `<h2>Goodbye</h2>`;
    document.querySelector("#msgArea").innerHTML = msg;
}

//After DomTree making
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded OK");
    //create Button
    const bt3 = document.createElement("button");
    const bt4 = document.createElement("button");
    //add Button
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea2").append(bt4);
    //create Button Text
    const bt3txt = document.createTextNode("Button 3");
    const bt4txt = document.createTextNode("Button 4");
    //add Button text
    bt3.appendChild(bt3txt);
    bt4.appendChild(bt4txt);
    bt3.setAttribute("id", "bt3");
    bt4.setAttribute("id", "bt4")
    //make Button Event
    bt3.addEventListener("click", () => {
        handleClick(3);
    });
    bt4.addEventListener("click", () => {
        handleClick(4);
    });
});