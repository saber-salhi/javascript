for (var nombre = 1; nombre <= 100; nombre++){
    if (nombre % 3 === 0 ){
        console.log("fuzz"); 
    }else if(nombre % 5 === 0 ){
        console.log("buzz"); 
    }else  console.log(nombre);

}
// Solution utilisant une série de if/else
/*for (var nombre = 1; nombre <= 100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0))
        console.log("FizzBuzz");
    else if (nombre % 3 === 0)
        console.log("Fizz");
    else if (nombre % 5 === 0)
        console.log("Buzz");
    else
        console.log(nombre);
}*/