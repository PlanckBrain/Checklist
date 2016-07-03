// JavaScript File

var initialized = false;

function clearChecked()
{
    var list = document.getElementById("List");
    
    for (let i = 1; i<list.childNodes.length; i++)
    {
        let tempPointer = list.childNodes[i];
        if(list.childNodes[i].childNodes[0].checked)
        {
            list.removeChild(tempPointer);
            --i; //So you don't move on to the next index if you delete an index.
        }
    }
}

function checkboxChanged(liItem)
{
    if(liItem.childNodes[0].checked)
    {
        liItem.className="checkedItem";
    } else
    {
        liItem.className="uncheckedItem";
    }
    countItems();
}

function deleteButtonClicked(liItem)
{
    var list = document.getElementById("List");
    
    list.removeChild(liItem);
    countItems();
}

function countItems()
{
    let list = document.getElementById("List");
    let totalCounter = document.getElementById("totalCounter");
    let itemcounter = 0;
    
    for(let i =1; i<list.childNodes.length; i++)
    {
        if(!list.childNodes[i].childNodes[0].checked)
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
        clearButton.addEventListener("click",function(){clearChecked()});
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
