import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as m}from"./assets/vendor-77e16229.js";const r=document.querySelector("input#datetime-picker"),e=document.querySelector("button"),p=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let i,a=null;e.disabled=!0;function b(){f(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,clickOpens:!0,onClose:g})}function g(t){t[0]<new Date?(e.disabled=!0,m.show({iconUrl:"../img/icon.svg",message:"Please choose a date in the future",messageColor:"#ffffff",color:"#ef4040",close:!1,position:"topRight"})):(i=t[0],e.disabled=!1,clearInterval(a))}function D(){clearInterval(a),e.disabled=!0,r.disabled=!0,a=setInterval(()=>{const t=Date.now(),n=i-t;if(n<=0){clearInterval(a),e.disabled=!0,r.disabled=!1;return}const o=v(n);C(o)},1e3)}function v(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:l}}function C({days:t,hours:n,minutes:o,seconds:s}){p.textContent=String(t).padStart(2,"0"),h.textContent=String(n).padStart(2,"0"),y.textContent=String(o).padStart(2,"0"),S.textContent=String(s).padStart(2,"0")}b();e.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map
