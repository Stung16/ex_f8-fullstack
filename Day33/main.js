var btnVoice = document.querySelector(".btnVoice");
var action = document.querySelector(".action");
var result = document.querySelector(".result");
btnVoice.addEventListener("click", function () {
  var transcript = "";
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  // Sử dụng tiếng Việt
  recognition.lang = "vi-VN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();

  recognition.onstart = function () {
    action.innerHTML = "hãy nói nội dung bạn muốn";
    result.style.visibility = "hidden";
  };
  recognition.onspeechend = function () {
    action.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
    recognition.stop();
  };
  recognition.onresult = function (event) {
    action.style.color = "green";
    transcript = event.results[0][0].transcript;
    result.innerHTML = `Kết quả nhận được: ${transcript}.`;
    result.style.visibility = "visible";
  };
  recognition.onend = function (event) {
    // .setAttribute("hidden", "");
    transcript = transcript
      .toLowerCase()
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replaceAll("?", "");
    switch (transcript) {
      case "youtube":
        setTimeout(function () {
          window.open("https://www.youtube.com");
        }, 1000);
        break;
      case "facebook":
        setTimeout(function () {
          window.open("https://www.facebook.com");
        }, 1000);
        break;
      case "google":
        setTimeout(function () {
          window.open("https://www.google.com");
        }, 1000);
        break;
      case "google drive":
        setTimeout(function () {
          window.open("https://drive.google.com");
        }, 1000);
        break;
      case "google maps":
        setTimeout(function () {
          window.open("https://maps.google.com");
        }, 1000);
        break;
      default:
        if (
          transcript.includes("chỉ đường ") ||
          transcript.includes("chỉ đường tới ") ||
          transcript.includes("đường tới ") ||
          transcript.includes("tới ")
        ) {
          transcript = transcript
            .replace("chỉ đường ", "")
            .replace("chỉ đường tới ", "")
            .replace("đường tới ", "")
            .replace("tới ", "");
          setTimeout(function () {
            window.open(`https://www.google.com/maps/place/${transcript}/`);
          }, 1000);
        } else if (
          transcript.includes("bài hát ") ||
          transcript.includes("mở bài hát ") ||
          transcript.includes("nghe bài hát ")
        ) {
          transcript = transcript
            .replace("mở bài hát ", "")
            .replace("nghe bài hát ", "")
            .replace("bài hát ", "");
          setTimeout(function () {
            window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${transcript}`);
          }, 1000);
        } else if (
          transcript.includes("video ") ||
          transcript.includes("mở video ") ||
          transcript.includes("xem video ")
        ) {
          transcript = transcript
            .replace("xem video ", "")
            .replace("mở video ", "")
            .replace("video ", "");
          setTimeout(function () {
            window.open(
              `https://www.youtube.com/results?search_query=${transcript}`
            );
          }, 1000);
        } else {
          result.innerHTML = `Kết quả: Không thực hiện được yêu cầu với từ khoá "${transcript}"`;
        }
    }
  };
});
