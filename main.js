console.log('hello node js');

//variabile ambiente pin
const pin = process.env.PIN;
console.log(`PIN: ${pin}`);

// Recupera l'argomento passato allo script
const args = process.argv;
if (args.length > 2){
    const utente = args[2];
    console.log(`User role: ${utente}`);    

    if(utente === 'admin' && pin === '2715'){
        console.log('Welcome Admin');
        
    } else {
        console.log("Access restricted");
    }
} else {
    console.log("no data provided");
}
