//   VARIABLES
const body = document.querySelector("body");

const searchingPlayers = document.querySelector(".searchingPlayers");

renderInputs();

const home = document.querySelector(".home");
let regionNick;
let tag;

//   GLOBAL FUNCTIONS
function buildElement(element, parent, className, text) {
  const createdElement = document.createElement(element);
  createdElement.classList.add(className);
  parent.appendChild(createdElement);
  createdElement.textContent = text;

  return createdElement;
}

function parseDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const parsed = `Date:${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return parsed;
}

//   RENDER

function renderPlayers(array) {
  searchingPlayers.innerHTML = "";
  array.forEach(async function (element) {
    const accountID = element.account_id;

  fetchClanTag(regionNick, accountID);

console.log(tag);
    const searchingContainer = buildElement("div",searchingPlayers,"playerContainer");
    buildElement("h3", searchingContainer, "playerName", element.nickname);

    const clanTag = buildElement('span', searchingContainer, 'clanTag', tag)

    searchingContainer.addEventListener("click", () => {
      fetchStats(regionNick, accountID);
    });
  });
}

function renderInputs() {
  searchingPlayers.innerHTML = `<ul class="searchFields">

  <li class="searchTitle">Find player by Nickname:</li>
  <li class="searchContainer">
    <select id="regionNick" class="regionSearch">
      <option value="ru" class="regionOption">RU</option>
      <option value="eu" class="regionOption">EU</option>
      <option value="com" class="regionOption">NA</option>
      <option value="asia" class="regionOption">ASIA</option>
    </select>
    <input
    id="inputNameValue"
      class="searchInput"
      type="text"
      placeholder="Type a nickname..."/>
    <button id="searchNameButton" class="searchButton">Search</button>
  </li>

  <li class="searchTitle">Or by player ID:</li>
  <li class="searchContainer">
    <select id="regionID" class="regionSearch">
      <option value="ru" class="regionOption">RU</option>
      <option value="eu" class="regionOption">EU</option>
      <option value="com" class="regionOption">NA</option>
      <option value="asia" class="regionOption">ASIA</option>
    </select>
    <input
    id="inputIDValue"
      class="searchInput"
      type="text"
      placeholder="Type an ID..."/>
    <button id="searchIDButton" class="searchButton">Search</button>
  </li>
</ul>`;
  const searchNameButton = document.getElementById("searchNameButton");
  const searchIDButton = document.getElementById("searchIDButton");

  searchNameButton.addEventListener("click", searchThisName);
  searchIDButton.addEventListener("click", searchThisID);
}

function renderStats(player) {
  searchingPlayers.innerHTML = "";
  fetchClanTag(regionNick, tag)
  console.log(tag)

  buildElement("h2", searchingPlayers, "statsNick", player.nickname);
  const statsBattles = buildElement('div', searchingPlayers, 'statsBattles')
  buildElement("p", statsBattles, "battlesNum", player.statistics.all.battles);
  buildElement('div', statsBattles, "statsSwords");
  

}

//   FETCH
function fetchStats(region, id) {
  fetch(
    `https://api.worldoftanks.${region}/wot/account/info/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${id}`
  )
    .then((response) => response.json())
    .then((dataServer) => {
      console.log(dataServer.data[id]);
      renderStats(dataServer.data[id]);
    });
}

function fetchClanTag(region, id) {
  fetch(
    `https://api.worldoftanks.${region}/wot/clans/accountinfo/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${id}`
  ).then((response) => response.json())
  .then((dataServer) => {
//  console.log(dataServer);

      if( dataServer.data[id] === null) {
        tag = 'None';
      } 
      else {
        tag = dataServer.data[id].clan.tag;
      }
    
    console.log(tag);
    
  });
}

//   SEARCHING
function searchThisName() {
  const inputName = document.getElementById("inputNameValue").value;
  regionNick = document.getElementById("regionNick").value;

  fetch(
    `https://api.worldoftanks.${regionNick}/wot/account/list/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&search=${inputName}`
  )
    .then((response) => response.json())
    .then((dataServer) => {
      // console.log(dataServer.data);
      let arrayOfPlayers = dataServer.data;
      renderPlayers(arrayOfPlayers);
    });
}

function searchThisID() {
  const inputID = document.getElementById("inputIDValue").value;
  let regionID = document.getElementById("regionID").value;
  fetchStats(regionID, inputID);
}

//   HEADER
home.addEventListener("click", renderInputs);
