const express = require('express')
const app = express()
const data =[{
  id: 1,
  ten:"vong tay",
  soluong:"2",
  giaohangden:"Gia lai",
  ngay:"25/5/2020",
  tongtien:"3000",
}
]
app.get('/Home', function (req, res) {
  res.send(data)
})

app.get('/Home/:id', function (req, res) {
  const id = req.params.id;
  const kq = data.filter(item => {
    if(item.id == id){
      return true;
    }
  })
  res.send(kq)
})
app.listen(3000)