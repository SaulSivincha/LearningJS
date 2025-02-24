 function factorial(n){
    let result = 1;
    for (let i = n; i > 1; i--){
       result *= i;
    }    
    return result;
 }

function main() {
 let n = 5;
 console.log(factorial(n));
}

main();
