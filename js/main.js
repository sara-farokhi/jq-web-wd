// CAROUSEL
let slideIndex = 0;
function showSlide() {
  let slides = [...document.querySelectorAll(".slider")];
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlide, 4000);
}
showSlide();

// NAV
const nav = document.querySelector("nav");
const navHeight = document.querySelector("nav").offsetHeight;
const logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (scrollY > navHeight) {
    nav.classList.add("add");

    logo.src = `images/logo_wedding.png`;
  } else {
    nav.classList.remove("add");
    logo.src = `images/logo_wedding_white.png`;
  }
});

// BRIDEAN AND GROOM ANIMATION

const couplesUp =
  document.querySelector(".bride-groom-wrapper").offsetTop - 400;
const couples = document.querySelectorAll(".couple");

window.addEventListener("scroll", function () {
  if (window.scrollY > couplesUp) {
    for (i = 0; i < couples.length; i++) {
      couples[i].classList.add("animate__zoomIn");
    }
  }
});

// GROOMSMEN AND BRISESMAIDS ANIMATION

const brgrWrapperTop = document.querySelector(".groomsmen").offsetTop - 50;

const gbs = [...document.querySelectorAll(".gb-img")];

window.addEventListener("scroll", function () {
  if (scrollY > brgrWrapperTop) {
    for (gb of gbs) {
      gb.classList.add("animate__zoomIn");
    }
  }
});

// WEDDING DETAILS ANIMATION

const weddingDetailsTop =
  document.querySelector(".details-wrapper").offsetTop - 50;
const wedDetails = Array.from(document.querySelectorAll(".wed-detail"));
window.addEventListener("scroll", function () {
  if (scrollY > weddingDetailsTop) {
    wedDetails.forEach(function (detail) {
      detail.classList.add("animate__zoomIn");
    });
  }
});

// WEDDING HOTELS ANIMATION

const weddingHotelsTop = document.querySelector(".hotels-wrapper").offsetTop;
const wedHotels = Array.from(document.querySelectorAll(".hotel"));
window.addEventListener("scroll", function () {
  if (scrollY > weddingHotelsTop) {
    wedHotels.forEach(function (detail) {
      detail.classList.add("animate__zoomIn");
    });
  }
});

// ELEVATOR

$(function () {
  $(".elevator").fadeOut();
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".elevator").fadeOut();
    } else {
      $(".elevator").fadeIn();
    }
  });
  $(".elevator").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  // PAGE NAVIGATION
  $(".menu li a").click(function () {
    const sectionTop = $(this.hash).offset().top - $("nav").outerHeight();
    $("body, html").animate(
      {
        scrollTop: sectionTop,
      },
      1000
    );
  });
});

//LOADER
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut();
  $("body").css("overflow", "auto");
});
