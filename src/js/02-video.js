import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const KEY_LS = "videoplayer-current-time";

const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle(function ({ seconds }) {
    localStorage.setItem(KEY_LS, JSON.stringify(seconds));
    console.log(seconds);
  }, 1000)
);

player
  .setCurrentTime(JSON.parse(localStorage.getItem(KEY_LS)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
