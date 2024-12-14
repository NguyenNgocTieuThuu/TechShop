const jwt = require('jsonwebtoken')

const genneralAccessToken = async (payload) => {
    console.log('payload', payload)
    const access_token = jwt.sign({
        payload
        //access_token là key bí mật, expiresIn là thời gian hết hạn
    }, 'access_token', { expiresIn: '1h' })

    return access_token
}

const genneralRefreshToken = async (payload) => {
    const access_token = jwt.sign({
        payload
        //access_token là key bí mật, expiresIn là thời gian hết hạn
    }, 'refresh_token', { expiresIn: '365d' })

    return access_token
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}