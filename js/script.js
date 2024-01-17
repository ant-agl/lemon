// плавный скролл
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(href).offsetTop,
      behavior: "smooth",
    });
  });
});

// авто высота для главной картинки
function calcHeightMainImage() {
  let offerBlock = document.querySelector(".offer-main");
  let h = offerBlock.scrollHeight - offerBlock.clientHeight;

  let secondBlock = document.querySelector(".offer-secondary");
  secondBlock.style.height = h + "px";
}
window.addEventListener("resize", calcHeightMainImage);
document.addEventListener("DOMContentLoaded", calcHeightMainImage);

// маска
document.querySelectorAll(".tel").forEach((tel) => {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  const mask = IMask(tel, maskOptions);
});

// animate offer img
function animateOfferImg() {
  let img = document.querySelector(".offer__image");

  if (window.scrollY < 10 && window.innerWidth > 700) {
    img.classList.remove("animated");
  } else {
    img.classList.add("animated");
  }
}
window.addEventListener("scroll", animateOfferImg);
window.addEventListener("resize", animateOfferImg);
animateOfferImg();
