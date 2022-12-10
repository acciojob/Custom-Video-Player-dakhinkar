// Edit this file
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progessBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


const toggleClickHandler = () => {
    console.log(toggle.title);
    const toggleType = toggle.title;
//     toggle.title.includes("Play")
// true
// toggle.attributes['title'].textContent = "Toggle pause"; 
// 'Toggle pause'
    // console.log(typeof toggleType)
    if (toggleType.includes("Play") ){
        video.play();
        toggle.attributes['title'].textContent = "Toggle Pause";
        toggle.innerHTML = '❚❚';
        
    } else {
        video.pause();
        toggle.attributes['title'].textContent = "Toggle Play";
        toggle.innerHTML = '►';
    }
}

const volumeChange = () => {
    video.volume = ranges[0].value;
}

const playBackRateChange = (e) => {
    video.playbackRate = ranges[1].value;
    e.title = ranges[1].value;
}
const forwardBackChange = (e) => {
    const time = Number(e.attributes['data-skip'].value);
    // console.log(time);

    const currT = Number(video.currentTime);
    // console.log("curr Time", currT);
    
    video.currentTime = currT + time;
}

const progressbarHandler = () => {
    const currTime = Number(video.currentTime);
    console.log(currTime);
  
    const totalDuration = Number(video.duration);
    console.log("totalDur: ", totalDuration);
    const fillPerc = Math.round((currTime / totalDuration) * 100);
    console.log(fillPerc);
    progessBar.style.flexBasis = `${fillPerc}%`;
    // progessBar.innerHTML.value = fillPerc;



}

