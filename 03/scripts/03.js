// alert("안녕하세요");
// 함수작성 2
// const handleClick = (n) => {
//     document.querySelector("#msgArea").innerHTML = `<h2>Button ${n} is selected</h2>`
// }

function handleClick(n) {
//    document.querySelector("#msgArea").innerHTML = "<h2>Button " + n + " is selected</h2>"
    document.querySelector("#msgArea").innerHTML = `<h2>Button ${n} is selected</h2>`
}

//After DomTree making
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded OK");
    //create Button
    const bt3 = document.createElement("button");
    //add Button
    document.querySelector("#btArea2").append(bt3);
    //create Button Text
    const bt3txt = document.createTextNode("Button 3");
    //add Button text
    bt3.appendChild(bt3txt);
});