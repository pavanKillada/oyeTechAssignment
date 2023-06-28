const request = require("request");

function getGoogleHomePage(finalCallBack) {
  request("http://www.google.com", function (error, response, body) {
    if (error) {
      console.error("error:", error);
      finalCallBack(error);
    } else {
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      finalCallBack(null, body);
    }
  });
}

function finalCallBack() {
  return new Promise((resolve, reject) => {
    getGoogleHomePage((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

finalCallBack()
  .then((result) => {
    console.log("RESULT==>", result);
  })
  .catch((error) => {
    console.log("ERROR==>", error);
  });
