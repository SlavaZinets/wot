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
