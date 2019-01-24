const form = document.querySelector('#registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.querySelector('#invitedList')

const div = document.createElement('DIV');
const filterLabel = document.createElement('LABEL');
const filterCheckBox = document.createElement('INPUT');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);
filterCheckBox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  if (isChecked) {
    for (let i = 0; i < lis.length; i++ ) {
      let li = lis[i];
      if (li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < lis.length; i++ ) {
      let li = lis[i];
      li.style.display = '';
    }
  }
});

const createLI = (text) => {
  const li = document.createElement('LI');
  const span = document.createElement('SPAN');
  span.textContent = text;
  li.appendChild(span);
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
  const text = input.value;
  input.value = '';
  const li = createLI(text);
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
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if (button.textContent === 'Remove') {
        ul.removeChild(li);
      } else if (button.textContent === 'Edit'){
        const span = li.firstElementChild;
        const input = document.createElement('INPUT');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'Save';
      } else if (button.textContent === 'Save'){
        const input = li.firstElementChild;
        const span = document.createElement('SPAN');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'Edit';
      }
    }
});
