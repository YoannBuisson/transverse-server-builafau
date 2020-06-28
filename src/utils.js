const jwt = require('jsonwebtoken')
const APP_SECRET = 'Im-late-for-tomorrow'

function getUserId(token) {
    const {userId} = jwt.verify(token, APP_SECRET)
    if(token === '') {
        return userId;
    }

    return null;
}

module.exports = {
    APP_SECRET,
    getUserId,
}