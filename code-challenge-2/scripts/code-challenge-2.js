document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', documentReady()) : documentReady();

function documentReady() {
    const list = document.getElementById('list');
    let listHTML = document.getElementById('list').innerHTML;

    document.getElementById('add-new-button').addEventListener('click', function () {
        const addNewInput = document.getElementById('add-new-input');
        const addNewInputValue = addNewInput.value.trim();
        if (addNewInputValue !== '') {
            list.innerHTML += `<div class="list-item">
                <input type="checkbox" class="list-item-checkbox" />
                <div class="list-item-text">${addNewInputValue}</div>
                <div class="list-item-buttons">
                    <button class="list-item-button" id="edit-button">
                        <img src="images/edit.svg" />
                    </button>
                    <button class="list-item-button" id="delete-button">
                        <img src="images/delete.svg" />
                    </button>
                </div>
            </div>`;
            addNewInput.value = '';
        }
    });

};