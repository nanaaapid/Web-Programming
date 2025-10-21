const hour = new Date().getHours();
let greet = "Hello!";
if (hour < 12) greet = "Good Morning 🌅";
else if (hour < 18) greet = "Good Evening 🌇";
else greet = "Good Night 🌙";
document.getElementById("greet").innerText = greet;

document.addEventListener("mousemove", e => {
  const sparkle = document.createElement("div");
  sparkle.textContent = "🌷";
  sparkle.style.position = "fixed";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "fade 1s forwards";
  document.body.appendChild(sparkle);
  setTimeout(()=>sparkle.remove(),1000);
});
