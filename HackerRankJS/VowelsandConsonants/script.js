
function vowelsAndConsonants(s) {
    var consonants = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' 
            || s.charAt(i) === 'u') {
                console.log(s.charAt(i));
        } else {
            consonants += s.charAt(i);         
        } 
    }
    
    console.log("Vocales impresas");
    for (let i = 0; i < consonants.length; i++) {
        console.log(consonants.charAt(i));
    }
    console.log("Consonantes impresas");
}

function main() {
 const s = "Hola mundo, ayudenme, me quiero suicidar, hay un monton de cosas por aprender";
	vowelsAndConsonants(s);
}

main();
