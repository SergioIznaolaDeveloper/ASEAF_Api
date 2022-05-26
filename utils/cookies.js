const createCookie = (res, name, value) => {
    try {
        res.cookie(name, value, {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
    });
    } catch (error) {
        console.log(error);
    }
}

const deleteCookie = (res, name) => {
    res.clearCookie(name, {
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
}

const removeCookies = (res, names) => {
    names.forEach(name => deleteCookie(res, name));
}

module.exports = {
    createCookie,
    deleteCookie,
    removeCookies
}