// Player details
// This ensures that the JavaScript code is executed after the HTML document has finished
// loading, so the elements with the "name" and "points" class names are available in the DOM.

window.addEventListener("DOMContentLoaded", function () {
	// This block of code retrieves the "name" and "points" values from sessionStorage
	// that were stored earlier during the quiz.
	let user_name = sessionStorage.getItem("name");
	let user_points = sessionStorage.getItem("points");

	// This code updates the "name" and "points" spans in the HTML with the retrieved values.
	document.querySelector("span.name").innerHTML = user_name;
	document.querySelector("span.points").innerHTML = user_points + "/10";
});