//xây dựng dữ liệu
const todolist = [
    {
        work:"quét nhà",
        status:false
    },
    {
    work:"chơi game",
    status:true
    },
];
if (!JSON.parse(localStorage.getItem("todolist"))) {
    localStorage.setItem("todolist",JSON.stringify(todolist))
}

//tạo hàm render

function renderTodo() {
    const dataLocal =JSON.parse(localStorage.getItem("todolist"));

    const listTodo = document.querySelector("#todo");

    listTodo.innerHTML = "";
    if (!dataLocal || dataLocal.length===0) {
        listTodo.innerHTML =`
        <img src="./image/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg" alt="">
        `
    }else{
         // dùng if else
    dataLocal.forEach(function (item,index) {
    
        listTodo.innerHTML += `
        <li>
        <div>
          <input onclick="updateTodo(${index})" type="checkbox" />
          <span  style="text-decoration:${item.status?"line-through":"none"}">${item.work}</span>
        </div>
        <div>
          <button onclick="editTodo(${index})"><i class="fa-solid fa-pen"></i></button>
          <button onclick="deleteTodo(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </li>
          ` ;
    });
   const finishTodo = document.querySelector("#finish");
   finishTodo.innerHTML = "";

   dataLocal.forEach(function (item,index) {
    finishTodo.innerHTML =`
    <p  id="finish">Công việc đã hoàn thành:  /${index + 1}</p>`
   })

    }
   
}
renderTodo()

// function finishTodo(index) {
//     const dataLocal = JSON.parse(localStorage.getItem("todolist"))
// let newData={
//     work:item,
//     status:true
// }
//      newData = dataLocal.filter(function(item,i){
//               return index = true; 
//     });
// localStorage.setItem("todolist", JSON.stringify(newData))

// renderTodo()
//     }


//thêm một hàm render công việc hoàn thành

function addList() {
    const text =document.getElementById("text");
    const myInput = text.value;

    let newData =
    {
        work:myInput,
        status:false
    }
    const mainData = JSON.parse(localStorage.getItem("todolist"));

    mainData.push(newData);
    localStorage.setItem("todolist",JSON.stringify(mainData));

    //làm mới ô input
    document.getElementById("text").value = "";
    renderTodo()
}

//delete

function deleteTodo(index) {
    const dataLocal = JSON.parse(localStorage.getItem("todolist"))

   let newData;
   let choice = confirm("bạn có xác nhận xoá hay không")  
   if (choice == true) {
    newData = dataLocal.filter(function (item,i) {
        return index != i;
    })
    
   }else{
    return index;
   }
    localStorage.setItem("todolist",JSON.stringify(newData))

    renderTodo()
}

//update công việc

function updateTodo(index) {
    
    const dataLocal = JSON.parse(localStorage.getItem("todolist"));

    const newData =dataLocal.map(function (item,i) {
        if (index == i) {
            return {
                work:item.work,
                status:!item.status,
            }
        }else{
            return item;
        }
    });
    localStorage.setItem("todolist",JSON.stringify(newData))
    renderTodo();
}

function editTodo(index) {
    const dataLocal =JSON.parse(localStorage.getItem("todolist"));

    const text = prompt("sửa lại work")

    const newData = dataLocal.map(function (item,i) {
        if (index == i) {
          return {
            work:text,
            status:item.status,
          };
        }else{
            return item;
        }
    });
    localStorage.setItem("todolist",JSON.stringify(newData))
    renderTodo()
}




 
