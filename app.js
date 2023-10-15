document.addEventListener("DOMContentLoaded", function () {
  const dark = document.querySelector(".dark");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }
  dark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    if (document.documentElement.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark-theme");
    } else {
      localStorage.setItem("theme", "");
    }
  });
});