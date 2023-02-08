console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const headline = data.headline;
  const task = data.task;
  console.log("Headline: " + headline + " Task: " + task);
  createNewListItem(headline, task);
  event.target.reset();
  event.target.elements.headline.focus();
});

function createNewListItem(headline, task) {
  const newListItem = document.createElement("li");
  todoList.append(newListItem);

  const newHeadline = document.createElement("h2");
  newListItem.append(newHeadline);
  newHeadline.textContent = headline;

  const newTask = document.createElement("p");
  newListItem.append(newTask);
  newTask.textContent = task;
}
