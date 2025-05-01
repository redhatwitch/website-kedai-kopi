// menyeleksi navbar
const navbarNav = document.querySelector(".navbar-nav");

// mengklik hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
