$(document).ready(function() {
	for (var i=0;i<256;i++) {
		$("#container").append("<div></div>");
	};
	$("#container > div").addClass("small");
	$("#container").on("mouseenter", "div", function() {
		$(this).addClass("newColor");
	});
	$("#container").on("click", "div", function() {
		$(this).addClass("newColor2");
	});
})

function clear() {
	$("#container").find("div").removeClass("newColor", "newColor2");
}

function choose() {
	prompt
