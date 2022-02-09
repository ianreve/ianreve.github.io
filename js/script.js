// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

//Mobile menu ========================
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// =================Dark Mode Switch ==========
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const dot = document.querySelectorAll(".dot");
const logo = document.querySelectorAll(".logo");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
// changing dots colors light and dark mode
const dots = function () {
  if (checkbox.checked) {
    dot.forEach((Element) => {
      Element.style.background = "#286d5d";
    });
  } else {
    dot.forEach((Element) => {
      Element.style.background = "#0A192F";
    });
  }
};

const logoColor = function () {
  if (checkbox.checked) {
    logo.forEach((Element) => {
      Element.style.stroke = "#64ffda";
    });
  } else {
    logo.forEach((Element) => {
      Element.style.stroke = "#0A192F";
    });
  }
};

//calling the function directly

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);
checkbox.addEventListener("click", dots);
checkbox.addEventListener("click", logoColor);

// Tytpewritter effect
const typeWriter = document.getElementById("typewriter-text");
const text = "Hi, my name is ";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

// ================================================================
// // Get all the elements you want to show on scroll
// const targets = document.querySelectorAll(".js-show-on-scroll");

// // Set up a new observer
// const observer = new IntersectionObserver(callback);

// // Loop through each of the target
// targets.forEach(function(target) {
//   // Hide the element
//   target.classList.add("opacity-0");

//   // Add the element to the watcher
//   observer.observe(target);
// });

// // Callback for IntersectionObserver
// const callback = function(entries) {
//   entries.forEach(entry => {

//     // Is the element in the viewport?
//     if (entry.isIntersecting) {

//       // Add the fadeIn class:
//       entry.target.classList.add("motion-safe:animate-fadeIn");
//     } else {

//       // Otherwise remove the fadein class
//       entry.target.classList.remove("motion-safe:animate-fadeIn");
//     }
//   });
// };
