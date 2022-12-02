function editTask(id){
    task = document.getElementById(id);
    editButton = document.getElementById('editButton'+id)
    
    if(editButton.innerText == 'EDIT'){
        editButton.innerText = 'SAVE';
        editButton.removeAttribute('onclick');
        editButton.setAttribute('onclick', 'updateTask("'+id+'")');
    }

    task.removeAttribute('readonly');
    task.focus();

}