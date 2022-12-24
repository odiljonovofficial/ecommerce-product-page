// Object
const modifiers = {
  imgThumbnailActive: "img-showcase__thumbnail--active",
};

// SHOPPING CART MODAl
window.addEventListener("DOMContentLoaded", () => {
  const siteHeaderCartLink = document.querySelector(
      ".js-site-header-cart-link"
    ),
    siteHeaderCartModal = document.querySelector(".site-header__cart-modal");

  if (siteHeaderCartLink) {
    siteHeaderCartLink.addEventListener("click", function (evt) {
      evt.preventDefault();

      siteHeaderCartModal.classList.toggle("site-header__cart-modal--open");
    });
  }

  // IMG SHOWCASE
  const elsImgShowcaseThumbnailButton = document.querySelectorAll(
    ".js-img-showcase-thumbnail-button"
  );
  const elsImgThumbnail = document.querySelectorAll(".img-showcase__thumbnail");

  elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener("click", function () {
      // Remove active state from all buttons
      elsImgThumbnail.forEach(function (elImgThumbnail) {
        elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
      });

      // Add active state to clicked button
      elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
    });
  });
});
