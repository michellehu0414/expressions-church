function createTwoColumnList(items, containerId) {
  const listContainer = document.getElementById(containerId);
  if (!listContainer) {
    console.error("Container with id '" + containerId + "' not found.");
    return;
  }

  const ul = document.createElement("ul");
  ul.className = 'two-column-list'; // Add class for styling

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
}

// Example usage
const items = [
  "Indistinct navigation elements",
  "Unclear form validation requirements",
  "Limited customization",
  "Dated design to support power users",
  "Lack of warning/confirmation messages",
  "Lack of redo/undo options",
  "Logic error: closing date with no closing time (users know which day the poll closes but not when)"
];

createTwoColumnList(items, "wrappedList");
