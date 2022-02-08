const people = [
    {
        name: 'Hyacinth',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Lupine',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Chrysanthemum',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// 
console.log(people);