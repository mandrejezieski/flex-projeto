function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [ 40, 5, 1];
let aux;

for (var i = 0; i < arr[i]; i++) {
	if(arr[1]>arr[2]){
		aux = arr[2];
		arr[2] = arr[1];
		arr[1] = aux;
		};
	if( arr[0]>arr[1]){
		aux = arr[1];
		arr[1] = arr[0];
		arr[0] = aux;
		};
}

	
  console.log(arr);
//console.log(uniqueElements(arr));