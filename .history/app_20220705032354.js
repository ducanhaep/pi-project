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
  const content = address.textContent;
  navigator.clipboard.writeText(content);
});
