const smsGatway = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

const sms= (name, token, number) => {
    return new Promise((resolve, reject)=>{
        smsGatway.messages.create({
            body : 'Hi, \n' + name + 
                    '\n\n' + token + ' is your verification code.\nThe code is valid for 5 minutes.',
            from : process.env.SMS_FROM,
            to : number
        })
        .then( function(result){
            resolve('success')
        })
        .catch((err)=> {
            reject(err);
            console.log('SMS Error' + err);
        })
    })
}
module.exports = { sms }
