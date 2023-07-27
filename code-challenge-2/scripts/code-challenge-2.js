document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', documentReady()) : documentReady();

function addEventListeners() {
    if (document.getElementsByClassName('list-item').length > 0) {
        const listItemCheckboxes = document.getElementsByClassName('list-item-checkbox');
        for (let i = 0; i < listItemCheckboxes.length; i++) {
            const listItemCheckbox = listItemCheckboxes[i];
            listItemCheckbox.addEventListener('click', function () {
                if (listItemCheckbox.checked) {
                    listItemCheckbox.parentElement.children[1].classList += ' list-item-complete';
                } else {
                    listItemCheckbox.parentElement.children[1].classList = 'list-item-text';
                }
            });
        }

        const deleteButtons = document.getElementsByClassName('list-item-button');
        for (let i = 0; i < deleteButtons.length; i++) {
            const deleteButton = deleteButtons[i];
            deleteButton.addEventListener('click', function () {
                this.parentElement.parentElement.remove();
            });
        }

    }
}

function addListItemToLocalStorage(newListItem) {
    let storedListItems = localStorage.getItem('listItems');
    if (storedListItems === null) {
        localStorage.setItem('listItems', JSON.stringify([newListItem]));
    } else {
        storedListItems = JSON.parse(storedListItems);
        storedListItems.push(newListItem);
        localStorage.setItem('listItems', JSON.stringify(storedListItems));
    }
}

function documentReady() {
    const addNewInput = document.getElementById('add-new-input');
    const list = document.getElementById('list');
    let listHTML = document.getElementById('list').innerHTML;

    document.getElementById('add-new-button').addEventListener('click', function () {
        const addNewInputValue = addNewInput.value.trim();
        if (addNewInputValue !== '') {
            list.innerHTML += `<div class="list-item">
                <input type="checkbox" class="list-item-checkbox" id="list-item-complete-checkbox" />
                <div class="list-item-text">${addNewInputValue}</div>
                <div class="list-item-buttons">
                    <button class="list-item-button" id="delete-button">
                        <img src="images/delete.svg" />
                    </button>
                </div>
            </div>`;
            addNewInput.value = '';

            addListItemToLocalStorage(addNewInputValue);
            addEventListeners();
        }
    });

};