const accordionBtns = document.querySelectorAll(".accordion__arrow");
const accordionTexts = document.querySelectorAll(".accordion__text");

accordionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const open = btn.classList.contains("accordion__arrow--open");
    accordionBtns.forEach((btn) => {
      btn.classList.remove("accordion__arrow--open");
    });
    accordionTexts.forEach((text) => {
      text.classList.remove("accordion__text--open");
    });
    if (!open) {
      btn.classList.add("accordion__arrow--open");
      accordionTexts[index].classList.add("accordion__text--open");
    }
  });
});

// const slider = new Siema({
//   selector: ".banner__slide",
//   perPage: 1,
//   loop: true,
// });
