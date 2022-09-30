const btn = document.getElementById("btn");
const container = document.getElementById('container');
console.log(btn);

// addEvntListener
btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText="This Challenge is Crazy !";

  container.appendChild(notif);

  setTimeout(()=>{
    notif.remove();
  },5000);


}
