(()=>{console.log;const e=document.getElementById("main-img"),t=document.getElementById("img-name"),r=document.getElementById("img-format"),n=document.querySelectorAll(".progress"),a=document.querySelectorAll("input[type='range']"),l=document.querySelectorAll("#styles > div > p > span"),s=document.getElementById("clear");a.forEach(((t,r)=>{t.addEventListener("input",(a=>{const s=a.target.value,o=t.closest(".input-group").children[0].innerHTML;switch(n[r].style.width=`${s}%`,o){case"Border-radius":l[r].innerHTML=`${s}px`,e.style.borderRadius=`${s}px`;break;case"Blur":l[r].innerHTML=`${s}px`,e.style.filter=`blur(${s}px)`;break;case"Rotate-Y":l[r].innerHTML=`${s}deg`,e.style.transform=`rotateY(${s}deg)`;break;case"Rotate-X":l[r].innerHTML=`${s}deg`,e.style.transform=`rotateX(${s}deg)`;break;case"Skew-Y":l[r].innerHTML=`${s}deg`,e.style.transform=`skewY(${s}deg)`;break;case"Skew-X":l[r].innerHTML=`${s}deg`,e.style.transform=`skewX(${s}deg)`;break;case"Scale":l[r].innerHTML=`${s}`,e.style.transform=`scale(${s})`;break;case"Contrast":l[r].innerHTML=`${s}%`,e.style.filter=`contrast(${s}%)`;break;case"GrayScale":l[r].innerHTML=`${s}px`,e.style.filter=`grayscale(${s}%)`;break;case"Opacity":l[r].innerHTML=`${s}%`,e.style.opacity=`${s}%`;break;default:console.error("Styles not found")}}))})),s.addEventListener("click",(()=>{e.style=null,a.forEach(((e,t)=>{e.value=0,n[t].style.width=0})),l.forEach((e=>{e.innerHTML=0})),color.value="#EE5F70",color.style.backgroundColor="#EE5F70",bgcolor.style.backgroundColor="#7E75B5",bgcolor.value="#7E75B5"})),function(){const n=e.getAttribute("src").split("/"),a=n[n.length-1].split("."),l=a[0],s=a[1];t.innerHTML=`<span>Name : </span>${l}`,r.innerHTML=`<span>Format : </span>${s}`}()})();