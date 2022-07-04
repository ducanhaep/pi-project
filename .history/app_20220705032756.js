const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".navigation");

const copyBtn = document.querySelector(".copy");
const address = document.querySelector(".address");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("0xc8CfAE61C3cDEA19D0dd8D73411E4b6682E4b6682");

  copyBtn.innerText = "COPIED";
  setTimeout(function () {
    copyBtn.innerText = "COPY";
  }, 5000);
});
