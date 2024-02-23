document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#throw");
    //button event check
    bt1.addEventListener("click", () => {
        handleClick();
    });
});
const handleClick = () => {
    const bts = document.querySelectorAll("img");

    bts.forEach((item) => {
        const n = Math.floor(Math.random()*6+1);
        item.setAttribute("src", `./images/${n}.png`);
    });
}