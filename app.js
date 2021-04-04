var list = document.getElementById("list") ;
function addTodo(){
    var todo_item = document.getElementById("todo_item")

//    creat li tag with text node
var li = document.createElement("li")
   
var liText = document.createTextNode(todo_item.value)
   
li.appendChild(liText)

// creat delete button
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
 delBtn.setAttribute("onclick","deleteItem(this)")
 delBtn.appendChild(delText)
//create editt button 
//  var editBtn = document.createElement("button")
//  var editText = document.createTextNode("EDIT")
//  var editText = document.parentNode(e)
//  editBtn.setAttribute("onclick","editItem(this)")
//  editBtn.appendChild(editText)

 li.appendChild(delBtn)
//  li.appendChild(editBtn)
 list.appendChild(li)            
todo_item.value = " "
console.log(li)
}




    function deleteItem(e){
        e.parentNode.remove()
        }
    
        function editItem(e){
     e.parentNode.firstChild.nodeValue
             var editValue = prompt("Enter edit value" , val)
             e.parentNode.firstChild.nodeValue = editValue
         }
    
         function deleteAll(){
            list.innerHTML = ""
        }