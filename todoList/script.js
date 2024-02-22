function addTask() {
  const writeTask = document.getElementById("write-task").value;
  const allTask = document.getElementById("all-task");

  if (writeTask !== "") {
    const singleTask = document.createElement("li");
    singleTask.innerHTML = `
      <div class=" mt-4 divide-y divide-slate-200">
      <span class="border-2 p-3 mb-2 rounded inline-block w-60 ">
      ${writeTask}
      </span>
      
      <button onclick = "removeTask(this.parentNode)" 
      class="ml-3 rounded-xl p-3 text-white bg-rose-500 hover:bg-rose-600 ">Remove</button>
      </div>
      `;

    allTask.appendChild(singleTask);

    document.getElementById("write-task").value = "";
  }
}

function removeTask(remove) {
  // const remove = document.getElementsByClassName("remove-btn");
  remove.remove();
}
