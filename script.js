let items = document.querySelectorAll(".item");
let buttons = document.querySelectorAll(".button");

// Add click event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove "button-selected" class from all buttons
    buttons.forEach((button) => {
      button.classList.remove("button-selected");
    });
    // Add "button-selected" class to clicked button
    button.classList.add("button-selected");
    // Hide all items
    items.forEach((item) => {
      item.classList.remove("item-selected");
    });
    // Show selected item
    items[index].classList.add("item-selected");
  });
});

// Show the first item and select the first button on page load
items[0].classList.add("item-selected");
buttons[0].classList.add("button-selected");
