// fetch(`https://api.worldoftanks.ru/wot/tanks/stats/?application_id=88de5ca6c8e18fa6a41bb502d6cfb95a&account_id=132479554`, {
//     method: 'GET',
//     mode: "cors",
// })
// .then ( response => response.json())
// .then ( (dataServer) => {
//     // data();
//     console.log(dataServer.data[132479554]);
// })

const body = document.querySelector('body');

const searchNameButton = document.getElementById('searchNameButton');
const searchIDButton = document.getElementById('searchIDButton');


searchNameButton.addEventListener('click', searchThisName);
searchIDButton.addEventListener('click', searchThisID)


function searchThisName () {
    const inputName = document.getElementById('inputNameValue').value;
        console.log(inputName);
}

function searchThisID () {
    const inputID = document.getElementById('inputIDValue').value;
    console.log(inputID);
}