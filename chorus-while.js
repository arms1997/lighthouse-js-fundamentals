const io = require('console-read-write');

let chorus = "Let's Dance";

let repeat = 0;

async function main() {
	io.write('Please insert the chrous')
	chorus = await io.read();
	io.write('How many times should i repeat')
	repeat = await io.read();

	//while(repeat <= 9){
	//	io.write(chorus)
	//	repeat ++
	//}

	for(let i = 0; i<= repeat; i++){
		io.write(chorus)
	}
	
}

main();

