import { buildElement, parseDate } from "./utils";
//   VARIABLES
const body = document.querySelector("body");

const searchingPlayers = document.querySelector(".searchingPlayers");

document.addEventListener("DOMContentLoaded", renderInputs);

const home = document.querySelector(".home");

let regionNick;

//   RENDER

async function renderPlayers(array) {
  searchingPlayers.innerHTML = "";

  for (const element of array) {
    const accountID = element.account_id;

    const tag = await fetchClanTag(regionNick, accountID);

    const searchingContainer = buildElement(
      "div",
      searchingPlayers,
      "playerContainer"
    );
    buildElement("h3", searchingContainer, "playerName", element.nickname);

    const clanTag = buildElement("span", searchingContainer, "clanTag", `[${tag}]`);

    searchingContainer.addEventListener("click", () => {
      fetchStats(regionNick, accountID);
    });
  }
}

function renderInputs() {
  searchingPlayers.innerHTML = `<ul class="searchFields">

  <li class="searchTitle">Find player by Nickname:</li>
  <li class="searchContainer">
    <select id="regionNick" class="regionSearch">
      <option value="eu" class="regionOption">EU</option>
      <option value="ru" class="regionOption">RU</option>
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
      <option value="eu" class="regionOption">EU</option>
      <option value="ru" class="regionOption">RU</option>
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
  // fetchClanTag(regionNick, tag)
  let winrate =
    (player.statistics.all.wins / player.statistics.all.battles) * 100;

  buildElement("h2", searchingPlayers, "statsNick", player.nickname);
  const statsBattles = buildElement("div", searchingPlayers, "statsBattles");
  buildElement("p", statsBattles, "battlesNum", player.statistics.all.battles);
  buildElement("div", statsBattles, "statsSwords");

  buildElement("div", searchingPlayers, "winrateNum", winrate.toFixed(2) + "%");
  buildElement(
    "div",
    searchingPlayers,
    "statsDate",
    parseDate(player.created_at)
  );
  buildElement(
    "div",
    searchingPlayers,
    "statsDate",
    parseDate(player.last_battle_time)
  );

  const generalStatisticsContainer = buildElement(
    "div",
    searchingPlayers,
    "generalStatsContainer"
  );

  const statsParameterContainer_damage_dealt = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_damage_dealt = buildElement(
    "div",
    statsParameterContainer_damage_dealt,
    "generalStatsParameter"
  );
  const descr_damage_dealt = buildElement(
    "p",
    statsParameter_damage_dealt,
    "generalStatsParameterDescr",
    "Total amount of damage you`ve dealt:"
  );
  const damage_dealt = buildElement(
    "div",
    statsParameter_damage_dealt,
    "generalStatsNum",
    player.statistics.all.damage_dealt
  );

  const statsParameterContainer_damage_received = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_damage_received = buildElement(
    "div",
    statsParameterContainer_damage_received,
    "generalStatsParameter"
  );
  const descr_damage_received = buildElement(
    "p",
    statsParameter_damage_received,
    "generalStatsParameterDescr",
    "Total amount of damage you`ve gained:"
  );
  const damage_received = buildElement(
    "div",
    statsParameter_damage_received,
    "generalStatsNum",
    player.statistics.all.damage_received
  );

  const statsParameterContainer_direct_hits_received = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_direct_hits_received = buildElement(
    "div",
    statsParameterContainer_direct_hits_received,
    "generalStatsParameter"
  );
  const descr_direct_hits_received = buildElement(
    "p",
    statsParameter_direct_hits_received,
    "generalStatsParameterDescr",
    "Total amount of hits you`ve gained:"
  );
  const direct_hits_received = buildElement(
    "div",
    statsParameter_direct_hits_received,
    "generalStatsNum",
    player.statistics.all.direct_hits_received
  );

  const statsParameterContainer_frags = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_frags = buildElement(
    "div",
    statsParameterContainer_frags,
    "generalStatsParameter"
  );
  const descr_frags = buildElement(
    "p",
    statsParameter_frags,
    "generalStatsParameterDescr",
    "Total amount of frags you`ve done:"
  );
  const frags = buildElement(
    "div",
    statsParameter_frags,
    "generalStatsNum",
    player.statistics.all.frags
  );

  const statsParameterContainer_hits = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_hits = buildElement(
    "div",
    statsParameterContainer_hits,
    "generalStatsParameter"
  );
  const descr_hits = buildElement(
    "p",
    statsParameter_hits,
    "generalStatsParameterDescr",
    "Total amount of hits you`ve dealt:"
  );
  const hits = buildElement(
    "div",
    statsParameter_hits,
    "generalStatsNum",
    player.statistics.all.hits
  );

  const statsParameterContainer_hits_percents = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_hits_percents = buildElement(
    "div",
    statsParameterContainer_hits_percents,
    "generalStatsParameter"
  );
  const descr_hits_percents = buildElement(
    "p",
    statsParameter_hits_percents,
    "generalStatsParameterDescr",
    "Your accuracy:"
  );
  const hits_percents = buildElement(
    "div",
    statsParameter_hits_percents,
    "generalStatsNum",
    player.statistics.all.hits_percents + "%"
  );

  const statsParameterContainer_piercings = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_piercings = buildElement(
    "div",
    statsParameterContainer_piercings,
    "generalStatsParameter"
  );
  const descr_piercings = buildElement(
    "p",
    statsParameter_piercings,
    "generalStatsParameterDescr",
    "Total amount of piercings you`ve done:"
  );
  const piercings = buildElement(
    "div",
    statsParameter_piercings,
    "generalStatsNum",
    player.statistics.all.piercings
  );

  const statsParameterContainer_shots = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_shots = buildElement(
    "div",
    statsParameterContainer_shots,
    "generalStatsParameter"
  );
  const descr_shots = buildElement(
    "p",
    statsParameter_shots,
    "generalStatsParameterDescr",
    "Total amount of shots you`ve done:"
  );
  const shots = buildElement(
    "div",
    statsParameter_shots,
    "generalStatsNum",
    player.statistics.all.shots
  );

  const statsParameterContainer_survived_battles = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_survived_battles = buildElement(
    "div",
    statsParameterContainer_survived_battles,
    "generalStatsParameter"
  );
  const descr_survived_battles = buildElement(
    "p",
    statsParameter_survived_battles,
    "generalStatsParameterDescr",
    "Total amount of battles in which you survived:"
  );
  const survived_battles = buildElement(
    "div",
    statsParameter_survived_battles,
    "generalStatsNum",
    player.statistics.all.survived_battles
  );

  const statsParameterContainer_survived_xp = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter_xp = buildElement(
    "div",
    statsParameterContainer_survived_xp,
    "generalStatsParameter"
  );
  const descr_xp = buildElement(
    "p",
    statsParameter_xp,
    "generalStatsParameterDescr",
    "Total amount of XP you earned:"
  );
  const xp = buildElement(
    "div",
    statsParameter_xp,
    "generalStatsNum",
    player.statistics.all.xp
  );

  const statsParameterContainer_cut_trees = buildElement(
    "div",
    searchingPlayers,
    "hoverContainer"
  );
  const statsParameter__cut_trees = buildElement(
    "div",
    statsParameterContainer_cut_trees,
    "generalStatsParameter"
  );
  const descr__cut_trees = buildElement(
    "p",
    statsParameter__cut_trees,
    "generalStatsParameterDescr",
    "Total amount of trees you`ve cutted"
  );
  const _cut_trees = buildElement(
    "div",
    statsParameter__cut_trees,
    "generalStatsNum",
    player.statistics.cut_trees
  );
}

//   FETCH
function fetchStats(region, id) {
  fetch(
    `https://api.worldoftanks.${region}/wot/account/info/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${id}`
  )
    .then((response) => response.json())
    .then((dataServer) => {
      renderStats(dataServer.data[id]);
    });
}

async function fetchClanTag(region, id) {
  return fetch(
    `https://api.worldoftanks.${region}/wot/clans/accountinfo/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=${id}`
  )
    .then((response) => response.json())
    .then((dataServer) => {
      if (dataServer.data[id] === null) {
        return "None";
      } else {
        return dataServer.data[id].clan.tag;
      }
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
