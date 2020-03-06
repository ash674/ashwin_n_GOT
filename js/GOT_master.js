(()=> {

let sigilButtons = document.querySelectorAll(".sigilContainer"),
  lightbox = document.querySelector(".LightBox"),
  closeButton = document.querySelector(".close-button"),
  houseVdo = document.querySelector("video")
  playbutton = document.querySelector(".play-button"),
  pausebutton = document.querySelector(".pause-button"),
  rewindbutton = document.querySelector(".rewind-button");

let paused = false;

function showLightBox() {

  let houseName = this.className.split(" ")[1];
  let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);
  let targetSource = `video/House-${newSource}.mp4`;
debugger;
  lightbox.classList.add("show-lightbox");
  houseVdo.src = targetSource;
    houseVdo.load();
    houseVdo.play();
}
function hideLightBox() {
  lightbox.classList.remove("show-lightbox");
    houseVdo.pause();
      houseVdo.currentTime = 0;
}

function play() {
  houseVdo.play();
}

function pause() {
  houseVdo.pause();
  paused = true;
}

function rewind() {
houseVdo.currentTime = 0;
houseVdo.play();

}

 sigilButtons.forEach(button => button.addEventListener("click", showLightBox));
 closeButton.addEventListener("click", hideLightBox);
 playbutton.addEventListener("click", play);
 pausebutton.addEventListener("click", pause);
 rewindbutton.addEventListener("click", rewind);
})();
