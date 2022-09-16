fetch(`https://api.worldoftanks.ru/wot/account/list/?search=WildPants_2&fields=-&application_id=88de5ca6c8e18fa6a41bb502d6cfb95a`)
.then ( (data) => {
    console.log(data);
})
.catch(error => window.alert("лох"));