const me = document.querySelector("#user-saurabh");
me.addEventListener("click", function () {
  window.open("https://github.com/saurabh-kud", "_blank");
});

const show = document.querySelector("#player");
const playBtn = document.querySelector("#play_btn");
const playStatus = document.querySelector("#play_icon");
const audio = document.querySelector("#audio");
const cardAll = document.querySelectorAll(".card");
const cardWeek = document.querySelectorAll(".week_card");
const cardRight = document.querySelectorAll(".music");
const soundBtn = document.querySelector("#sound_btn");
const soundStatus = document.querySelector("#sound_status");
const close = document.querySelector("#close");
cardAll.forEach((card) => {
  card.addEventListener("click", function () {
    if (show.classList.contains("no_show")) {
      show.classList.remove("no_show");
    }
    audio.play();
    playBtn.classList.add("playing");
  });
});
cardWeek.forEach((card) => {
  card.addEventListener("click", function () {
    if (show.classList.contains("no_show")) {
      show.classList.remove("no_show");
    }
    audio.play();
    playBtn.classList.add("playing");
  });
});
cardRight.forEach((card) => {
  card.addEventListener("click", function () {
    if (show.classList.contains("no_show")) {
      show.classList.remove("no_show");
    }
    audio.play();
    playBtn.classList.add("playing");
  });
});

playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("playing")) {
    audio.pause();
    playBtn.classList.remove("playing");
    playBtn.classList.add("pause");
    playStatus.classList.remove("fa-pause");
    playStatus.classList.add("fa-play");
  } else if (playBtn.classList.contains("pause")) {
    playBtn.classList.remove("pause");
    playBtn.classList.add("playing");
    playStatus.classList.remove("fa-play");
    playStatus.classList.add("fa-pause");
    audio.play();
  }
});
// sound status muted or not

soundBtn.addEventListener("click", () => {
  if (soundBtn.classList.contains("un_muted")) {
    audio.muted = true;
    soundBtn.classList.remove("un_muted");
    soundBtn.classList.add("muted");
    soundStatus.classList.remove("fa-volume-high");
    soundStatus.classList.add("fa-volume-low");
  } else {
    audio.muted = false;
    soundBtn.classList.remove("muted");
    soundBtn.classList.add("un_muted");
    soundStatus.classList.remove("fa-volume-low");
    soundStatus.classList.add("fa-volume-high");
  }
});

// close the music player
close.addEventListener("click", () => {
  show.classList.add("no_show");
  audio.pause();
  audio.currentTime = 0;

  playBtn.classList.remove("playing");

  playBtn.classList.remove("pause");
  playStatus.classList.add("fa-pause");
  playStatus.classList.remove("fa-play");
});
