import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
  // data is an object containing properties specific to that event
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

player.setCurrentTime(currentTime || 0);