var audioSources = [
    {
        id: 1,
        artistName : "Infraction",
        songName : "Sensitive",
        songFile: "Infraction_-_Sensitive.mp3",
        songImg: "infraction-sensitive.jpeg"
    },
    {
        id: 2,
        artistName: "Tantalizing Youth",
        songName: "Social Square",
        songFile: "Social_Square_-_Tantalizing_Youth.mp3",
        songImg: "TantalizingYouth-SOCIALSQUARE.jpeg"
    },
    {
        id: 3,
        artistName: "SMOKING WITH POETS ",
        songName: "to: Aurora",
        songFile: "Smoking_With_Poets_-_to__Aurora.mp3",
        songImg: "smokingwithpoets-toAurora.jpeg"
    }
];

var audioPath = "../media/audio/";

var DOM = {
    audioTag: document.querySelector('#music'),
    playBtn: document.querySelector('#playPause')
}

function changeBtnState(state){
    if(state="pause"){
        DOM.playBtn.classList.remove = "fa-play";
        DOM.playBtn.classList.add = "fa-pause";
    }else{
        DOM.playBtn.classList.remove = "fa-pause";
        DOM.playBtn.classList.add = "fa-play";
    }
}

function loadSong(songFile){
    DOM.audioTag.src = audioPath+songFile;
    DOM.audioTag.play();
    changeBtnState("pause");
}

/* loadSong("Infraction_-_Sensitive.mp3") */;

