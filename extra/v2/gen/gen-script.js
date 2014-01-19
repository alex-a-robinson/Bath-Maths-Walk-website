function replaceValue(to, from) {
	console.log(document.getElementById(from).value)
	document.getElementById(to).innerHTML = document.getElementById(from).value

}