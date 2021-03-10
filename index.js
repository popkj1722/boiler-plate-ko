const express = require('express')  //express모듈 가져오기
const app = express()
const port = 3000
const mongoose = require('mongoose')
const {User} = require("./models/User")
const bodyParser = require('body-parser')   // 이거를 써야 req.body를 통해 가져오는게 가능?
const config = require('./config/key');

// application/x-www-form-urlencoded 를 분석해서 거져올 수 있게
app.use(bodyParser.urlencoded({extended:true}));
//allication/json 타입으로 된거를 분석해서 가져올 수 있게
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,
    {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false}
).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!asdf')
})



app.post('/register',(req,res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.



  const user = new User(req.body)

  user.save((err) =>{
    if(err) return res.json({succes:false,err})
    return res.status(200).json({
      success:true
    })
  })

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})