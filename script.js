// Toggle collapsed/full mode

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("sidebarToggle");
  const body = document.body;
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("sidebar-collapsed");

    icon.classList.toggle("fa-angle-left");
    icon.classList.toggle("fa-angle-right");
  });
});




