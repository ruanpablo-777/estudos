// Seleção de elementos
const todoform = document.getElementById("todo-form")
const todoinput = document.getElementById("todo-input")
const todolist = document.getElementById("todo-list")
const editform = document.getElementById("edit-form")
const editinput = document.getElementById("edit-input")
const canceledibtn = document.getElementById("cancel-edit-btn")

let oldinputvalue
// Funções
const savetodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todotitle = document.createElement("h3")
    todotitle.innerText = text
    todo.appendChild(todotitle)

    const donebtn = document.createElement("button")
    donebtn.classList.add("finish-todo")
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(donebtn)

    const editbtn = document.createElement("button")
    editbtn.classList.add("edit-todo")
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editbtn)
    
    const deletebtn = document.createElement("button")
    deletebtn.classList.add("remove-todo")
    deletebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deletebtn)
    
    todolist.appendChild(todo)

    todoinput.value = ""
    todoinput.focus()

}

const togglefoms = () => {
    editform.classList.toggle("hide")
    todoform.classList.toggle("hide")
    todolist.classList.toggle("hide")
}

const updatetodo = (text) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todotitle = todo.querySelector("h3")
        if(todotitle.innerText === oldinputvalue){
            todotitle.innerText = text
        }
    })
}

// Eventos
todoform.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputvalue = todoinput.value
   
    if(inputvalue){
        console.log(inputvalue)
        savetodo(inputvalue)
        //salvar todo
    }
})


document.addEventListener("click", (e) => {
    const targetEl = e.target //pega tudo o que eu clicar
    //console.log(targetEl)
    const parentEl = targetEl.closest("div")
    let todotitle

    if(parentEl && parentEl.querySelector("h3")){
        todotitle = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finish-todo")){
       parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-todo"))
        parentEl.remove()
    if(targetEl.classList.contains("edit-todo")){
        togglefoms()
        editinput.value = todotitle
        oldinputvalue = todotitle
    }

})

canceledibtn.addEventListener("click", (e) => {
    e.preventDefault()

    togglefoms()
})


editform.addEventListener("submit", (e) => {
    e.preventDefault()
    const editinputvalue = editinput.value

    if(editinputvalue){
        updatetodo(editinputvalue)
    }
    togglefoms()
})