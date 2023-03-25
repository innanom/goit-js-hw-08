import throttle from 'lodash.throttle'
import Player from '@vimeo/player'

    const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";

    player.on('timeupdate', throttle(onPlay, 500));

function onPlay(data) {
        localStorage.setItem(CURRENT_TIME_KEY, data.seconds)
    }

if (localStorage.getItem(CURRENT_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))
}



