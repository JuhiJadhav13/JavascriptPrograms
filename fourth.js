function removeSpaces(str) {
    return str.split(' ').join('');
}


const stringWithSpaces = "My Name is Juhi Jadhav";
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces);