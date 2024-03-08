document.addEventListener("DOMContentLoaded", () => {
    const bts =  document.querySelector("section button")
    bts.addEventListener("click", () => {
        clickbts();
    })
  const numarea =  document.querySelector("section #numberArea")
});
const clickbts = () => {
    let lottos = [];
  while (lottos.length < 7) {
    let lotto_number = Math.floor(Math.random() * 45 + 1);
    if (lotto_number in lottos) continue;
    lottos.push(lotto_number);
  }
  let basic_number = lottos.slice(0, -1).sort();
  let bouns_number = lottos.slice(-1)
  
//   for (let i = 1; i < 7; i++) {
//     let num = `<span>${basic_number[i-1]}</span>`
//     document.querySelector("section div #num").innerHTML = num;
//   }
//   let num1 = `<span>${bouns_number}</span>`
//     document.querySelector("section #numberArea").innerHTML = num1;
    let num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[0]}</span>`
    document.querySelector("section div #num1").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[1]}</span>`
    document.querySelector("section div #num2").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[2]}</span>`
    document.querySelector("section div #num3").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[3]}</span>`
    document.querySelector("section div #num4").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[4]}</span>`
    document.querySelector("section div #num5").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${basic_number[5]}</span>`
    document.querySelector("section div #num6").innerHTML = num;
    num = `<span style = "background-color: whitesmoke;
   border-radius: 50%; height: 50px; width: 50px;">${bouns_number}</span>`
    document.querySelector("section div #numbonus").innerHTML = num;
  
}