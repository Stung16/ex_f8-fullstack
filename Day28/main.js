var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var time_hover = progressBar.querySelector(".time-hover");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currentTime);
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;
    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;
  // console.log("Đang chạy");
  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);
    handleUpdateValue(value);
  }
});
progressBar.addEventListener("mousemove", function (e) {
  time_hover.classList.add("show");
  var raze = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (raze / 100) * audio.duration;
  time_hover.innerText = getTime(currentTime);
  time_hover.style.left = `${e.offsetX}px`;
});
progressBar.addEventListener("mouseout", function () {
  time_hover.classList.remove("show");
  time_hover.innerText = 0;
  time_hover.style.left = 0;
});
audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});
audio.addEventListener("pause", function () {
    playBtn.innerHTML = playBtnIcon;
});