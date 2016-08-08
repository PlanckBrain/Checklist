// JavaScript File
const checkboxIndex = 0; // It goes checkbox, text, delete button.
var initialized = false;

function allList()
{
    var list = document.getElementById("List");
    
    for (let i =0; i<list.childNodes.length; i++)
    {
        list.childNodes[i].style.display="";
    }
}

function activeList()
{
    var list = document.getElementById("List");
    
    for (let i =0; i<list.childNodes.length; i++)
    {
        if(list.childNodes[i].childNodes[checkboxIndex].checked)
        {
            list.childNodes[i].style.display="none";
        } else
            list.childNodes[i].style.display="";
    }
}

function completeList()
{
    var list = document.getElementById("List");
    
    for (let i =0; i<list.childNodes.length; i++)
    {
        if(list.childNodes[i].childNodes[checkboxIndex].checked)
        {
            list.childNodes[i].style.display="";
        } else
            list.childNodes[i].style.display="none";
    }
}

function showClearButton()
{
    var clearButton = document.getElementById("clearCompleted");
    var list = document.getElementById("List");
    
    for(let i =0; i<list.childNodes.length; i++)
    {
        if(list.childNodes[i].childNodes[checkboxIndex].checked)
        {
            clearButton.className="shown";
            return;
        }
    }
    clearButton.className="hidden";
}

function clearChecked()
{
    var list = document.getElementById("List");
    
    for (let i = 0; i<list.childNodes.length; i++)
    {
        let tempPointer = list.childNodes[i];
        if(list.childNodes[i].childNodes[checkboxIndex].checked)
        {
            list.removeChild(tempPointer);
            --i; //So you don't move on to the next index if you delete an index.
        }
    }
    showClearButton(); //change for more efficiency
}

function checkboxChanged(liItem)
{
    if(liItem.childNodes[checkboxIndex].checked)
    {
        liItem.className="checkedItem";
    } else
    {
        liItem.className="uncheckedItem";
    }
    countItems();
    showClearButton();
}

function deleteButtonClicked(liItem)
{
    var list = document.getElementById("List");
    
    list.removeChild(liItem);
    countItems();
    showClearButton();
}

function countItems()
{
    let list = document.getElementById("List");
    let totalCounter = document.getElementById("totalCounter");
    let itemcounter = 0;
    
    for(let i =0; i<list.childNodes.length; i++)
    {
        if(!list.childNodes[i].childNodes[checkboxIndex].checked)
        {
            itemcounter++;
        }
    }
    
    if (itemcounter == 0)
        totalCounter.innerHTML = "No items.";
    else if (itemcounter == 1)
        totalCounter.innerHTML = "1 item.";
    else
        totalCounter.innerHTML = itemcounter + " items left.";
}

function run() 
{
    if (!initialized)
    {
        initialized = true;
        
        let clearButton = document.getElementById("clearCompleted");
        clearButton.addEventListener("click",function() {clearChecked()});
        
        let allButton = document.getElementById("allButton");
        allButton.addEventListener("click",function() {allList()});
        
        let activeButton = document.getElementById("activeButton");
        activeButton.addEventListener("click",function() {activeList()});
        
        let completedButton = document.getElementById("completedButton");
        completedButton.addEventListener("click",function() {completeList()});
    }
    
    var list = document.getElementById("List");
    
    if(event.keyCode == 13 || event.which == 13)
    {
        
        let inputBox = document.getElementById("Input_box");
        let newItem = document.createElement("li");
        let checkbox  = document.createElement("input");
        let deleteButton = document.createElement("button");
        
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "Dbutton";
        checkbox.setAttribute("type" , "checkbox");
        
        newItem.appendChild(checkbox);       //
        newItem.innerHTML += inputBox.value; //Puts input box into newItem after the checkbox
        inputBox.value = "";
        newItem.appendChild(deleteButton);
        
        newItem.className="uncheckedItem";
        list.appendChild(newItem);
        
        newItem.addEventListener("click",function(){checkboxChanged(newItem)});
        deleteButton.addEventListener("click",function(){list.removeChild(newItem)});
        
        countItems();
    }
}
