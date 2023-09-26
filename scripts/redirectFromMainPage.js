// const url = window.location.href;
url = "https://animerulz.in/myheroacademiaseason2/"
const urlList = url.split("/");
let index;

const redirectThis = [
    "myheroacademiaseason2",
    "Naruto",
    "MyHeroAcademia",
    "DragonBallSuper"
]
const redirectTo = [
    "myheroacademia2",
    "naruto",
    "myheroacademia",
    "dragonballsuper"
]

for(let i = 1; i <= redirectThis.length ; i ++){
    if(urlList[3] == redirectThis[i - 1]){
        index = i;
        break;
    }
}

if(index)
    window.location.href = "https://animerulz.in/" + redirectTo[index - 1];
