document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		handleToDo(e.target.addTodo.value);
		form.reset();
	});
});
function handleToDo(todo) {
	let p = document.createElement("p");
	let btn = document.createElement("button");
	btn.addEventListener("click", deletetodo);
	btn.textContent = " x ";
	p.textContent = `${todo}  `;
	p.appendChild(btn);

	document.body.append(p);
}

function deletetodo(e) {
	e.target.parentNode.remove();
}
