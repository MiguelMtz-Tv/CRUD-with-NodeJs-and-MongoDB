const url = 'http://localhost:3000/api/v1/task/';
//obtener registros
const getData = async() =>{
  try{
   const result = await axios.get(url); 
   if(result.status == 200){
    const datos = await result.data.Task;
    var tasks = '';

    datos.forEach(element => {
      tasks += `
      <div class="div-container">
      <input id="${element._id}" readonly="" type="text" class="task-el" value="${element.contenido}">
      <button id="editButton${element._id}" class="edit-button" onclick="editTask('${element._id}')">EDIT</button>
      <button class="delete-el" onclick="deleteTask('${element._id}')">DELETE</button>
      </div>`
    });
    document.getElementById('tasks').innerHTML = tasks;
   }
  }catch(error){
    console.error(error);
  }
}
getData();

// Send a POST request
const addTask = async() => {
  var taskContent = document.getElementById('prueba').value;
  axios({
    method: 'post',
    url: url,
    data: {
      contenido: taskContent,
      estado: false
    }
  }).then(getData());
  //reset input
  document.getElementById('prueba').value = '';
}

//delete a task
const deleteTask = async(id) =>{
  try{
    const res = await axios.delete(url+id);
    if(res.status == 200){
      getData();
    }
  }catch(error){
    console.log(error);
  }
}

//update a task
const updateTask = async (id) =>{
  var taskPatch = document.getElementById(id).value;
  console.log(id);
  try{
    const res = await axios.patch(url+id, {contenido: taskPatch}) 
    if(res.status == 200){
      console.log("datos actualizados con exito");
      getData();
    }
  } catch(error){
    console.log(error);
  }
}