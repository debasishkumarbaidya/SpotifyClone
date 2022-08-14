console.log("Welcome to spotify");
//Initialize the variables
let songIndex=0;
let audioElement = new Audio('u.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "salam-e-ishq" , filePath:"joV.mp3" , coverPath:"covers/1.jpg"},
    {songName: "ja bewafa" , filePath:"jug.mp3" , coverPath:"covers/1.jpg"},
    {songName: "agar tum mil jao " , filePath:"Lakh.mp3" , coverPath:"covers/1.jpg"},
    {songName: "ishq ka raja" , filePath:"u.mp3" , coverPath:"covers/1.jpg"},
    {songName: "tu jo keh de" , filePath:"DeTaali.mp3" , coverPath:"covers/1.jpg"},
    {songName: "hamari adhuri kahani" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName: "salam-e-ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName: "salam-e-ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName: "salam-e-ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"Na Jaana - Salam-e-Ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// Listen to events
