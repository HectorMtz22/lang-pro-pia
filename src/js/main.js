const sections = document.querySelectorAll(".sidebar section");
const divs = document.querySelectorAll(".sidebar div");

const toggle = (element, className) => {
  element.classList.toggle(className);
};

const toggleInvisible = (event) => {
  const texto = event.path[0].innerText;
  const [Personales, Tareas] = divs;

  if (texto === "Personales") {
    toggle(Personales, "toggleInvisible");
    setTimeout(() => toggle(divs[0], "invisible"), 1000);
  } else {
    toggle(Tareas, "toggleInvisible");
  }
};

sections.forEach((section) => {
  section.addEventListener("click", toggleInvisible);
});
