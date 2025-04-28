// Change text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
  dynamicText.textContent = 'The text has been changed! 🎉';
});

// Modify CSS styles via JavaScript
const changeStyleButton = document.getElementById('change-style-btn');
const mainTitle = document.getElementById('main-title');

changeStyleButton.addEventListener('click', () => {
  mainTitle.style.color = 'blue';
  mainTitle.style.fontSize = '3rem';
  mainTitle.style.fontFamily = 'Arial, sans-serif';
});

// Add a new list item
const addElementButton = document.getElementById('add-element-btn');
const itemList = document.getElementById('item-list');

addElementButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item ' + (itemList.children.length + 1);
  itemList.appendChild(newItem);
});

// Remove the last list item
const removeElementButton = document.getElementById('remove-element-btn');

removeElementButton.addEventListener('click', () => {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
  } else {
    alert('No more items to remove!');
  }
});
