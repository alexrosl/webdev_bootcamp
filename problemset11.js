function printReverse(arr){
	for(var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var item0 = arr[0];
	for(var i = 1; i < arr.length; i++){
		if (arr[i] !== item0){
			return false;
		}
	}
	return true;
}

printReverse([1,2,3,4]);
console.log(isUniform([1,1,1,1,1,]));
console.log(isUniform([1,2,1,1,1,]));