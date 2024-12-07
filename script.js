const box1 = document.getElementById("box1");
const input = document.getElementById("input_one");

input.addEventListener("input", () => {
  box1.style.backgroundColor = input.value;
  box1.style.background = input.value;
  box1.style.padding = input.value;
  box1.style.margin = input.value;
  box1.style.borderRadius = input.value;
});

const count = document.getElementById("continer");
const cricle = document.getElementById("cricle");
const vj = document.getElementById("vj");
const box = document.getElementById("box");
const btn = document.getElementById("btn");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_4 = document.getElementById("btn_4");

btn_1.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

btn_1.addEventListener("click", () => {
  count.style.backgroundColor = "red";
});

btn_2.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

btn_2.addEventListener("click", () => {
  count.style.backgroundColor = "green";
});

btn_3.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

btn_3.addEventListener("click", () => {
  count.style.backgroundColor = "blue";
});
btn_4.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});
btn_4.addEventListener("click", () => {
  count.style.backgroundColor = "yellow";
});
