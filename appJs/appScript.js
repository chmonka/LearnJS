const inputForm = document.getElementById('formInput')
const buttonConfirmForm = document.getElementById('create')
const listForm = document.getElementById('list')
const notes = []

function render() {
    listForm.innerHTML=""
    if(notes==0){
        listForm.innerHTML='<p>Нет элементов</p>'
    }
    for(let i = 0;i<notes.length;i++){
        listForm.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i],i))
    }
}
    
render()

buttonConfirmForm.onclick = () => {
    if (inputForm.value.length === 0) {
        return
    }
    const newNote = {
        title: inputForm.value,
        complited: false
    }
    listForm.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    notes.push(newNote)
    render()
    inputForm.value = ''
   
}

listForm.onclick = (event) =>{
    if(event.target.dataset.index){
        const index=parseInt(event.target.dataset.index)
        const type=event.target.dataset.type

        if(type==="toggle"){
            notes[index].complited = !notes[index].complited
        }else if(type ==='remove'){
            notes.splice(index, 1)
        }
    }
   render()
}

function getNoteTemplate(note,index) {
    console.log(note.complited)
    return ` <li class="list-group-item" id="list">
        <h4 class = "${note.complited? 'textLine': ''}" >${note.title}</h4>
        <div>
            <button class="btn-success btn-${note.complited ? 'warning' : 'success'} " data-type='toggle' data-index="${index}" >Да</button>
            <button data-type='remove' data-index="${index}" class="btn-delete">No</button>
        </div>
        </li>
    `
}


