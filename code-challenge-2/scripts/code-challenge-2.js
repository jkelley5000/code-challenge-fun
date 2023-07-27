document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', documentReady()) : documentReady();

function addEventListeners() {
    if (document.getElementsByClassName('list-item').length > 0) {
        document.getElementById('list-item-complete-checkbox').addEventListener('click', function () {
            const listItems = document.getElementsByClassName('list-item');
            for (let i = 0; i < listItems.length; i++) {
                const listItem = listItems[i];
                const listItemCompleteCheckbox = listItem.children[0];
                if (listItemCompleteCheckbox.checked) {
                    listItem.children[1].classList += ' list-item-complete';
                } else {
                    listItem.children[1].classList = 'list-item-text';
                }
            }
        });

        document.getElementById('delete-button').addEventListener('click', function () {
            this.parentElement.parentElement.remove();
        });

    }
}

function documentReady() {
    const list = document.getElementById('list');
    let listHTML = document.getElementById('list').innerHTML;

    document.getElementById('add-new-button').addEventListener('click', function () {
        const addNewInput = document.getElementById('add-new-input');
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

            addEventListeners();
        }
    });

};