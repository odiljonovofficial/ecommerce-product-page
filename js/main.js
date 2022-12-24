window.addEventListener("DOMContentLoaded", () => {
  const siteHeaderCartLink = document.querySelector(
      ".js-site-header-cart-link"
    ),
    siteHeaderCartModal = document.querySelector(".site-header__cart-modal");
});

if (siteHeaderCartLink) {
  siteHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    siteHeaderCartModal.classList.toggle("site-header__cart-modal--open");
  });
}
