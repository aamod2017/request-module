var request = require("request");
var params = {
"id":"aamod.tiwari@raweng.com",
"token":"asdasD",
"geo" :"asdasd"
};
request({
    method : "POST",
    json : true,
    body : params,
    url : "http://localhost:3000/api/users",
    headers : {
        "Content-Type" : "application/json"
    }
},function(err,response,body){
   console.log("err",err,"response",response.statusCode,"body",body)
    if(err){
	console.log(err)
    }
    else{

           console.log(body)
       	   console.log(response.statusCode)
    }
  })
//"id=aamod.tiwari@raweng.com,token=asdasd,geo=asdasd",
