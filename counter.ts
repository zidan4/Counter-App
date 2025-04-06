let count = 0;

const counter = document.getElementById("counter") as HTMLElement;
const btn = document.getElementById("increment") as HTMLButtonElement;






btn.addEventListener("click", () => {
  count++;
  counter.textContent = `Count: ${count}`;
});
