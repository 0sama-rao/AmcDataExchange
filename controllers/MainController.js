var  config = require('../dbconfig');
const  sql = require('mssql');
var request = require('request');
var router = express.Router();

let accessToken;
urlToken = 'https://uat.emlaakfinancials.com:2053/api/Account/GetAccessToken';
//

const postRequest = {
    url: urlToken,
    json: true,
    body: {
        userName: 'info@akdinvestment.com',
        password: 'Arittek1'
    }
};


// router.route('/auth').get((req, res,body, postRequest) => {
//   if (err) {
//       return console.log(err);
//   } else {
//     postToken(postRequest,body);
//     console.log("In post body ")
//     }
// });

request.post(postRequest, (err, res, body) => {
    if (err) {
        return console.log(err);
    } else {
      postToken(postRequest,body);
      //accessToken = body.data['accessToken'];
      console.log(accessToken);
      console.log(`Status: ${res.statusCode}`);

//      accessToken = body.data['accessToken'];
            // console.log(accessToken);
        }});

async  function  postToken(postRequest,body) {
      try {
      console.log("InPostToken Body");
      accessToken = body.data['accessToken'];
      console.log(accessToken);
      let  pool = await  sql.connect(config);
      let  token = await  pool.request()
      .input('input_parameter', sql.VarChar, accessToken)
      .query("INSERT INTO DistributorAuthenticationToken (AccessToken) VALUES (@input_parameter)");

      console.log("token inserted");
        //return report.recordsets;
      }
      catch (error) {
      console.log("Error found !! "+error, 404);
      }
      }

module.exports = {
  postToken:postToken
}
