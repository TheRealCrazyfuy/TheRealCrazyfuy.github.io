document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // hide the loader element and show the page content
    loader.style.display = "none";
    content.style.display = "block";
  }, 500); // delay it a bit
});
