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
  // let basic_number = lottos.slice(0, -1).sort((a, b) => a - b);
  // let bouns_number = lottos.slice(-1);
  // let tags = '';
  // basic_number.map((v) => {
  //   tags = tags + `<span class = "sp${parseInt(v/10)}">${v}</span>`
  // });
  // tags = tags + `<span class = "plus">+</span><span class = "sp${parseInt(bouns_number/10)}">${bouns_number}</span>`
  // numarea.innerHTML = tags;
  // let tags = [];
  // tags = lottos.map((v) => 
  //   `<span class = "sp${parseInt(v / 10)}">${v}</span>`
  // );
  // tags.splice(6, 0,`<span class = "plus">+</span>`)
  // msg = tags.toString().replaceAll(',', '');
  // numarea.innerHTML = msg;
  // console.log(msg);
};
