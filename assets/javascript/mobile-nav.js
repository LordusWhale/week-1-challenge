const mobileNav = document.getElementById("mobile-nav");
const mobileMenuContent = document.getElementById("mobile-menu-content");
const toggleNavButton = document.getElementById("toggle-nav");

let toggleNav = false;

const closeMenu = () => {
  mobileNav.style.left = "-100%";
  mobileMenuContent.style.left = "-100%";
};

const openMenu = () => {
  mobileNav.style.left = 0;
  mobileMenuContent.style.left = 0;
};

toggleNavButton.addEventListener("click", (e) => {
  toggleNav = !toggleNav;
  toggleNav ? openMenu() : closeMenu();
});

mobileNav.addEventListener("click", (e) => {
  if (!mobileMenuContent.contains(e.target)) {
    closeMenu();
    toggleNav = false;
  }
});
