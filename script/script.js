// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  per i multipli di 3 stampi “Fizz” al posto del numero
//  per i multipli di 5 stampi “Buzz” al posto del numero
//  per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.



for (let i = 0; i <= 100; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0)  {
            console.log('Fizz');
        }
}

for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 5 == 0)  {
            console.log('Buzz');
        }
}

for (let i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 15 == 0)  {
            console.log('FizzBuzz');
        }
}