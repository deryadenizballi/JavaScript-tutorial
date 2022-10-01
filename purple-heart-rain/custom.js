function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 900 + "vh";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💜";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 100);
