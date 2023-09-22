setTimeout(preloaderDisplayNone, 1000);
window.addEventListener("load", function(){
    preloaderDisplayNone();
});
    function preloaderDisplayNone(){
        try{
            var loader = document.getElementById("preloader");
            // if(loader != null && loader != undefined)
            loader.style.display = "none";    
        }
        catch{}
    }

//for navbar
document.getElementsByClassName("scroll-to-top-div")[0].setAttribute("onclick", "scrollToTopDiv()");

function scrollToTopDiv(){
    document.getElementsByTagName("nav")[0].scrollIntoView();
}
function nav_bar_cust(){
    let old_nav;
    let new_nav = 0;
    window.onscroll = function(){
        var nav = document.getElementById("nav-bar-id");
        var search_bar = document.getElementById("search-input");
        var navRect = nav.getBoundingClientRect();
        var search_icon = document.getElementById("search-icon");
        var windowVerticalScroll = window.scrollY;
        var search_field = document.getElementById("search-input");

        if((navRect.top-windowVerticalScroll) < "-250"){
            nav.style.backgroundColor = "#000000";
        }
        else{
           nav.style.backgroundColor = "#00000066";
        }
        old_nav = new_nav;
        new_nav = windowVerticalScroll;
        // console.log(windowVerticalScroll);
        // console.log(navRect.top-windowVerticalScroll > 100);
        if(new_nav > old_nav && navRect.top-windowVerticalScroll < "-500"){
            nav.style.marginTop = "-140px";
            // console.log("in")
            // search_bar.style.display = "none";
        }
        else{
            nav.style.marginTop = "0";
        }


        let scrollToTopDivElement = document.getElementsByClassName("scroll-to-top-div")[0];

        let scrolledAmount = window.scrollY;
        let head = document.getElementsByTagName("head")[0];
        var headRect = head.getBoundingClientRect();
        var windowVerticalScrollNew = window.scrollY;

        let verticalHeight = window.innerHeight;
        if(headRect.top - windowVerticalScrollNew < verticalHeight - 1.5 * verticalHeight){
            scrollToTopDivElement.style.right = "40px";
        }
        else{
            scrollToTopDivElement.style.right = '-50px';
        }
    };
}
//for checking whether it is download page or anime page
var temp = document.getElementsByClassName("anchor-for-back-page");

// if ((temp == null) ||(temp != null && temp.textContent.toLowerCase() != "watching online")){
// if(temp != null)    
nav_bar_cust();
    //for anime pageb
// }
// else{
try{
    document.getElementById("a-home-anchor-tag").setAttribute("href", "https://Animerulz.in/");
    var activeAnime = document.getElementById("a-active-page-tag");
    activeAnime.setAttribute("href", "https://Animerulz.in/" + activeAnime.textContent.replace(/[^a-zA-Z0-9]/g, "").toLowerCase());
}
catch{}
try{
    // console.log(localStorage.getItem("lastClickedButtonOnePiece")
    let check = document.getElementsByClassName("active-page-tag-season")[0];
    let activeAnimeNew;
    if(check === undefined){
        activeAnimeNew = document.getElementById("active-page-tag").textContent.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // console.log(activeAnimeNew);
    }
    // console.log(document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0]);
    let activeAnimeNewEpi = localStorage.getItem("lastClickedButton" + activeAnimeNew).split("-")[2];
    if (activeAnimeNewEpi == undefined)
        activeAnimeNewEpi = 1;
    document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0].setAttribute("href", "/" + activeAnimeNew +  "/Watch-Now/?ep=" + activeAnimeNewEpi + "&aud=" + localStorage.getItem("lastClickedButtonAudio" + activeAnimeNew)); 
    // document.getElementsByClassName('button-read-manga')[0].setAttribute("onclick", "window.open('https://mangareader.to/')");
}
catch{}

try{
    if(document.getElementById("home-anchor-tag") != null)
    document.getElementsByClassName("nav-image")[0].setAttribute("onclick", "window.open('https://animerulz.in/home','_self')");
}
catch{}

try{
    document.getElementsByClassName("second-nav")[0].style.backgroundPositionX = "center";
}
catch{}




// setInterval(removeAds, 5000);

function change_dub(n){
    let element = document.getElementsByClassName("select-items-dub")[n - 1];
    let element2 = document.getElementsByClassName("anime-item-set")[n - 1];
    document.querySelector(".select-items-dub.active-dub").classList.remove("active-dub");
    document.querySelector(".anime-item-set.active-item-set").classList.remove("active-item-set");
    element.classList.add("active-dub");
    element2.classList.add("active-item-set");
}


function setAnimeInWatchList(){
    try{let watchListButton = document.getElementsByClassName("button-read-manga")[0];
    let animesInWatchList = localStorage.getItem("watchList");
    let animeName = document.getElementsByTagName("h1")[0].textContent;

    if(animesInWatchList != undefined){
        let animesInWatchListData = JSON.parse(animesInWatchList);

        animesInWatchListData.forEach(function(animeInWatchListData) {
            if(animeInWatchListData.animeName === animeName){
                watchListButton.innerText = "View WatchList";
                watchListButton.setAttribute("onclick", "window.open('https://animerulz.in/watchlist', '_self')");
            }
        })
    }}
    catch{}
}

setTimeout(setAnimeInWatchList, 500);

function addAnimeToList(){
    let watchListButton = document.getElementsByClassName("button-read-manga")[0];
    let notificationContainer = document.createElement('div');
    notificationContainer.setAttribute("class", "pop-up-watch-list-notification");
    notificationContainer.innerHTML = `
   <div class="content-notification-watch-list">
      <span>Anime Added to Watch List</span>
   </div>`;
    document.getElementsByTagName("body")[0].appendChild(notificationContainer);
    // notificationContainer.style.opactiy = "1 !important";
    watchListButton.textContent = "View Watch List";
    watchListButton.setAttribute("onclick", "window.open('https://animerulz.in/WatchList/', '_self')");
    let animeLink = window.location.href;
    let animeName = document.getElementsByTagName("h1")[0].textContent;
    let animeImageUrl = document.getElementsByClassName("image-in-container-image-div")[0].getAttribute("src");

    if(localStorage.watchList == undefined){
        let animeDataWatchList = [
            {
                animeLink : animeLink,
                animeName : animeName,
                animeImageUrl : animeImageUrl
            }
        ]

        let animeData_ = JSON.stringify(animeDataWatchList);

        localStorage.setItem("watchList", animeData_);
    }else{
        let animeDataWatchList = 
            {
                animeLink : animeLink,
                animeName : animeName,
                animeImageUrl : animeImageUrl
            }

        // let animeData_ = JSON.stringify(animeDataWatchList);

        let animeLocalData = localStorage.getItem("watchList");
        let anime___ = JSON.parse(animeLocalData);

        for(let i = 0; i < anime___.length; i ++){
            if(anime___[i].animeName === animeDataWatchList.animeName){
                anime___.splice(i, 1);
                break;
            }
        }
        anime___.push(animeDataWatchList);
        // console.log(JSON.stringify(anime___));

        localStorage.setItem("watchList", JSON.stringify(anime___));
    }
    setTimeout(removeNotificationContainer, 3000);
}

function removeNotificationContainer(){
    document.getElementsByClassName("pop-up-watch-list-notification")[0].style.bottom = "-100px";
}

//for continue watching anime in home page
function addAnimeToQueue(){
    let animeImage__ = document.getElementsByClassName("image-in-container-image-div")[0].getAttribute("src");
    let animeName__ = document.getElementsByTagName("h1")[0].textContent;
    let animeUrl__ = window.location.href;
    // console.log(animeUrl__);

    if(localStorage.continueWatching == undefined){
        let animeDataCV = [
            {
                animeName : animeName__,
                animeImage : animeImage__,
                animeUrl : animeUrl__,
                animeEpisodeNumber : 1
            }
        ];

        localStorage.setItem("continueWatching", JSON.stringify(animeDataCV));
    }else{
        let animeDataCV = {
            animeName : animeName__,
            animeImage : animeImage__,
            animeUrl : animeUrl__,
            animeEpisodeNumber : 1
        };
        let existingAnimeData = localStorage.getItem("continueWatching");

        let convertedExistingData = JSON.parse(existingAnimeData);

        for(let i = 0; i < convertedExistingData.length; i ++){
            if(convertedExistingData[i].animeName === animeDataCV.animeName){
                convertedExistingData.splice(i, 1);
                break;
            }
        }
        convertedExistingData.push(animeDataCV);

        localStorage.setItem("continueWatching", JSON.stringify(convertedExistingData));
    }
}

//for more menu section
function disableScroll(){
    document.getElementsByTagName("body")[0].style.position = "fixed";
 }
 function enableScroll(){
    document.getElementsByTagName("body")[0].style.position = "initial"; 
 }

 function show_menu(){
    let menu = document.getElementsByClassName("more-menu")[0];
    menu.style.marginLeft = "0";
    // disableScroll();
 }
 function hide_menu(){
    let menu = document.getElementsByClassName("more-menu")[0];
    menu.style.marginLeft = "-100vw";
    // enableScroll();
 }


function setTrendingAnimeInSearch(){
    let trendingAnimeInSearchContainer = document.getElementsByClassName("list-search-trending")[0];
    let trendingAnime = [
        "One Piece", "Jujutsu Kaisen Season 2", "Bleach Thousand Year Blood War Season 2", "Zom 100", "Demon Slayer Swordsmith Village Arc"
    ]
    let temppp = "";
    let counterrr = 0;
    trendingAnime.forEach((animee) => {
        temppp += `
        <li class="element-search-tr__" onclick="window.open('https://animerulz.in/search/?anime=${animee}', '_self')" id="ele-${counterrr}"><svg class="arrow-element-in-search__" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg><span class="txt">${animee}</span></li>
        `;
        counterrr ++;
    });
    trendingAnimeInSearchContainer.innerHTML = temppp;
} 

setTrendingAnimeInSearch();



const moreSeasonsOfThisSection = document.getElementsByClassName("anime-seasons-items__");
const wholeMoreSeasonsContainer = document.getElementsByClassName("more-season-anime-container__")[0];
if(wholeMoreSeasonsContainer != undefined){
    if(moreSeasonsOfThisSection.length == 0)
        wholeMoreSeasonsContainer.style.display = "none";
}

const commentSection = document.getElementsByClassName("data-comment-section_")[0];

function setCommentSection(){
    try
        {let commentSectionButtonNew = document.querySelector(".show-more-comments button");
        // let commentSection = document.getElementsByClassName("data-comment-section_")[0];

        console.log(commentSection.offsetHeight <= 1000, commentSection.offsetHeight);
        if(commentSection.offsetHeight <= 1000){
            commentSectionButtonNew.style.display = "none";
        }else{
            commentSection.style.maxHeight = "1000px";
        }
        commentSectionButtonNew.setAttribute("onclick", "moreCommentsNew()");}
        catch{}
}

setTimeout(setCommentSection, 3000);


function moreCommentsNew() {
    // let commentSection = document.getElementsByClassName("data-comment-section_")[0];
    let buttonShowMore = document.querySelector(".comment-section_ .show-more-comments button");  
    
    commentSection.removeAttribute("style");
    buttonShowMore.innerHTML = "show less";
    buttonShowMore.setAttribute("onclick", "lessCommentsNew()");
}
function lessCommentsNew(){
    // let commentSection = document.getElementsByClassName("data-comment-section_")[0];
    let buttonShowMore = document.querySelector(".comment-section_ .show-more-comments button");

    commentSection.style.maxHeight = "1000px";
    buttonShowMore.innerHTML = "show more";
    buttonShowMore.setAttribute('onclick', "moreCommentsNew()");
}


try{
    document.querySelectorAll(".follow-icons a")[2].setAttribute("href", "https://t.me/animerulz_xyz");
    document.querySelectorAll(".follow-icons a")[6].setAttribute("href", "https://t.me/animerulz_xyz");
}
catch{}
