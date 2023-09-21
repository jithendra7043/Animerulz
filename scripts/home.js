const continueWatchingContainer = document.getElementsByClassName("continue-watching-division")[0];

function setContinueWatchingContainer(){
    let continueWatchingData1 = localStorage.continueWatching;
    // console.log(continueWatchingData);
    let continueWatchingData = JSON.parse(continueWatchingData1);
    if(continueWatchingData.length != 0){
        let tempData = "";
        let counteR = 0;
        for(let i = continueWatchingData.length - 1; i >= 0; i --){
            let animeNameForHome = continueWatchingData[i].animeName;
            let lastClickedButtonForHome = localStorage.getItem("lastClickedButton" + animeNameForHome.replace(" ", ""));
            // console.log(lastClickedButtonForHome);
            let animeEpisodeNumberForHome;
            let listOfLastClickedButtonData;
            if(lastClickedButtonForHome != null){
               listOfLastClickedButtonData = lastClickedButtonForHome.split("-");
               animeEpisodeNumberForHome = listOfLastClickedButtonData[listOfLastClickedButtonData.length - 1];
            }
            else
               animeEpisodeNumberForHome = 1;
            tempData += `<div class="anime-continue-watching">
                  <a class="anchor-to-continue-watching" title="Continue Watching One Piece" href="${continueWatchingData[i].animeUrl}Watch-Now/?ep=${animeEpisodeNumberForHome}&aud=eng">
                     <div class="data_cont-watching__" style="background: url(${continueWatchingData[i].animeImage}) no-repeat center center;background-size: 100% auto;">
                        <div class="play-btn__">
                           <i class="fa-regular fa-circle-play"></i>
                        </div>
                     </div>
                     <div class="anime-data-continue-watching__">
                        <div class="anime-info-continue-watching">
                           <div class="anime-episodes-count__">
                              <span>Episode-${animeEpisodeNumberForHome}</span>
                           </div>
                           <div class="anime-name-cont-watching__">
                              <h3>${animeNameForHome}</h3>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>`;
               counteR ++;
               if(counteR === 5){
                  break;
               }
        }
        let outputData = `
        <div class="data-continue-watching">
            <div class="header-in-trending">
               <h2>Continue Watching</h2>
            </div>
            <div class="continue-watching-data__">
        ` + tempData + 
        `
        </div>
         </div>
        `;
        continueWatchingContainer.innerHTML = outputData;
    }
}

setContinueWatchingContainer();
