// menyeleksi navbar
const navbarNav = document.querySelector(".navbar-nav");

// mengklik hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// mengklik di halaman untuk menutup sidebar
const hamMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
