// const OTPSModel = require('../../models/user/OTPSMdel')

const UserRestPassService = async (Request , DataModel)=>{

    let email = Request.body['email'];
    let OTPCode = Request.body['OTP'];
    let NewPass = Request.body['password'];
    let statusUpdate= 1;
    try{
        // database first process
        let OTPUseCount =await OTPSModel.aggregate([{
            $match:{email:email, otp:OTPCode, status:statusUpdate}},
            {$count:'total'}
        ])
        if(OTPUseCount.length>0){
            // database second process
            let passUpdate = await DataModel.updateOne({email:email},{password:NewPass})
            return{status:'success', data:passUpdate};
        }else {
            return {status:'fail', data:'invalid Request'};
        }
    }catch(error){
        return {status:'fail', data:error.toString()}
    }
}


module.exports= UserRestPassService;
