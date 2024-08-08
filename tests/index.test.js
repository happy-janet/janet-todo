const { getByPlaceholderText, getByText } = require('@testing-library/dom');
const fs = require('fs');
const path = require('path');

// Load HTML into the DOM
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
document.body.innerHTML = html;

// Load the JavaScript file
require('../src/index.js');

test('should add a task to the list', () => {
    const taskInput = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add Task');

    // Simulate user input
    taskInput.value = 'Test Task';
    addButton.click();

    // Verify that the task appears in the list
    const taskList = document.getElementById('taskList');
    expect(taskList.textContent).toContain('Test Task');
});

test('should not add an empty task', () => {
    const taskInput = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add Task');

    // Simulate empty input
    taskInput.value = '';
    addButton.click();

    // Verify that the task is not added
    const taskList = document.getElementById('taskList');
    expect(taskList.textContent).not.toContain('');
});
