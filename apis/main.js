const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.onclick = function() {
  if (input.value.trim() !== "") {
    const li = document.createElement('li');
    li.innerHTML = `<span id="${Math.random()}">${input.value}</span> <button class="delete">Sil</button>`;
    list.appendChild(li);
    li.querySelector('.delete').onclick = function() {
      li.remove();
    }
  }

    fetch('http://localhost:3003/employees', {
    method: 'POST',
    body: JSON.stringify({
      text: input.value
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Todo eklendi:', data);
  });

  

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") addBtn.click();
});

fetch('http://localhost:3002/employees')
  .then(response => response.json())
  .then(data => {
    data.forEach(employee => {
      const p = document.createElement('p');
      p.textContent = employee.text; 
      document.body.appendChild(p);
    });
  })
  .catch(error => {
    console.error('API hatası:', error);
  });
}

// const id = li.getElementsById('employee-id');  
      fetch('http://localhost:3003/employees', {
        method: 'DELETE',
        body: JSON.stringify({
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Todo silindi:', data);
      });


  fetch('http://localhost:3003/employees', {
    method: 'GET',
    })
  .then(response => response.json())
  .then(data => {
    list.innerHTML = ''; // Clear the list before adding items
    data.forEach(employee => {
      li.innerHTML = `<span id="${employee.id}">${employee.text}</span> <button class="delete">Sil</button>`;
      list.appendChild(li);
    });
  });
