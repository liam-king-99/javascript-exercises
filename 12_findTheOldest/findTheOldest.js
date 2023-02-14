const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest)
        const currentPersonAge = getAge(currentPerson)
        return oldestAge > currentPersonAge ? oldest : currentPerson
    })
};

const getAge = (person) => {
    if (!person.yearOfDeath)
    {
        return (new Date().getFullYear()) - person.yearOfBirth
    }
    return person.yearOfDeath - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
