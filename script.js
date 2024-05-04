
document.querySelectorAll("button").forEach(button => {
	button.addEventListener("mouseover", event => {
		button.style.transform = "scale(0.8)";
		button.style.borderRadius = "50%";
	});
	button.addEventListener("mouseout", event => {
		button.style.transform = "scale(1)";
		button.style.borderRadius = "0";
	});
});


