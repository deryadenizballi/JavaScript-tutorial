const openBtn = document.querySelector("#open");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
});

