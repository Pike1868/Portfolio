let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
  if (btn.innerHTML === `<i class="fi-ss-moon-stars"></i>`) {
    btn.innerHTML = `<i class="fi fi-ss-brightness"></i>`;
    btn.style.color = "orange";
    btn.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="fi-ss-moon-stars"></i>`;
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
  }
});
