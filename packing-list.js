const packingList = ['bowls', 'plates', 'pots', 'pans', 'eating utensils', 'glasses', 'cups', 'cooking utensils'];

console.log("Kitchen stuff to pack");

for(let i = 0; i < packingList.length; i++){
	console.log(packingList[i]);
}

packingList.forEach(function(item){
	console.log(item);
})

let newPackingList = packingList.map(function(item){
	item += '!'
	return item;
})

console.log(newPackingList)
