// ==UserScript==
// @name         YouTube-HomePage-NoDistraction
// @namespace    https://github.com/Vyasdev217
// @version      1.0
// @description  Distracted by video suggestions on youtube homepage? This will solve it!
// @author       Lone Wolf
// @match        https://www.youtube.com/
// @grant        none
// @license MIT
// ==/UserScript==

document.getElementById("content").addEventListener("click",function(){
    document.getElementById('page-manager').remove();
},false);
