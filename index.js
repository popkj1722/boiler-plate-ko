const express = require('express')  //express모듈 가져오기
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://JaeHyean:190859@boilerplate.scgcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false}
).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})