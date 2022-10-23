//   GLOBAL FUNCTIONS
export function buildElement(element, parent, className, text) {
  const createdElement = document.createElement(element);
  createdElement.classList.add(className);
  parent.appendChild(createdElement);
  createdElement.textContent = text;

  return createdElement;
}

export function parseDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const parsed = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return parsed;
}

export function addScrollToTop (button) {

  button.addEventListener('click', topFunction);

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.bottom = "40px";
  } else {
    button.style.bottom = "-55px";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
}

export async function removeAllObjectsWithClass (className) {
const objects = document.querySelectorAll(className);
objects.forEach( (object) => {
object.remove();
});
};