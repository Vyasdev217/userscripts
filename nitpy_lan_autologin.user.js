// ==UserScript==
// @name         nitpy_lan_autologin
// @namespace    https://github.com/Vyasdev217
// @version      1.0
// @description  Auto login script for nitpy campus wifi
// @author       Lone wolf
// @match        https://scg.ruckuswireless.com:9998/SubscriberPortal/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ruckuswireless.com
// @downloadURL	 https://github.com/Vyasdev217/userscripts/raw/main/nitpy_lan_autologin.user.js
// @updateURL    https://github.com/Vyasdev217/userscripts/raw/main/nitpy_lan_autologin.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let nid="";// username
    let npw="";// password
    window.addEventListener('load', function () {
      if(nid!=""&&npw!=""){
          document.getElementById("toscheckbox").click();
          document.getElementById("btnNext").click();
          document.getElementById("UE-Username").value=nid;
          document.getElementById("UE-Password").value=npw;
          document.getElementById("signInButton").click();
      }
      else{
          alert("Please setup the script by including your username and password in the autologin script(variables nid and npw)");
      }
    })
})();
