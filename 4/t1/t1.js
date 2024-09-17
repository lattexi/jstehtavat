// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function renderTodoList() {
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = '';
  todoList.forEach(todo => {
    const liElement = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const index = todoList.findIndex(item => item.id === todo.id);
      if (index !== -1) {
        todoList.splice(index, 1);
        renderTodoList();
        console.log(todoList);
      }
    });

    liElement.appendChild(checkbox);
    liElement.appendChild(label);
    liElement.appendChild(deleteButton);
    ulElement.appendChild(liElement);
  });
}

function handleAddItem() {
  const dialog = document.querySelector('dialog');
  const input = dialog.querySelector('input');
  const form = dialog.querySelector('form');
  dialog.showModal();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const newTask = input.value.trim();
    if (newTask) {
      const newTodo = {
        id: Date.now(),
        task: newTask,
        completed: false,
      };
      todoList.push(newTodo);
      renderTodoList();
      console.log(todoList);
      dialog.close();
      input.value = '';
    }
  });
}

document.querySelector('.add-btn').addEventListener('click', handleAddItem);

renderTodoList();
