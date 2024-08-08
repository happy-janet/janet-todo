// Import necessary libraries
const { getByPlaceholderText, getByText } = require('@testing-library/dom');
const fs = require('fs');
const path = require('path');

// Load HTML and JavaScript
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
document.body.innerHTML = html;
require('../src/index.js');

test('should add a task to the list', () => {
  const taskInput = getByPlaceholderText('Add a new task');
  const addButton = getByText('Add Task');

  taskInput.value = 'Test Task';
  addButton.click();

  const taskList = document.getElementById('taskList');
  expect(taskList.textContent).toContain('Test Task');
});
