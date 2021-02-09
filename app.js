document.getElementById("formtask").addEventListener("submit",savetask);

function savetask(e){

    let titulo = document.getElementById("titulo").value;
    let descrip = document.getElementById("descripcion").value;

    const tast ={
        titulo,
        descrip
    };

    if(localStorage.getItem("tasts") === null){
        let tasts = [];
        tasts.push(tast);
        localStorage.setItem("tasts",JSON.stringify(tasts));
    }
    else{
        let tasts = JSON.parse(localStorage.getItem("tasts"));
        tasts.push(tast);
        localStorage.setItem("tasts",JSON.stringify(tasts));
    }

    e.preventDefault();
    
    getTasks();
    document.getElementById("formtask").reset();
    
}

function getTasks(){
    let tasts = JSON.parse(localStorage.getItem("tasts"));
    let tasksView = document.getElementById("tasts");


    tasksView.innerHTML= " ";

    for(let i=0; i < tasts.length; i++){
        let titulo = tasts[i].titulo;
        let descrip = tasts[i].descrip;
 
        tasksView.innerHTML +=  `<div class="card mb-4">
            <div class="card-body">
                <p> ${titulo} - ${descrip} </p>
                <a class="btn btn-danger" onclick="deleteTasks('${titulo}')">delete</a>
            </div>
    
    
        </div>`
    }
}

function deleteTasks(titulo){
    let tasts = JSON.parse(localStorage.getItem("tasts"));

    for (let i = 0; i<tasts.length;i++ ){
        if(tasts[i].titulo == titulo){
            tasts.splice(i,1);
        }
    }
    localStorage.setItem("tasts",JSON.stringify(tasts));
    getTasks();
}

getTasks();