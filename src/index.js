document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// index.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const taskDescription = document.getElementById("new-task-description").value;

      if (taskDescription.trim() !== "") {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskDescription;

          // Add delete button for each task
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", function () {
              taskItem.remove();
          });

          taskItem.appendChild(deleteButton);
          taskList.appendChild(taskItem);

          form.reset(); // Clear the input field
      }
  });
});
