document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // hide the loader element and show the page content
    loader.style.display = "none";
    content.style.display = "block";


    if (isWindows()) {
      const activateWindows = document.getElementById("activate-windows");
      activateWindows.style.display = "block";
    }
  }, 500); // delay it a bit
});

function isWindows() {
  return navigator.userAgent.includes("Windows") || navigator.platform.includes("Win");
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-arrow');

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
  });
});