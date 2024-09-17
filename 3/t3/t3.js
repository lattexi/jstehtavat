'use strict';

const target = document.querySelector('#target');
const userAgent = navigator.userAgent;

function detectBrowser() {
    if (userAgent.indexOf("Edg") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
        return "Opera";
    }
    return "Unknown browser";
}

function detectOS() {
    if (userAgent.indexOf("Mac") > -1) {
        return "MacOS";
    } else if (userAgent.indexOf("Win") > -1) {
        return "Windows";
    } else if (userAgent.indexOf("Linux") > -1) {
        return "Linux";
    }
    return "Unknown OS";
}

function detectScreenSize() {
    return `${window.screen.width}x${window.screen.height}`;
}

function detectCurrentDateAndTime() {
    return new Date().toLocaleString();
}

console.log(detectBrowser());
console.log(detectOS());
console.log(detectScreenSize());
console.log(detectCurrentDateAndTime());

target.innerHTML = `
    <p>${detectBrowser()}</p>
    <p>${detectOS()}</p>
    <p>${detectScreenSize()}</p>
    <p>${detectCurrentDateAndTime()}</p>
`;
