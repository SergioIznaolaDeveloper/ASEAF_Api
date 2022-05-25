const validateName = (name) => {
    const regex = /^[A-Za-z\ \-]{2,40}$/g;
    return regex.test(name) ? true : false
}

const validateNumber = (number) => {
    const regex = /^[\d+]$/g;
    return regex.test(number)
}

const validateEmail = (email) => {
    const regex = /^[\w\.\-\_]+@[\w\.\-\_]+\.[\w]{1,4}$/gi;
    return regex.test(email)
}

const validateString = (string) => {
    const regex = /^[A-Za-z\ ]$/g;
    return regex.test(string)
}

const capitalize = (string) => {
    let capitalized = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0 || string[i - 1] === ' ') {
            capitalized += string[i].toUpperCase();
        } else {
            capitalized += string[i].toLowerCase();
        }
    }
    return string ? capitalized : string
}

const toBoolean = (string) => {
    return string === 'true' ? true : false;
}

const toNumber = (string) => {
    return string ? Number(string) : null
}

const parseSalary = (salary) => {
    const dictionary = {
        "<18k": 1,
        "18k<24k": 2,
        "24k<60k": 3,
        "60k<": 4
    }
    return salary ? dictionary[salary] : null
}

const toDate = (string) => {
    return string ? new Date(string) : null
}

module.exports = {
    validateName,
    validateNumber,
    validateEmail,
    validateString,
    capitalize,
    toBoolean,
    toNumber,
    parseSalary,
    toDate
}