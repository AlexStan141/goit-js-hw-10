!function(){var e=document.querySelector("select.breed-select");function t(e){e.style.position="absolute",e.style.visibility="hidden"}var n=document.querySelector("select.breed-select"),o=document.querySelector("p.error"),i=document.querySelector("span.loader");function r(){var o;t(i),(o=n).style.position="absolute",o.style.visibility="visible",fetch("https://api.thecatapi.com/v1/breeds",{method:"GET",withCredentials:!0,headers:{"X-Auth-Token":"live_WX5zlLCZX7W236sBd35JaCOAqdDpb5SedzaV4i3EEWvt4YieCV68YfZsKU798HQZ","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=!0,o=!1,i=void 0;try{for(var r,l=t[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var c=r.value,a=document.createElement("option");a.value=c.id,a.innerText=c.name,e.append(a)}}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}})).catch((function(e){console.log(e)}))}t(n),t(o),setTimeout((function(){r()}),2e3)}();
//# sourceMappingURL=index.222c38eb.js.map