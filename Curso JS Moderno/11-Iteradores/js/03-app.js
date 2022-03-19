//FIZZ BUZZ


//multiplo de 3 fizz

//multiplo de 5 buzz


//multiplo de 3 y 5 fizz buzz

for(let i = 0; i < 100; i++) {
    if( i % 15 == 0){
        console.log(`Fizz Buzz ${i}`);
    } else if(i % 3 == 0) {
        console.log(`Fizz ${i}`);
    }else if(i % 5 == 0) {
        console.log(`Buzz ${i}`);
    }
}