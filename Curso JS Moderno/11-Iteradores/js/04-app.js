
let i = 0;

while(i < 100) {
    if( i % 15 == 0){
        console.log(`Fizz Buzz ${i}`);
    } else if(i % 3 == 0) {
        console.log(`Fizz ${i}`);
    }else if(i % 5 == 0) {
        console.log(`Buzz ${i}`);
    }
    i++;
};