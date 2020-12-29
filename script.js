let more = document.querySelector("#readmore");
let postbtn = document.querySelector(".post");
let name1 = document.querySelector("#name");
let yourblog = document.querySelector("#blogpost");
let hiddencontent = document.getElementsByClassName("hideen-intro");
let ul = document.querySelector("#text_inside")

more.addEventListener("click", function() {
    document.querySelector(".hideen-intro").classList.toggle("showcontent");
    more.classList.toggle("hideen-intro");
})

postbtn.addEventListener("click", function() {
	let li = document.createElement("li");
	let replyButton = document.createElement("button");
	li.appendChild(document.createTextNode("Post:" + name1.value + ":" + "    "  + yourblog.value));
	replyButton.appendChild(document.createTextNode("Reply It!!"));
	ul.appendChild(li);
	li.appendChild(replyButton);

	replyButton.addEventListener("click", function(){
		let input = document.createElement("input");
		let button2 = document.createElement("button");
		li.appendChild(input);
		button2.appendChild(document.createTextNode("Post"));
		ul.appendChild(button2);
		button2.addEventListener("click", function(){
			let replyPost = document.createTextNode(input.value);
			let li2 = document.createElement("li");
			li2.appendChild(document.createTextNode(input.value));
			li.appendChild(li2);
			input.style.display = "none";
			button2.style.display = "none";
		});
	});
});