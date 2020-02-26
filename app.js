// Selecting Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("show-date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes Names

// Variables
let LIST = []
 id = 0
 imageData="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSItMzEgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIj48Zz48cGF0aCBkPSJtMTUwIDQyMWM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1di0xODBjMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNXMtMTUgNi43MTQ4NDQtMTUgMTV2MTgwYzAgOC4yODUxNTYgNi43MTQ4NDQgMTUgMTUgMTV6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTIyNSA0MjFjOC4yODUxNTYgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTgwYzAtOC4yODUxNTYtNi43MTQ4NDQtMTUtMTUtMTVzLTE1IDYuNzE0ODQ0LTE1IDE1djE4MGMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0zMDAgNDIxYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTV2LTE4MGMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1cy0xNSA2LjcxNDg0NC0xNSAxNXYxODBjMCA4LjI4NTE1NiA2LjcxNDg0NCAxNSAxNSAxNXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtNDM1IDEyMGgtMjAuNzMwNDY5bC0yNS44NTU0NjktNTEuNzA3MDMxYy0yLjUzOTA2Mi01LjA4MjAzMS03LjczMDQ2OC04LjI5Mjk2OS0xMy40MTQwNjItOC4yOTI5NjloLTc1di00NWMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1aC0xMjBjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTV2NDVoLTc1Yy01LjY4MzU5NCAwLTEwLjg3NSAzLjIxMDkzOC0xMy40MTc5NjkgOC4yOTI5NjlsLTI1Ljg1MTU2MiA1MS43MDcwMzFoLTIwLjczMDQ2OWMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWgzMS4xOTE0MDZsMjguODU5Mzc1IDM0OC4yMzgyODFjLjY0NDUzMSA3Ljc3NzM0NCA3LjE0NDUzMSAxMy43NjE3MTkgMTQuOTQ5MjE5IDEzLjc2MTcxOWgyNzBjNy44MDQ2ODggMCAxNC4zMDQ2ODgtNS45ODQzNzUgMTQuOTQ5MjE5LTEzLjc2MTcxOWwyOC44NTkzNzUtMzQ4LjIzODI4MWgxLjEwMTU2MmMuMDM1MTU2IDAgLjA2NjQwNi4wMDM5MDYuMTAxNTYzLjAwMzkwNi4wMTk1MzEgMCAuMDM5MDYyLS4wMDM5MDYuMDU4NTkzLS4wMDM5MDZoMjkuOTI5Njg4YzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1LTE1em0tMjU1LTkwaDkwdjMwaC05MHptLTk1LjczMDQ2OSA2MGgyODEuNDYwOTM4bDE1IDMwaC0zMTEuNDYwOTM4em0yNjEuOTIxODc1IDM5MmgtMjQyLjM4MjgxMmwtMjcuNTE1NjI1LTMzMmgyOTcuNDEwMTU2em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+";
// Show Today's Date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do function
function addToDo(toDo, id, done, trash) {
    if(trash) {return; }
    // const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `
    <li class="item">
        <p class="text ${LINE}">${toDo}</p>
    </li>    
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}
// addToDo("drink Coffe");

// Add an item to the list when user hits enter
document.addEventListener("keyup", function(even) {
    if(event.keyCode == 13) {
        const toDo = input.value;

        // if the input isn't empty
        if(toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo? 
                id: id, 
                done: false,
                trash: false
            });
            id++;
        }
        input.value = "";
    }
});

// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;

    // target the items created dynamitcally
    list.addEventListener("click", function(event) {
        const element = event.target; //return the clicked element inside list
        const elementJob = element.attributes.job.value; //compleete or delete
        if(elementJob == "complete") {
            completeToDo(element);
        }else if(elementJob == "delete") {
            removeToDo(element);
        }
    });
}
// clear Notes

function clearNotes(){
    var notesArea = document.getElementById('list');
    notesArea.innerHTML = "";
}