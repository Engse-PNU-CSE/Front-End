document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#throw");
    //button event check
    bt1.addEventListener("click", () => {
        handleClick();
    });
});



const handleClick = () => {
    const bts = document.querySelectorAll("section div img");

    //for each
    // bts.forEach((item) => {
    //     const n = Math.floor(Math.random()*6+1);
    //     item.setAttribute("src", `./images/${n}.png`);
    // });

    //basic for
    // for(let i = 0; i < bts.length; i++) {
    //     const n = Math.floor(Math.random()*6+1);
    //     bts[i].setAttribute("src", `./images/${n}.png`);
    // }

    //for in
    // for(let i in bts) {
    //         const n = Math.floor(Math.random()*6+1);;
    //         bts[i].setAttribute("src", `./images/${n}.png`);
    // }

    //for of <- basic (for in) python
    const bts1 = [0, 0, 0];
    // for(let bt of bts) {
    //         const n = Math.floor(Math.random()*6+1);
    //         bt.setAttribute("src", `./images/${n}.png`);
    //         console.log();
    // }
    //for of enteries
    for(let [idx, bt] of bts.entries()) {
            const n = Math.floor((Math.random()*6)+1);
            bt.setAttribute("src", `./images/${n}.png`);
            bts1[idx]=n;
            console.log(bts1);
    }
}