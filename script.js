let d = document;

d.addEventListener("click", e => {
  let $textarea = d.querySelector("textarea");
  let $textareaValue = d.querySelector("textarea").value.trim();

  if ($textareaValue !== "") {
    if (e.target.matches(".may")) {
      $textarea.value = $textareaValue.toUpperCase();
    }

    if (e.target.matches(".min")) {
      $textarea.value = $textareaValue.toLowerCase();
    }

    if (e.target.matches(".cap")) {
      let array = $textareaValue.toLowerCase().split(" "), nuevoArray = [];
      array.forEach(element => {
        let parteDerecha = element.substring(1);
        nuevoArray.push(element.at(0).toUpperCase() + parteDerecha);
      });

      $textarea.value = nuevoArray.join(" ").trim();
    }

    if (e.target.matches(".hyp")) {
      let $array = $textareaValue.split(" ");
      $textarea.value = $array.join("_");
    }
  }
});

d.addEventListener("DOMContentLoaded", rain);

function rain() {
  let amount = 100, i = 0;

  while ( i < amount) {
    let burbuja = d.createElement("i");
    burbuja.classList.add("burbuja");

    let size = Math.random() * 25 + 6,
      posX = Math.floor(Math.random() * window.innerWidth),
      duration = Math.random() * 6 + 1,
      delay = Math.random() * -20;

    burbuja.style.left = posX + "px";
    burbuja.style.width = size + "px";
    burbuja.style.height = size + "px";
    burbuja.style.animationDuration = duration + "s";
    burbuja.style.animationDelay = delay + "s";

    d.body.appendChild(burbuja);
    i++;
  }
}