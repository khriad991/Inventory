const UserVerifyOtpService = async (Request ,DataModel)=>{
    try{
        let email = Request.params.email;
        let OTPcode = Request.params.otp;
        let status=0;
        let statusUpdate=1;

        // database 1st process
        let OTPcount = await DataModel.aggregate([{
            $match:{email:email, otp:OTPcode, status:status}},
            {$count:'total'}
        ])
        if(OTPcount.length>0){
            //database second process
            let OTPUpdate = await DataModel.updateOne(
                {email:email, otp:OTPcode, status:status},
                {email:email, otp:OTPcode, status:statusUpdate}
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