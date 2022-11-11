express = require ('express');
const http = require('http');
var  config = require('./dbconfig');
var Connection = require('tedious').Connection;
var bodyParser = require('body-parser');
var sql = require('mssql');
var TYPES = require('tedious').TYPES;
var postAuth = require('./controllers/MainController');


var request = require('request');
var cors = require('cors');
var  app = express();
var  router = express.Router();
// let accessToken;
// urlToken = 'https://uat.emlaakfinancials.com:2053/api/Account/GetAccessToken';
app.use('/api', router);

router.use((req, res, next) => {
  console.log('Method Executed !');
  next();
});
// 
// app.use(bodyParser.urlencoded({ extended:  true }));
// app.use(bodyParser.json());


router.route('/auth').get((req, res,body, postRequest) => {
  if (err) {
      return console.log(err);
  } else {
    postToken(postRequest,body);
    console.log("In post body ")
    }
});
//
//
// const postRequest = {
//     url: urlToken,
//     json: true,
//     body: {
//         userName: 'info@akdinvestment.com',
//         password: 'Arittek1'
//     }
// };
//
//
router.route('/auth').post((req, res,body, postRequest) => {
  if (err) {
      return console.log(err);
  } else {
    postAuth.postToken(postRequest,body);
    console.log("inside auth")
}
});
//
// const postRequest = {
//     url: urlToken,
//     json: true,
//     body: {
//         userName: 'info@akdinvestment.com',
//         password: 'Arittek1'
//     }
// };

//
// router.route('/auth').post((request,response)=>{
//     postAuth.postToken()
//     console.log("Token inserted through auth");
//   )
// });
//




// app.get('/api/:version', function(req, res) {
//   res.send(req.params.version);
// });
//
const port = process.env.PORT || 4000;
app.listen(port);
console.log("Port listening on "+ port);
