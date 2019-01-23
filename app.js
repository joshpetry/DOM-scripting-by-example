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
  const button = document.createElement('BUTTON'); 
  button.textContent = 'remove';
  li.appendChild(button);
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
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});


