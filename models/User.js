const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique : 1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{      //  관리자모드와 일반모드 구분을 위해
        type:Number,
        default:0
    },
    image:String,
    token: {    // 유효성 검사를 위해
        type:String
    },
    tokenExp: {     // 토큰 사용기간
        type:Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}