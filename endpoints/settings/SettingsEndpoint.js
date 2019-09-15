"use strict";

var uuid = require('uuid');

function SettingsEndpoint() {

  var _this=this;

  this.createJsonResponse = function(settingsToFrontend, req, res) {

    var response = {
      "message": "success",
      "content": settingsToFrontend
    };

    var requestIdHeaderName = getHeaderName();

    if(!req.headers[requestIdHeaderName]){
      res.set(requestIdHeaderName, uuid.v4());
    }
    res.json(response);
  }

  function getHeaderName(){
    if(properties.endpoints.settings.httpResponseHeaderNamePrefix){
      return "X%s-REQUEST-ID".replace("%s","-"+properties.endpoints.settings.httpResponseHeaderNamePrefix );
    }else{
      return "X%s-REQUEST-ID".replace("%s","");
    }
  }

}

inheritsFrom(SettingsEndpoint, NodejsInjectableModule);
module.exports = SettingsEndpoint;
