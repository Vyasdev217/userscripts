// ==UserScript==
// @name         The Hindu anti anti-ad-blocker
// @namespace    https://github.com/Vyasdev217
// @version      0.1
// @description  Removes css of anti anti-ad-blocker modal in The Hindu website
// @author       Vyasdev
// @match        https://www.thehindu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thehindu.com
// @grant        none
// ==/UserScript==

function anti_anti_ad_blocker(){
    for(var i=0;i<document.getElementsByTagName("style").length;i++){
        if(document.getElementsByTagName("style")[i].innerText.includes("modal")){
            document.getElementsByTagName("style")[i].innerText="";
        }
    }
}

window.addEventListener('locationchange', function () {
    anti_anti_ad_blocker();
});

anti_anti_ad_blocker();
