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

// form
const name = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const phone = document.querySelector('[name="phone"]');
const message = document.querySelector('[name="message"]');
const formCallback = document.querySelector(".form-callback");
formCallback.addEventListener("submit", function (e) {
  e.preventDefault();
  let isError = false;

  if (!name.value) {
    name.classList.add("error");
    isError = true;
  }
  if (!email.value) {
    email.classList.add("error");
    isError = true;
  }
  if (!phone.value) {
    phone.classList.add("error");
    isError = true;
  }
  if (!message.value) {
    message.classList.add("error");
    isError = true;
  }

  if (isError) return;

  fetch("https://api.lemon-time.ru/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: {
      name: name.value,
      email: email.value,
      phone: phone.value,
      text: message.value,
    },
  });
});

document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", function () {
    this.classList.remove("error");
  });
});
