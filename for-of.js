const io = require('console-read-write');

async function main(){

	let names = [];

	for(let i = 0; i<5; i++){
		io.write('Please insert one name');
		const name = await io.read();
		names.push(name);
	}

	for(let name of names){
		console.log(`${name} is a lil baddie`);
	}
}

main();	

