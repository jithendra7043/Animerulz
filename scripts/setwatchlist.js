const mainContainerAtWatchList = document.getElementsByClassName("sub-sub-container-d-d")[0];

const dataFoWatchList = localStorage.watchList;


function setWatchListAnime(){
    let dataWatchList;
    if(dataFoWatchList == undefined){
        mainContainerAtWatchList.innerHTML = `
        <div class="sub-sub-container-d-u">
                          <span>No Animes in Your Watch List</span>
                        </div>`;
    }else{
        dataWatchList = JSON.parse(dataFoWatchList);
        let temp = '';
        for(let i = dataWatchList.length - 1; i >= 0; i --){
            temp += `<div class="anime-whole-container"><div class="remove-anime-container">
            <button onclick="removeAnimeFromWatchList(${i})">remove</button>
          </div><div class="anime-tr big-items first-anime watch-list-anime"><div class="background-anime-tr watch-list-background-anime-tr" style="background: linear-gradient(180deg, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.5)70%, rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 90%, rgba(0,0,0,0.9) 100%), url(${dataWatchList[i]['animeImageUrl']});background-size: 100% 100%;background-repeat: no-repeat;"></div>                          <a class="onclick-container" href="${dataWatchList[i]['animeLink']}" title="${dataWatchList[i]['animeName']}">                            <svg xmlns="http://www.w3.org/2000/svg" class="play-svg-anime__" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>                                                      </a>                          <div class="anime-inner-container-tr watch-list-container-anime">                                                        <div class="anime-inner-bottom">                              <div class="anime-name-in-container">                                                                <h2>${dataWatchList[i]['animeName']}</h2>                                                              </div>                            </div></div></div>
            </div>`;
        }
        mainContainerAtWatchList.innerHTML = `
                        <div class="sub-sub-container-u">
                            ${temp}
                        </div>
        `;
        // console.log(temp);
    }
}

setWatchListAnime()


function removeAnimeFromWatchList(index){
    let dataAvailableWatchList = JSON.parse(dataFoWatchList);
    // console.log(dataAvailableWatchList);
    let dataWatchList_;

    for(let j = 0; j < dataAvailableWatchList.length ; j ++){
        if(j == index){
            dataAvailableWatchList.splice(j, 1);
        }
    }
    // console.log(dataAvailableWatchList);

    localStorage.setItem("watchList", JSON.stringify(dataAvailableWatchList));
    
    if(dataFoWatchList == undefined){
        mainContainerAtWatchList.innerHTML = `
        <div class="sub-sub-container-d-u">
                          <span>No Animes in Your Watch List</span>
                        </div>`;
    }else{
        dataWatchList_ = JSON.parse(dataFoWatchList);
        let temp = '';
        for(let i = dataWatchList_.length - 1; i >= 0; i --){
            if ( i != index){temp += `<div class="anime-whole-container"><div class="remove-anime-container">
            <button onclick="removeAnimeFromWatchList(${i})">remove</button>
          </div><div class="anime-tr big-items first-anime watch-list-anime"><div class="background-anime-tr watch-list-background-anime-tr" style="background: linear-gradient(180deg, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.5)70%, rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 90%, rgba(0,0,0,0.9) 100%), url(${dataWatchList_[i]['animeImageUrl']});background-size: 100% 100%;background-repeat: no-repeat;"></div>                          <a class="onclick-container" href="${dataWatchList_[i]['animeLink']}" title="${dataWatchList_[i]['animeName']}">                            <svg xmlns="http://www.w3.org/2000/svg" class="play-svg-anime__" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>                                                      </a>                          <div class="anime-inner-container-tr watch-list-container-anime">                                                        <div class="anime-inner-bottom">                              <div class="anime-name-in-container">                                                                <h2>${dataWatchList_[i]['animeName']}</h2>                                                              </div>                            </div></div></div>
            </div>`;}
        }
        mainContainerAtWatchList.innerHTML = `
                        <div class="sub-sub-container-u">
                            ${temp}
                        </div>
        `;
}
}
