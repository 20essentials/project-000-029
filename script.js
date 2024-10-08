let d = document;
const $ = (el) => d.querySelector(el);
const $delete = $(".delete");
const $copy = $(".copy");
const $textarea = $("textarea");
const $btnCapitalize = $(".to-capitalize");
const $btnLowercase = $(".to-lowercase");
const $btnUppercase = $(".to-Uppercase");
const $btnAddUnderscores = $(".add-underscores");
const $btnAddHyphens = $(".add-hyphens");
const $btnRemoveUnderscores = $(".remove-underscores");
const $btnRemoveHyphens = $(".remove-hyphens");

const toCapitalize = (text) => {
  return text
    .split(' ')
    .map(el => `${el[0].toUpperCase()}${el.slice(1)}`)
    .join(' ');
}
const removeClasses = () => ($textarea.className = "");
const addSymbol = (text, symbol) => {
  return text
    .split(" ")
    .map((el) => `${el}${symbol}`)
    .join("")
    .slice(0, -1)
    .trim();
};
const removeSymbol = (text, symbol) => {
  return text.split(symbol).join(" ").trim();
};

/* ====================== DELEGATION EVENTS ===================== */

d.addEventListener("click", (e) => {
  if (e.target === $copy) {
    $textarea.select();
    $textarea.setSelectionRange(0, 5000000);
    navigator.clipboard.writeText($textarea.value);
    return;
  }
  if (e.target === $delete) {
    $textarea.value = "";
    return;
  }
  if (e.target === $btnCapitalize) {
    removeClasses();
    $textarea.value = toCapitalize($textarea.value);
    return;
  }
  if (e.target === $btnLowercase) {
    removeClasses();
    $textarea.value = $textarea.value.toLowerCase().trim();
    return;
  }
  if (e.target === $btnUppercase) {
    removeClasses();
    $textarea.value = $textarea.value.toUpperCase().trim();
    return;
  }
  if (e.target === $btnAddUnderscores) {
    $textarea.value = addSymbol($textarea.value, "_");
    return;
  }

  if (e.target === $btnAddHyphens) {
    $textarea.value = addSymbol($textarea.value, "-");
    return;
  }

  if (e.target === $btnRemoveUnderscores) {
    $textarea.value = removeSymbol($textarea.value, "_");
    return;
  }
  if (e.target === $btnRemoveHyphens) {
    $textarea.value = removeSymbol($textarea.value, "-");
    return;
  }
});

/* ============================== RAIN ============================= */

d.addEventListener("DOMContentLoaded", rain);

function rain() {
  let amount = 120,
    i = 0;

  while (i < amount) {
    let burbuja = d.createElement("i");
    burbuja.classList.add("burbuja");

    let size = Math.random() * 25 + 6,
      posX = Math.floor(Math.random() * 100),
      duration = Math.random() * 6 + 1,
      delay = Math.random() * -20;

    burbuja.style.left = posX + "vw";
    burbuja.style.width = size + "px";
    burbuja.style.height = size + "px";
    burbuja.style.animationDuration = duration + "s";
    burbuja.style.animationDelay = delay + "s";

    $(".bg").appendChild(burbuja);
    i++;
  }
}
