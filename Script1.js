// JavaScript source code
var divAll,divInr,lstItem,delItem;


window.onclick = function(){
	divAll = document.querySelector(".list-emp");
	
	divAll.addEventListener("click",function(event){
		delItem = document.querySelectorAll(".list-item");
		console.log(event.target.className);
		if (event.target.className == "del-item")
		{
			event.target.parentElement.remove();  
		}
	})
	//divAll.forEach(function(ele,index,array){
//		var del = ele.querySelector(".del-item")
	//	console.log(del);
		//del.addEventListener("click",function(event){
			//del.parentElement.remove();
			//})
	//},false)
	

	var search = document.querySelector(".searchlst")
	search.addEventListener("keyup",function(event){
		var searchText = (event.target.value).toLowerCase();
		
		
		document.querySelectorAll(".list-item").forEach(function(txt,index,arr){
				var student = (txt.querySelector(".Name").innerText).toLowerCase();
				console.log(txt);
				if (student.indexOf(searchText) !== -1)
				{
					//console.log(student);
					txt.style.backgroundColor = "green";
				}
				else
				{
					txt.style.backgroundColor = "";

				}
			})
		
	})


}

	function addItem()
	{
	
		event.preventDefault();


		divInr = document.createElement("div");
		lstItem = document.createElement("span");
		delItem = document.createElement("span");

		divInr.className = "list-item";

		lstItem.className = "Name";
		delItem.className = "del-item";

		divInr.append(lstItem);
		divInr.append(delItem);
		divAll.append(divInr);

		lstItem.innerText = document.getElementById("add-name").value;
		delItem.innerText = "Remove";
	}


