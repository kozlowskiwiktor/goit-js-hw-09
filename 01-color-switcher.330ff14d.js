!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){timerID=setInterval((function(){document.body.style.background=e()}),1e3),t.disabled=!0})),n.addEventListener("click",(function(){clearInterval(timerID),console.log("Lucky You! Your color number is ".concat(e())),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.330ff14d.js.map
