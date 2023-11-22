const inputForm = document.getElementById('formInput')
const buttonConfirmForm = document.getElementById('create')
const listForm = document.getElementById('list')

buttonConfirmForm.onclick = () => {
    listForm.innerHTML =`<li class="list-group-item" id="list">
    <h4 class="spanText">${inputForm.value}</h4>
    <div>
        <button class="btn-success"></button>
        <button class="btn-delete"></button>
    </div>
    </li>`
}