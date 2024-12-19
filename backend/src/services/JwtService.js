const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config()

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        payload
        //access_token là key bí mật, expiresIn là thời gian hết hạn
    }, process.env.ACCESS_TOKEN, { expiresIn: '5s' })

    return access_token
}

const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        payload
        //access_token là key bí mật, expiresIn là thời gian hết hạn
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' })

    return refresh_token
}

const refreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if(err){
                    console.log('err', err)
                    resolve({
                        status: 'ERROR',
                        message: 'The authentication'
                    })
                }
                const { payload } = user
                const access_token = await genneralAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    access_token
                })
            })
        }catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    refreshTokenJwtService
}