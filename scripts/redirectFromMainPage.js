const url = window.location.href;
// url = "https://animerulz.in/Naruto/"
const urlList = url.split("/");
let index;

const redirectThis = [
    "myheroacademiaseason2",
    "Naruto",
    "MyHeroAcademia",
    "DragonBallSuper",
    "jujutsukaisenseason2",
    "tokyorevengersseason2"
]
const redirectTo = [
    "myheroacademia2",
    "naruto",
    "myheroacademia",
    "dragonballsuper",
    "jujutsukaisen2ndseason",
    "tokyorevengerschirstmasshowdown"
]

for(let i = 1; i <= redirectThis.length ; i ++){
    if(urlList[3] == redirectThis[i - 1]){
        index = i;
        break;
    }
}
// console.log(index);
if(index)
    window.location.href = "https://animerulz.in/" + redirectTo[index - 1];
