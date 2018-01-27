var todos = ["Buy new turtle"];
var input = prompt("what would you like to do")




while (input !== "quit"){
	if(input === "list"){
		listTodos();
	}
	else if (input === "new"){
		addTodo();
	}
	else if (input === "delete"){
		deleteTodo();
	}
	input = prompt("what would you like to do")
}
console.log("you quit the app")




listTodos(){
			console.log("******");
		todos.forEach(function(todo, index){
			console.log(index + " : " + todo);
		});
		console.log("******");
}

addTodo(){
	//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
}

deleteTodo(){
	var delTodo = prompt("what index to delete");
		todos.splice(delTodo,1);
}