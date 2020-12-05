
/* 1.
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string! */

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName = 'unknown', lastName = 'unknown', job = 'unknown'} = user;
console.log(firstName, lastName, job);

/* 2.
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job property-jeit!
Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string! */

const { firstName: f = 'unknown', lastName: l = 'unknown', job: j = 'unknown'} = user;
console.log(f, l, j);

/* 3.
Ments el külön, tetszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!
    const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny']; */

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [ , b, , d, , f2] = names;
console.log(b,d,f2);


// A kvízből:

const pet = {
    name: 'Szetti',
    species: 'dog',
    age: 3
}

const {name: n, species: s, kor: k = 10} = pet

console.log(n, s, k);
console.log(pet);

const pet2 = {
    name: 'Szetti',
    species: 'dog',
    age: 3
}

let { name } = pet2
name = 'Bogyó'
console.log(pet2);
console.log(name);
