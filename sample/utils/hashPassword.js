const bcrypt= require('bcryptjs');

const hashPassword=(password)=>{
    if (password.trim!='')
    {
        return bcrypt.hash(password,10);
    }
}

module.exports= hashPassword;