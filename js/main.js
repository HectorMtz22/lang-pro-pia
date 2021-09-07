const main = document.querySelector(".sidebar");
const divs = document.querySelectorAll(".sidebar div");

const CONSTANTS = {
  personales: "Personales",
  tareas: "Tareas",
};

const toggle = (element, className) => {
  element.classList.toggle(className);
};

const toggleInvisible = (event) => {
  const texto = event.srcElement.innerText.trim();
  const [Personales, Tareas] = divs;

  if (event.srcElement.tagName !== "A") {
    return;
  }
  if (texto === CONSTANTS.personales) {
    toggle(Personales, "toggleInvisible");
    setTimeout(() => toggle(divs[0], "invisible"), 1000);
  } else {
    toggle(Tareas, "toggleInvisible");
  }
};

main.addEventListener("click", toggleInvisible);
