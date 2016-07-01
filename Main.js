// JavaScript File
let listItems;

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
    var list = document.getElementById("List");
    let totalCounter = document.getElementById("totalCounter");
    let temp = 0;
    
    for(let i =1; i<list.childNodes.length; i++)
    {
        if(!list.childNodes[i].childNodes[0].checked)
        {
            temp++;
        }
    }
        
    totalCounter.innerHTML = temp + " items left.";
}

function run() 
{
    //var entireList = document.getElementById("Entire_toDo_list");
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


/*function checkedLlists() //MABEY?
{
        if(listItems[0].childNodes[0].checked)
        {
            alert("check");
        }
}*/