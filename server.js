const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')

})

app.get('/:time', function(req, res) {
var dateform = req.params.time;
 if(Number(dateform)==Number(dateform))
{
			// Number(string) is Nan. Nan==Nan is false.
var myDate= new Date(Number(dateform)*1000);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'
              ,'October','November', 'December' ];
//res.send((myDate.getMonth()).toString() );
var natural =  months[myDate.getMonth()]+ " "+ (Number(myDate.getDate())+1) + ", "+ myDate.getFullYear() ;
var print={ "unix" : dateform, "natural": natural };
res.send(print);
}
else{
  var birthday= new Date(req.params.time+ 'GMT');
  var timer= (birthday.getTime()/1000.0);
  var print= {};
  if(timer== timer){  // when req.params.time is a random string timer will be Nan. 
   print= {"unix": timer , "natural": req.params.time};
  }
  else{
     print= {"unix": null , "natural": null};
  }
  res.send(print);
  
}							

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
