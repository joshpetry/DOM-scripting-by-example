const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList')

const createLI = (textInput) => {
  const li = document.createElement('LI');
  li.innerHTML = textInput;
  const label = document.createElement('LABEL');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('INPUT');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);  
  const editButton = document.createElement('BUTTON'); 
  editButton.textContent = 'Edit';
  li.appendChild(editButton);
  const removeButton = document.createElement('BUTTON'); 
  removeButton.textContent = 'Remove';
  li.appendChild(removeButton);
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const textInput = input.value;
  input.value = '';
  const li = createLI(textInput);
  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    
    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Remove') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Edit') {
                
    }
});

/*

everything before edit is clicked

<li>
    John
    <input type="checkbox" />
    <button>edit</button>
    <button>remove</button>
</li>

after edit is clicked

<li>
    <input type="text" value="John" />
    <input type="checkbox" />
    <button>edit</button>
    <button>remove</button>
</li>

once save is complete it switches back

*/

/*
steps complete
1) add edit button
2) make edit button not delete when clicked
3) create function for edit button click

*/