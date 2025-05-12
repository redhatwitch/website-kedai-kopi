// HAMBURGER MENU
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

// SEARCH FORM
// menyeleksi search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// mengklik search icon
document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  // supaya pointernya langsung muncul di search box
  searchBox.focus();
  // untuk menonaktifkan event dari element yang dimaksud
  e.preventDefault();
};

// mengklik di halaman untuk menutup sidebar
const search = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// SHOPPING CART
// menyeleksi shopping-cart
const shopCart = document.querySelector(".shopping-cart");

// mengklik hamburger menu
document.querySelector("#shopping-cart").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
};

// mengklik di halaman untuk menutup sidebar
const shopBtn = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!shopBtn.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});
