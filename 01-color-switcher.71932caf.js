const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{timerID=setInterval((()=>{document.body.style.background=o()}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(timerID),console.log(`Lucky You! Your color number is ${o()}`),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.71932caf.js.map
