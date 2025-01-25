/*
  1. Primeiro lidar com os elementos.

  2. Segundo lidar com os eventos.

  3. Aplicar a logíca para código.
*/


const form = document.querySelector('#todo-form');

const taskTitleInput = document.querySelector('#task-title-input');

const todoListUl = document.querySelector('#todo-list');

let taks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário.

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert('Sua tarefa precisa de pelo menos três caracteres');
    // O return serve para sair da função ou seja ele não vai rodar o resto do código embaixo.
    return;
  };

  taks.push({
    title: taskTitle,
    done: false,
  });

  
  
  const li = document.
  createElement('li');

  const input = document.createElement('input');
  // Ele vai setar o type do input.
  input.setAttribute('type', 'checkbox');

  const span = document.createElement('span');
  span.textContent = taskTitle;

  const button = document.createElement('button');
  button.textContent = 'Remover';
  button.addEventListener('click', (event) => {
    // target -> E basicamente se refere ao elemento que disparou o evento.

    // parentElement -> 
    console.log(event.target.parentElement);
  });
  
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
  
  taskTitleInput.value = '';
});




