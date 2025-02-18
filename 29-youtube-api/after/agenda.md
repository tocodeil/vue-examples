# Example: Youtube Embedded Player

1. Install the dependencies
    - npm add youtube-player @types/youtube-player

2. Notice "video-id" => "videoId"

3. youtube-player API
    - player = YouTubePlayer('video-player');
    - cueVideoById(...)
    - watch videoId in mount and unwatch
    - next video id: t0Q2otsqC4I

4. play / pause API
```
function play() {
  player.playVideo();
}
function stop() {
  player.stopVideo();
}
player.on('stateChange', (event: any) => {
    if (event.data === 1) {
      // play
    } else {
      // pause 
    }
});
```

5. Your Turn
    - https://www.npmjs.com/package/vue-youtube
    
    - Add an "emit" to player that reports every time a movie was successfully loaded
    - Add to "App" a list of all loaded videos (so we can go back to previous videos)
    - Create a new component that shows the list, and allows selecting old video ids.
    - Add to player a numeric prop "copies". A value > 1 should show multiple players showing the same movies. When pausing one all should be paused.

