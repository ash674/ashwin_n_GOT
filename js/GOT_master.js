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
  //debugger;

  lightbox.classList.add("show-lightbox");
    houseVdo.play();
}
function hideLightBox() {
  lightbox.classList.remove("show-lightbox");
    houseVdo.pause();
      houseVdo.currentTime = 0;
}
function play() {
  houseVdo.play();
  if (paused) {

  }
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
