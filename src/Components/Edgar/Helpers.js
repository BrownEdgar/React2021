export function getTotal(arr) {
	let r = arr.map((elem, index) => elem.price );
	return `$${r.reduce((a, b) => a + b)}`
}

export function dollar(gin,currency){
	return `${currency}${gin.toFixed(2)}`
}

let s = "Vazgen Sargsyan"
function name(s) {

	return s.charAt(0)  + s.charAt(s.lastIndexOF(' ') +1)
}