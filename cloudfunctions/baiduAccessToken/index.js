const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 * 这里这里！！！
 */
exports.main = async(event, context) => {
  let apiKey = '**',
    grantType = 'client_credentials',
    secretKey = '**',
    url = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=**&client_secret=**'`
  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": secretKey,
          "client_id": apiKey
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}
