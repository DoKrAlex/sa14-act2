const customForm = document.getElementById('customForm');
const customTitleInput = document.getElementById('customTitle');
const customDetailsInput = document.getElementById('customDetails');
const customList = document.getElementById('customList');

customForm.addEventListener('submit', addCustom);

function addCustom(event) {
    event.preventDefault();

    const customTitle = customTitleInput.value.trim();
    const customDetails = customDetailsInput.value.trim();

    if (customTitle === '') {
        alert('Please enter a custom title');
        return;
    }

    const customItem = document.createElement('li');
    customItem.innerHTML = `<strong>${customTitle}</strong>`;

    if (customDetails !== '') {
        customItem.innerHTML += ` - ${customDetails}`;
    }

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editCustom(customItem, customTitle, customDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => customItem.remove();

    customItem.appendChild(editButton);
    customItem.appendChild(deleteButton);

    customList.appendChild(customItem);

    customTitleInput.value = '';
    customDetailsInput.value = '';
}

function editCustom(customItem, title, details) {
    const newTitle = prompt('Enter new title:', title);
    if (newTitle === null) {
        return; // If user cancels
    }
    const newDetails = prompt('Enter new details:', details);
    customItem.innerHTML = `<strong>${newTitle}</strong>`;
    if (newDetails !== '') {
        customItem.innerHTML += ` - ${newDetails}`;
    }
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editCustom(customItem, newTitle, newDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => customItem.remove();

    customItem.appendChild(editButton);
    customItem.appendChild(deleteButton);
}
