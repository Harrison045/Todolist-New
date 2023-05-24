const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//To make text shoe has a list when ADD is been clicked after typing tin the input box
function addTask() {
  //The if statement means is nothing is been typed but the ADD button is been clicked an alert box showed be displayed
  if (inputBox.value === "") {
    alert("Write something");
  } else {
    //The else statement means what has been typed in the input box should be displayed has a list under.
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //To make the input box empty after pressing add
  inputBox.value = "";
  saveData();
}
//To bring a check mark
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } // To remove you list
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//To save what you have done after you have refreshed the site
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
