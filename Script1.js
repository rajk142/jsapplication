// JavaScript source code

function addItem(){
var divAll,divInr,lstItem,delItem;
divAll = document.querySelectorAll(".list-emp");
divInr = document.createElement("div");
lstItem = document.createElement("span");
delItem = document.createElement("span");

divInr.className = "list-item";

lstItem.className = "Name";
delItem.className = "del-item";

divInr.append(lstItem);
divInr.append(delItem);
divAll[0].append(divInr);

lstItem.innerText = document.getElementById("add-name").value;
delItem.innerText = "Remove";
}

