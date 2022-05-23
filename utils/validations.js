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
    return string.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
}

const toBoolean = (string) => {
    return string === 'true' ? true : false;
}

module.exports = {
    validateName,
    validateNumber,
    validateEmail,
    validateString,
    capitalize,
    toBoolean
}