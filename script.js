function fibonacci(num) {
// your code here
	let arr = [0,1]
	for(let i = 2 ; i <num;i++){
		arr.push(arr[i-2]+arr[i-1]);
	}
	return(arr[num-1])
}

module.exports = fibonacci;
