const flatTheArray = (arr) => {
    let flat = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            let sub = flatTheArray(item);
            flat = flat.concat(sub);
        }
        else {
            flat.push(item);
        }
    }
    return flat;
}

console.log('Problem 1')
console.log(flatTheArray([1, 2, 3, [4, 5]]));


const capitalizeAllLetters = (array) => {

    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }

    let words = capitalizeAllLetters(array.slice(0, -1));
    words.push(array.slice(array.length - 1)[0].toUpperCase());
    return words;
}

let words = ['tony', 'kim'];

console.log('Problem 2')
console.log(capitalizeAllLetters(words))

const factorial = (x) => {

    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}
console.log('Problem 3')
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(7))

const collectStrings = (obj) => {
    strings = [];
    for (const item in obj) {
        if (typeof obj[item] === 'string') {
            strings.push(obj[item]);
        }
        else if (typeof obj[item] === 'object') {
            strings = strings.concat(collectStrings(obj[item]));
        }
    }
    return strings;
}

const obj = {
    name: 'John Smith',
    age: 25,
    favoriteMovie: [
        {
            title: 'Hulk',
            genre: 'action',
            rating: 6
        }
    ]

}

console.log('Problem 4')
console.log(collectStrings(obj));

const data = [
    {
        name: 'John Smith',
        age: new Map([['age', 88]]),
        favoriteMovie: [
            {
                title: 'Hulk',
                genre: 'action',
                rating: 6
            }
        ]
    },
    {
        name: 'Tony Kim',
        age: new Map([['age', 3]]),
        favoriteMovie: [
            {
                title: 'Top Gun',
                genre: 'action',
                rating: 10
            }
        ]
    },
    {
        name: 'John Smith',
        age: new Map([['age', 35]]),
        favoriteMovie: [
            {
                title: 'Saw',
                genre: 'horror',
                rating: 8
            }
        ]
    }
]

const sortByAge = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
        let swaps = false;
        for (let j = 0; j < i; j++) {

            if (data[j].age.get('age') > data[j + 1].age.get('age')) {
                const temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                swaps = true;
            }
        }
        if (!swaps) break;

    }


    return data;
}

console.log('Problem 5')
console.log(sortByAge(data))

const sortByRating = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
        let swaps = false;
        for (let j = 0; j < i; j++) {

            if (data[j].favoriteMovie[0].rating > data[j + 1].favoriteMovie[0].rating) {
                const temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                swaps = true;
            }
        }
        if (!swaps) break;

    }

    return data;
}

console.log(sortByRating(data))