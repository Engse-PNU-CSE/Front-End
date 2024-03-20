document.addEventListener("DOMContentLoaded", () => {
  const bts = document.querySelector("section button");
  bts.addEventListener("click", () => {
    clickbts();
  });
  const numarea = document.querySelector("section #numberArea");
});
const clickbts = () => {
  let lottos = [];
  let numarea = document.querySelector("section div #numberArea");
  //lottos.length = 0 <- 초기화랑 같은 효과
  while (lottos.length < 8) {
    let lotto_number = Math.floor(Math.random() * 45 + 1);
    if (lotto_number in lottos) continue;
    else {
      lottos.push(`<span class = "sp${parseInt(lotto_number / 10)}">${lotto_number}</span>`);
      if(lottos.length==6) lottos.push(`<span class = "plus">+</span>`);
    }
  }
  msg = lottos.toString().replaceAll(',', '');
  numarea.innerHTML = msg;

};
