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
    return capitalized
}

const toBoolean = (string) => {
    return string === 'true' ? true : false;
}

capitalize('dANIEL..carra-s-c_o cAS!adO')

module.exports = {
    validateName,
    validateNumber,
    validateEmail,
    validateString,
    capitalize,
    toBoolean
}