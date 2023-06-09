const UserVerifyOtpService = async (Request ,DataModel)=>{
    try{
        let email = Request.params.email;
        let OTPCode = Request.params.otp;
        let status=0;
        let statusUpdate=1;

        // database 1st process
        let OTPCount = await DataModel.aggregate([{
            $match:{email:email, otp:OTPCode, status:status}},
            {$count:"total"}
        ])
        if(OTPCount.length>0){
            //database second process
            let OTPUpdate = await DataModel.updateOne(
                {email:email, otp:OTPCode, status:status},
                {email:email, otp:OTPCode, status:statusUpdate}
            )
            return{status:'success', data:OTPUpdate};
        }else {
            return {status:'fail', data: "invalid OTP code"}
        }
    }catch(error){
        return {status:'success',data:error.toString()};
    }
}

module.exports= UserVerifyOtpService;