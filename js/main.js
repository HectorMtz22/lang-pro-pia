const sidebar = document.querySelector(".sidebar");
const containers = document.querySelectorAll(".container");
// const divs = document.querySelectorAll(".sidebar div");

// const CONSTANTS = {
//   personales: "Personales",
//   tareas: "Tareas",
// };

const toggle = (element, className) => {
  element.classList.toggle(className);
  if (element.classList[1] === className) {
    window.localStorage.setItem(className, true);
  } else {
    window.localStorage.setItem(className, false);
  }
};

// // const toggleInvisible = (event) => {
// //   const texto = event.srcElement.innerText.trim();
// //   const [Personales, Tareas] = divs;

// //   if (event.srcElement.tagName !== "A") {
// //     return;
// //   }
// //   if (texto === CONSTANTS.personales) {
// //     toggle(Personales, "toggleInvisible");
// //     setTimeout(() => toggle(divs[0], "invisible"), 1000);
// //   } else {
// //     toggle(Tareas, "toggleInvisible");
// //   }
// // };

// // main.addEventListener("click", toggleInvisible);

const menu = document.getElementById("menu");
const menuIcon = document.querySelector(".menu_icon");

async function firstTime() {
  const res = await window.localStorage.getItem("toggleInvisible");
  if (res === "true") {
    menu.checked = true;
    aver();
  }
}

window.addEventListener("load", async function () {
  await firstTime();
});

menu.addEventListener("click", () => aver());

function aver() {
  toggle(sidebar, "toggleInvisible");
  toggle(menuIcon, "menu_checked");
  containers.forEach((container) => {
    toggle(container, "center");
  });
}
