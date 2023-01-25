// ==UserScript==
// @name         YouTube ad skipper and speed changer
// @name:ja      youtube自動広告スキッパー
// @namespace    https://github.com/Vyasdev217
// @version      1.0
// @description  Simple ad skipper for youtube (This is not ad blocker)
// @description:ja youtubeの広告を自動スキップ
// @author       Vyasdev
// @match        https://www.youtube.com/*
// @grant        none
// @license      MIT
// @downloadURL  https://github.com/Vyasdev217/userscripts/raw/main/simple_yt_ad_skipper_and_speed_changer.user.js
// @updateURL	 https://github.com/Vyasdev217/userscripts/raw/main/simple_yt_ad_skipper_and_speed_changer.user.js
// ==/UserScript==

var pbs = document.createElement("INPUT");
pbs.type="number";
pbs.style="background-color: black;color: white;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;/*-moz-appearance: textfield;*/width:8vw;text-align: center;font-size:auto;/*pointer-events: none;*/";
pbs.step=0.1;
pbs.min=0;
pbs.value=1.0;
pbs.addEventListener("change",function(){if(pbs.value>0){document.getElementsByTagName("video")[0].playbackRate = pbs.value;}else{pbs.value=1;document.getElementsByTagName("video")[0].playbackRate = pbs.value;}});

document.getElementById('center').appendChild(pbs);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
      if (document.contains(document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0])) {
          document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();
      }
      if (document.contains(document.getElementsByClassName('ytp-ad-overlay-close-button')[0])) {
          document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
      }
      document.getElementsByTagName("video")[0].playbackRate = pbs.value;
  });
});
const config = {childList:true,subtree:true};
observer.observe(document.body, config);

