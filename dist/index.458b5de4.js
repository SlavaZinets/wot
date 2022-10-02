function t(t,e,a,n){const i=document.createElement(t);return i.classList.add(a),e.appendChild(i),i.textContent=n,i}function e(t){const e=new Date(1e3*t);return`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()} at ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`}document.querySelector("body");const a=document.querySelector(".searchingPlayers");document.addEventListener("DOMContentLoaded",i);let n;function i(){a.innerHTML='<ul class="searchFields">\n\n  <li class="searchTitle">Find player by Nickname:</li>\n  <li class="searchContainer">\n    <select id="regionNick" class="regionSearch">\n      <option value="ru" class="regionOption">RU</option>\n      <option value="eu" class="regionOption">EU</option>\n      <option value="com" class="regionOption">NA</option>\n      <option value="asia" class="regionOption">ASIA</option>\n    </select>\n    <input\n    id="inputNameValue"\n      class="searchInput"\n      type="text"\n      placeholder="Type a nickname..."/>\n    <button id="searchNameButton" class="searchButton">Search</button>\n  </li>\n\n  <li class="searchTitle">Or by player ID:</li>\n  <li class="searchContainer">\n    <select id="regionID" class="regionSearch">\n      <option value="ru" class="regionOption">RU</option>\n      <option value="eu" class="regionOption">EU</option>\n      <option value="com" class="regionOption">NA</option>\n      <option value="asia" class="regionOption">ASIA</option>\n    </select>\n    <input\n    id="inputIDValue"\n      class="searchInput"\n      type="text"\n      placeholder="Type an ID..."/>\n    <button id="searchIDButton" class="searchButton">Search</button>\n  </li>\n</ul>';const t=document.getElementById("searchNameButton"),e=document.getElementById("searchIDButton");t.addEventListener("click",r),e.addEventListener("click",l)}function s(n,i){fetch(`https://api.worldoftanks.${n}/wot/account/info/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${i}`).then((t=>t.json())).then((n=>{!function(n){a.innerHTML="";let i=n.statistics.all.wins/n.statistics.all.battles*100;t("h2",a,"statsNick",n.nickname);const s=t("div",a,"statsBattles");t("p",s,"battlesNum",n.statistics.all.battles),t("div",s,"statsSwords"),t("div",a,"winrateNum",i.toFixed(2)+"%"),t("div",a,"statsDate",e(n.created_at)),t("div",a,"statsDate",e(n.last_battle_time)),t("div",a,"generalStatsContainer");const o=t("div",a,"hoverContainer"),r=t("div",o,"generalStatsParameter"),l=(t("p",r,"generalStatsParameterDescr","Total amount of damage you`ve dealt:"),t("div",r,"generalStatsNum",n.statistics.all.damage_dealt),t("div",a,"hoverContainer")),c=t("div",l,"generalStatsParameter"),d=(t("p",c,"generalStatsParameterDescr","Total amount of damage you`ve gained:"),t("div",c,"generalStatsNum",n.statistics.all.damage_received),t("div",a,"hoverContainer")),u=t("div",d,"generalStatsParameter"),v=(t("p",u,"generalStatsParameterDescr","Total amount of hits you`ve gained:"),t("div",u,"generalStatsNum",n.statistics.all.direct_hits_received),t("div",a,"hoverContainer")),m=t("div",v,"generalStatsParameter"),g=(t("p",m,"generalStatsParameterDescr","Total amount of frags you`ve done:"),t("div",m,"generalStatsNum",n.statistics.all.frags),t("div",a,"hoverContainer")),p=t("div",g,"generalStatsParameter"),h=(t("p",p,"generalStatsParameterDescr","Total amount of hits you`ve dealt:"),t("div",p,"generalStatsNum",n.statistics.all.hits),t("div",a,"hoverContainer")),S=t("div",h,"generalStatsParameter"),f=(t("p",S,"generalStatsParameterDescr","Your accuracy:"),t("div",S,"generalStatsNum",n.statistics.all.hits_percents+"%"),t("div",a,"hoverContainer")),y=t("div",f,"generalStatsParameter"),N=(t("p",y,"generalStatsParameterDescr","Total amount of piercings you`ve done:"),t("div",y,"generalStatsNum",n.statistics.all.piercings),t("div",a,"hoverContainer")),D=t("div",N,"generalStatsParameter"),P=(t("p",D,"generalStatsParameterDescr","Total amount of shots you`ve done:"),t("div",D,"generalStatsNum",n.statistics.all.shots),t("div",a,"hoverContainer")),b=t("div",P,"generalStatsParameter"),C=(t("p",b,"generalStatsParameterDescr","Total amount of battles in which you survived:"),t("div",b,"generalStatsNum",n.statistics.all.survived_battles),t("div",a,"hoverContainer")),I=t("div",C,"generalStatsParameter"),T=(t("p",I,"generalStatsParameterDescr","Total amount of XP you earned:"),t("div",I,"generalStatsNum",n.statistics.all.xp),t("div",a,"hoverContainer")),_=t("div",T,"generalStatsParameter");t("p",_,"generalStatsParameterDescr","Total amount of trees you`ve cutted"),t("div",_,"generalStatsNum",n.statistics.cut_trees)}(n.data[i])}))}async function o(t,e){return fetch(`https://api.worldoftanks.${t}/wot/clans/accountinfo/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${e}`).then((t=>t.json())).then((t=>null===t.data[e]?"None":t.data[e].clan.tag))}function r(){const e=document.getElementById("inputNameValue").value;n=document.getElementById("regionNick").value,fetch(`https://api.worldoftanks.${n}/wot/account/list/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&search=${e}`).then((t=>t.json())).then((e=>{!async function(e){a.innerHTML="";for(const i of e){const e=i.account_id,r=await o(n,e),l=t("div",a,"playerContainer");t("h3",l,"playerName",i.nickname),t("span",l,"clanTag",r),l.addEventListener("click",(()=>{s(n,e)}))}}(e.data)}))}function l(){const t=document.getElementById("inputIDValue").value;s(document.getElementById("regionID").value,t)}document.querySelector(".home").addEventListener("click",i);