
const OTPSModel = require('../../models/Users/OTPSModel')
const SendEmailUtility = require('../../utility/SendEmailUtility')

const UserVerifyEmailService = async (Request ,DataModel)=>{
    try{
        // Email Account Query-->>
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000)
        //Database first Process
        let UserCount = (await DataModel.aggregate([{$match :{email:email}},{$count:'total'}]));
        if(UserCount.length>0){
            //Database second process for create otp code
            await OTPSModel.create({email:email,otp:OTPCode});

            // send Email for user
            let SendEmail = await  SendEmailUtility(email, `your pin code is  ${OTPCode} that is inventory pin verification`)

            return{status:'success', data:SendEmail};
        }else {
            return {status:'fail' , data:"No User found"}
        }
    }catch (error) {
        return {status:'fail', data:error.toString()};

    }
}

module.exports = UserVerifyEmailService;