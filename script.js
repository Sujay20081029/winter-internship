const countValue = document.getElementById("countValue");
let count = 0;

document.getElementById("increaseButton").addEventListener("click", () => {
  count += 1;
  countValue.textContent = String(count);
});

document.getElementById("deleteButton").addEventListener("click", () => {
  count = Math.max(0, count - 1);
  countValue.textContent = String(count);
});

for (const id of ["outlineButton", "secondaryButton", "ghostButton"]) {
  document.getElementById(id).addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
}
